import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';
import { buildMunicipalSystemPrompt } from '../../../lib/municipal-chat-context';

export const runtime = 'nodejs';

type IncomingMessage = {
  role: 'user' | 'assistant';
  content: string;
};

function isIncomingMessage(value: unknown): value is IncomingMessage {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const message = value as Record<string, unknown>;
  return (
    (message.role === 'user' || message.role === 'assistant') &&
    typeof message.content === 'string'
  );
}

function getInstitutionalFallback(userMessage: string) {
  const normalized = userMessage.trim().toLowerCase();

  if (!normalized || normalized.length < 4) {
    return 'Puedo orientarte sobre patente, impuesto inmobiliario, reclamos vecinales, turnos, cementerio municipal y formularios. Si querés, escribime cuál de esos trámites necesitás.';
  }

  if (/(^|\b)(hola|buenas|buen día|buen dia|buenas tardes|buenas noches)(\b|$)/i.test(normalized)) {
    return 'Hola. Soy el Asistente El Alcázar, tu guía municipal. Puedo ayudarte con trámites, servicios y accesos del portal, por ejemplo patente, reclamos, turnos o formularios.';
  }

  if (normalized.includes('qué es esto') || normalized.includes('que es esto')) {
    return 'Este es el Asistente El Alcázar, una guía municipal para orientarte sobre trámites, servicios y accesos oficiales del portal. Si querés, puedo indicarte cómo pagar patente, hacer un reclamo o consultar formularios.';
  }

  if (normalized.includes('para qué sirve') || normalized.includes('para que sirve')) {
    return 'Sirve para orientarte en los trámites y servicios disponibles en el portal municipal de El Alcázar. Puedo indicarte enlaces oficiales, correos de contacto y accesos internos del sitio.';
  }

  return 'Puedo orientarte con los trámites y servicios disponibles en el portal municipal. Si tu consulta quedó muy abierta, probá con algo como "¿Cómo pago la patente?", "¿Cómo hago un reclamo?" o "¿Dónde veo formularios?"';
}

function sanitizeMessages(rawMessages: unknown): IncomingMessage[] {
  if (!Array.isArray(rawMessages)) {
    return [];
  }

  return rawMessages
    .filter(isIncomingMessage)
    .map((message: IncomingMessage) => ({
      role: message.role,
      content: message.content.trim(),
    }))
    .filter((message: IncomingMessage) => message.content.length > 0)
    .slice(-12);
}

export async function POST(request: Request) {
  let lastUserContent = '';

  try {
    const body = await request.json();
    const messages = sanitizeMessages(body?.messages);
    const lastUserMessage = [...messages]
      .reverse()
      .find((message: IncomingMessage) => message.role === 'user');

    if (!lastUserMessage) {
      return NextResponse.json(
        {
          message:
            'Puedo ayudarte con trámites, reclamos, turnos, formularios y accesos oficiales del portal municipal. Contame qué necesitás.',
          fallback: true,
        },
        { status: 200 },
      );
    }

    lastUserContent = lastUserMessage.content;

    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey) {
      console.error('[chat] GEMINI_API_KEY no está configurada.');

      return NextResponse.json(
        {
          message: getInstitutionalFallback(lastUserContent),
          fallback: true,
          error: 'Falta configurar GEMINI_API_KEY en el servidor.',
        },
        { status: 200 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: messages.map((message: IncomingMessage) => ({
        role: message.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: message.content }],
      })),
      config: {
        systemInstruction: buildMunicipalSystemPrompt(),
        maxOutputTokens: 320,
        temperature: 0.5,
        topP: 0.9,
      },
    });

    const text = response.text?.trim();
    if (!text) {
      console.error('[chat] Gemini respondió sin texto útil.', {
        userMessage: lastUserContent,
      });

      return NextResponse.json(
        {
          message: getInstitutionalFallback(lastUserContent),
          fallback: true,
        },
        { status: 200 },
      );
    }

    return NextResponse.json({
      message: text,
      fallback: false,
    });
  } catch (error) {
    console.error('[chat] Error al generar respuesta con Gemini:', error);

    return NextResponse.json(
      {
        message: getInstitutionalFallback(lastUserContent),
        fallback: true,
        error: 'El asistente respondió con una orientación institucional de respaldo.',
      },
      { status: 200 },
    );
  }
}
