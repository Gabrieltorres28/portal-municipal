import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';
import { buildMunicipalSystemPrompt } from '../../../lib/municipal-chat-context';

export const runtime = 'nodejs';

type IncomingMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const OUT_OF_SCOPE_MESSAGE =
  'Lo siento, no puedo ayudarte con eso. Estoy acá para guiarte sobre El Alcázar, trámites, servicios y canales oficiales del portal.';

const MAX_RESPONSE_CHARS = 520;

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

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!,.;:()[\]{}"'`´]/g, ' ')
    .replace(/\bq\b/g, 'que')
    .replace(/\bk\b/g, 'que')
    .replace(/\bxq\b/g, 'porque')
    .replace(/\bpa\b/g, 'para')
    .replace(/\binfo\b/g, 'informacion')
    .replace(/\btramitez\b/g, 'tramites')
    .replace(/\btramits\b/g, 'tramites')
    .replace(/\bindentendente\b/g, 'intendente')
    .replace(/\bintendete\b/g, 'intendente')
    .replace(/\balcazar\b/g, 'alcazar')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasAny(normalized: string, terms: string[]) {
  return terms.some((term) => normalized.includes(term));
}

function looksLikeNonsense(raw: string, normalized: string) {
  const compact = raw.replace(/\s+/g, '');
  const letters = normalized.replace(/[^a-z0-9]/g, '');
  const alphaCount = (normalized.match(/[a-z]/g) || []).length;
  const meaningfulWords = normalized.split(' ').filter((word) => word.length >= 2);
  const knownShortMessages = /^(hola+|ola+|buenas+|ok|si|no|ayuda|tramites?|turnos?)$/.test(normalized);

  if (!compact) {
    return true;
  }

  if (compact.length >= 4 && alphaCount === 0) {
    return true;
  }

  if (compact.length >= 8 && alphaCount / compact.length < 0.35) {
    return true;
  }

  if (/([a-z0-9])\1{5,}/i.test(compact)) {
    return true;
  }

  if (!knownShortMessages && letters.length >= 7 && !/[aeiou]/.test(letters)) {
    return true;
  }

  return !knownShortMessages && normalized.length < 3 && meaningfulWords.length === 0;
}

function limitResponse(text: string) {
  const cleaned = text
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 5)
    .join('\n');

  if (cleaned.length <= MAX_RESPONSE_CHARS) {
    return cleaned;
  }

  return `${cleaned.slice(0, MAX_RESPONSE_CHARS - 1).trim()}…`;
}

