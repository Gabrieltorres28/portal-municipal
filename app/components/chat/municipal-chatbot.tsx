'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Bot,
  Loader2,
  MessageSquare,
  SendHorizonal,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react';
import {
  municipalAssistantGreeting,
  municipalQuickPrompts,
} from '../../../lib/municipal-chat-context';
import type { ChatMessage } from './types';

let messageSequence = 0;

function createMessage(role: ChatMessage['role'], content: string, id?: string): ChatMessage {
  messageSequence += 1;

  return {
    id: id ?? `${role}-${messageSequence}`,
    role,
    content,
  };
}

const quickPromptResponses: Record<string, string> = {
  '¿Cómo pago la patente?':
    'El pago de patente se gestiona en el portal oficial provincial de ATM Misiones. Podés ingresar desde este enlace: https://sinclavefiscal.atm.misiones.gob.ar/sc/automotor/emision_ba_ipa',
  '¿Cómo hago un reclamo?':
    'Para reclamos vecinales podés usar el correo reclamos@alcazar.gob.ar. Desde la sección de trámites del portal se abre un correo precompletado para completar tu reclamo.',
  '¿Qué trámites puedo hacer desde la web?':
    'Desde la web podés acceder a pago de patente, impuesto inmobiliario, reclamos vecinales, gestiones de cementerio municipal, turnos y atención, y formularios y requisitos.',
  'Contame sobre El Alcázar':
    'El Alcázar es un municipio de Misiones con fuerte identidad comunitaria y cercanía con sus vecinos. Este portal reúne información institucional, accesos a trámites y canales básicos de orientación municipal.',
};

export default function MunicipalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage('assistant', municipalAssistantGreeting, 'assistant-initial'),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const hasConversation = useMemo(
    () => messages.some((message) => message.role === 'user'),
    [messages],
  );

  useEffect(() => {
    if (isOpen) {
      const isMobileViewport = window.matchMedia('(max-width: 639px)').matches;

      if (!isMobileViewport) {
        textareaRef.current?.focus();
        return;
      }

      const activeElement = document.activeElement;
      if (activeElement instanceof HTMLElement) {
        activeElement.blur();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading]);

  async function submitMessage(text: string) {
    const value = text.trim();
    if (!value || isLoading) {
      return;
    }

    const nextUserMessage = createMessage('user', value);
    const nextMessages = [...messages, nextUserMessage];

    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | { message?: string; error?: string; fallback?: boolean }
        | null;

      if (!response.ok) {
        const errorMessage =
          data?.error ||
          data?.message ||
          'No pude responder ahora mismo. Intentá nuevamente en unos segundos.';

        throw new Error(errorMessage);
      }

      if (!data || typeof data.message !== 'string' || data.message.trim().length === 0) {
        throw new Error('No recibí una respuesta útil del asistente en este momento.');
      }

      const assistantMessage = data.message;
      setMessages((current) => [...current, createMessage('assistant', assistantMessage)]);
    } catch (submissionError) {
      setMessages((current) => [
        ...current,
        createMessage(
          'assistant',
          submissionError instanceof Error && submissionError.message
            ? submissionError.message
            : 'No pude completar una respuesta precisa en este momento. Puedo seguir orientándote con patente, reclamos, turnos, cementerio, formularios o accesos oficiales del portal.',
        ),
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitMessage(input);
  }

  function resetChat() {
    setMessages([createMessage('assistant', municipalAssistantGreeting, 'assistant-initial')]);
    setInput('');
  }

  function handleQuickPrompt(prompt: string) {
    const userMessage = createMessage('user', prompt);
    const directResponse = quickPromptResponses[prompt];

    if (directResponse) {
      setMessages((current) => [
        ...current,
        userMessage,
        createMessage('assistant', directResponse),
      ]);
      return;
    }

    void submitMessage(prompt);
  }

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-200 sm:bottom-6 sm:right-6 ${
          isOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
        }`}
      >
        <div className="mb-2 flex justify-end sm:mb-3">
          <span className="inline-flex items-center rounded-full border border-primary-100 bg-white/95 px-3 py-1 text-xs font-semibold text-primary-700 shadow-[0_8px_24px_rgba(22,66,47,0.12)] backdrop-blur-sm animate-[fadeIn_.4s_ease-out]">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Asistente
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-700/10 bg-primary-600 text-white shadow-[0_18px_38px_rgba(22,66,47,0.28)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:h-16 sm:w-16"
          aria-expanded={isOpen}
          aria-controls="municipal-chat-panel"
          aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente municipal'}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />}
        </button>
      </div>

      <div
        id="municipal-chat-panel"
        className={`fixed inset-x-4 bottom-20 top-[88px] z-50 origin-bottom-right transition-all duration-300 ease-out sm:inset-x-auto sm:top-auto sm:right-6 sm:bottom-28 sm:w-[390px] ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <section className="flex h-full flex-col overflow-hidden rounded-[24px] border border-primary-100/80 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.18)] sm:block sm:h-auto sm:rounded-[28px]">
          <header className="border-b border-gray-100 bg-[linear-gradient(180deg,#f7fbf8_0%,#ffffff_100%)] px-4 py-4 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                  <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
                  Asistente El Alcázar
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-gray-900">
                  Asistente El Alcázar
                </h2>
                <p className="mt-1 text-sm text-gray-600">Tu guía municipal</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetChat}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-colors duration-200 hover:border-primary-200 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  aria-label="Limpiar conversación"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-colors duration-200 hover:border-primary-200 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  aria-label="Cerrar asistente"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#fbfcfb_0%,#f7faf8_100%)] px-4 py-4 sm:max-h-[68vh] sm:min-h-[460px] sm:flex-none sm:px-5">
            {!hasConversation ? (
              <div className="mb-4 rounded-2xl border border-primary-100 bg-white/85 p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">Consultas frecuentes</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {municipalQuickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleQuickPrompt(prompt)}
                      className="rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-medium text-primary-700 transition-colors duration-200 hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <article
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                      message.role === 'user'
                        ? 'rounded-br-md bg-primary-600 text-white'
                        : 'rounded-bl-md border border-white/70 bg-white text-gray-700'
                    }`}
                  >
                    {message.content}
                  </article>
                </div>
              ))}

              {isLoading ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center rounded-2xl rounded-bl-md border border-white/70 bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin text-primary-600" />
                    Pensando una respuesta...
                  </div>
                </div>
              ) : null}

              <div ref={bottomRef} />
            </div>
          </div>

          <div className="border-t border-gray-100 bg-white px-4 py-3 sm:px-5 sm:py-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="municipal-chat-input" className="sr-only">
                Escribí tu consulta
              </label>
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-2 focus-within:border-primary-300 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(86,182,135,0.14)]">
                <textarea
                  id="municipal-chat-input"
                  ref={textareaRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  rows={2}
                  placeholder="Escribí tu consulta..."
                  className="max-h-32 min-h-[56px] w-full resize-none bg-transparent px-3 py-2 text-base text-gray-700 outline-none placeholder:text-gray-400 sm:text-sm"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault();
                      void submitMessage(input);
                    }
                  }}
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="hidden text-xs leading-5 text-gray-500 sm:block">
                  Orientación institucional breve sobre trámites y servicios del portal.
                </p>
                <button
                  type="submit"
                  disabled={isLoading || input.trim().length === 0}
                  className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:w-auto"
                >
                  Enviar
                  <SendHorizonal className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