function getKnownResponse(userMessage: string) {
  const normalized = normalizeText(userMessage);

  if (looksLikeNonsense(userMessage, normalized)) {
    return OUT_OF_SCOPE_MESSAGE;
  }

  const isGreeting = /^(hola|ola|buenas|buen dia|buenos dias|buenas tardes|buenas noches|hey|holaa)(\s|$)/.test(normalized);

  if (isGreeting && normalized.split(' ').length <= 3) {
    return 'Hola. Soy el Asistente El Alcázar. Puedo ayudarte con trámites, reclamos, turnos, formularios o información básica del municipio.';
  }

  if (
    hasAny(normalized, [
      'en que me puedes ayudar',
      'en que me podes ayudar',
      'que podes hacer',
      'que puedes hacer',
      'puedes ayudar',
      'podes ayudar',
      'me ayudas',
      'ayudame',
      'ayuda',
      'necesito ayuda',
      'como me ayudas',
    ])
  ) {
    return 'Puedo ayudarte a navegar el portal de El Alcázar: trámites, reclamos, turnos, formularios, contacto, turismo e información municipal. También puedo responder sobre el municipio, su ubicación y el intendente.';
  }

  if (hasAny(normalized, ['como navego', 'navegar', 'navego', 'menu', 'secciones', 'donde encuentro'])) {
    return 'Usá el menú superior para moverte por el portal. Trámites reúne gestiones y formularios; Municipio explica información institucional; Autoridades muestra al intendente; Turismo presenta identidad local; Contacto reúne canales oficiales.';
  }

  if (
    hasAny(normalized, ['que es esto', 'q es esto', 'que es este', 'para que sirve', 'para q sirve', 'para que sirbe', 'que es estoo']) ||
    (hasAny(normalized, ['esto', 'estoo', 'portal', 'chat', 'asistente']) && hasAny(normalized, ['sirve', 'sirbe', 'funciona', 'que es']))
  ) {
    return 'Este es el asistente del portal municipal de El Alcázar. Sirve para orientarte sobre trámites, servicios, reclamos, turnos, formularios e información institucional.';
  }

  if (
    hasAny(normalized, ['quien es el intendente', 'intendente', 'intendente municipal', 'quien gobierna', 'eduardo vazquez', 'dr eduardo', 'vazquez']) ||
    (hasAny(normalized, ['quien']) && hasAny(normalized, ['alcazar', 'municipio']))
  ) {
    return 'El intendente municipal de El Alcázar es el Dr. Eduardo Vázquez. Encabeza el Departamento Ejecutivo y la coordinación institucional de la gestión local.';
  }

  if (hasAny(normalized, ['donde esta', 'ubicacion', 'donde queda', 'dond esta', 'dnd esta', 'dnd queda'])) {
    return 'El Alcázar está en la provincia de Misiones, Argentina. Este portal reúne información institucional, trámites y canales de atención municipal.';
  }

  if (
    hasAny(normalized, ['que es el alcazar', 'que es alcazar', 'contame sobre el alcazar', 'cuentame sobre el alcazar', 'hablame de el alcazar', 'info sobre el alcazar']) ||
    normalized === 'alcazar' ||
    normalized === 'el alcazar' ||
    (hasAny(normalized, ['alcazar']) && hasAny(normalized, ['contame', 'cuentame', 'informacion', 'sobre', 'municipio']))
  ) {
    return 'El Alcázar es un municipio de Misiones, Argentina, con identidad comunitaria y cercanía local. El portal organiza accesos a trámites, servicios, contacto e información institucional para vecinos y visitantes.';
  }

  if (hasAny(normalized, ['patente', 'auto', 'automotor'])) {
    return 'La patente se gestiona desde el portal oficial de ATM Misiones. Acceso: https://sinclavefiscal.atm.misiones.gob.ar/sc/automotor/emision_ba_ipa';
  }

  if (hasAny(normalized, ['inmobiliario', 'impuesto inmobiliario', 'inmueble'])) {
    return 'El impuesto inmobiliario se consulta en el portal oficial provincial. Acceso: https://sinclavefiscal.atm.misiones.gob.ar/sc/inmobiliario/emision_boleta_inmo';
  }

  if (hasAny(normalized, ['reclamo', 'queja', 'problema', 'alumbrado', 'residuos', 'calle'])) {
    return 'Para reclamos vecinales podés escribir a reclamos@alcazar.gob.ar. Incluí datos de contacto, ubicación del problema y una descripción breve.';
  }

  if (hasAny(normalized, ['turno', 'atencion', 'cita'])) {
    return 'Para turnos y atención municipal podés escribir a atencion@alcazar.gob.ar. Indicá el trámite o consulta y un teléfono o correo de contacto.';
  }

  if (hasAny(normalized, ['cementerio'])) {
    return 'Para gestiones del cementerio municipal podés escribir a mesaentrada@alcazar.gob.ar. Conviene indicar el motivo de la consulta y datos de contacto.';
  }

  if (hasAny(normalized, ['formulario', 'requisito', 'papeles', 'documentacion'])) {
    return 'Los formularios y requisitos están en la sección /tramites/formularios. Ahí podés revisar la orientación disponible antes de iniciar una gestión.';
  }

  if (hasAny(normalized, ['tramite', 'tramites', 'servicio', 'servicios', 'hacer desde la web'])) {
    return 'Desde el portal podés orientarte sobre patente, impuesto inmobiliario, reclamos vecinales, cementerio municipal, turnos y formularios. Decime cuál necesitás y te indico el canal correcto.';
  }

  if (hasAny(normalized, ['contacto', 'correo', 'email', 'mail', 'telefono', 'horario', 'direccion'])) {
    return 'El portal muestra canales oficiales de contacto para orientación municipal. Para consultas generales podés usar contacto@elalcazar.gob.ar o la sección Contacto del sitio.';
  }

  if (hasAny(normalized, ['turismo', 'ferias', 'naturaleza', 'circuito rural', 'productivo'])) {
    return 'La sección Turismo presenta tres ejes: naturaleza misionera, circuito rural y productivo, y ferias o encuentros locales. Es una sección complementaria para conocer la identidad de El Alcázar.';
  }

  return null;
}

function getInstitutionalFallback(userMessage: string) {
  return (
    getKnownResponse(userMessage) ||
    'Puedo orientarte con información del portal municipal de El Alcázar. Probá con patente, reclamos, turnos, formularios, ubicación del municipio o intendente.'
  );
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

    const knownResponse = getKnownResponse(lastUserContent);
    if (knownResponse) {
      return NextResponse.json({
        message: knownResponse,
        fallback: false,
      });
    }

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

    const text = limitResponse(response.text?.trim() || '');
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
