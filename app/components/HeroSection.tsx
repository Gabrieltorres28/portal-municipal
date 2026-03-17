'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, FileText, Building2 } from 'lucide-react';

export default function HeroSection() {
  const subtitle = 'Portal oficial del municipio';
  const description = 'Trabajamos para fortalecer nuestra comunidad, preservar nuestra identidad local y facilitar el acceso a información y servicios para todos los vecinos de El Alcázar.';
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const [typedDescription, setTypedDescription] = useState('');

  useEffect(() => {
    setTypedSubtitle('');
    setTypedDescription('');

    let subtitleIndex = 0;
    let descriptionIndex = 0;
    let descriptionTimer: number | undefined;

    const subtitleTimer = window.setInterval(() => {
      subtitleIndex += 1;
      setTypedSubtitle(subtitle.slice(0, subtitleIndex));

      if (subtitleIndex >= subtitle.length) {
        window.clearInterval(subtitleTimer);

        descriptionTimer = window.setInterval(() => {
          descriptionIndex += 1;
          setTypedDescription(description.slice(0, descriptionIndex));

          if (descriptionIndex >= description.length) {
            window.clearInterval(descriptionTimer);
          }
        }, 18);
      }
    }, 35);

    return () => {
      window.clearInterval(subtitleTimer);
      if (descriptionTimer) {
        window.clearInterval(descriptionTimer);
      }
    };
  }, []);

  return (
    <section id="inicio" className="relative flex min-h-[82vh] items-center pt-[72px] sm:min-h-[90vh] sm:pt-20">
      {/* Imagen de fondo oficial */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/fondoalcazar.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_28%] sm:object-[center_32%] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/88 via-primary-900/62 to-primary-800/34 z-10" />
        <div className="absolute inset-x-0 bottom-0 top-[42%] bg-gradient-to-t from-primary-950/62 to-transparent z-10" />
      </div>

      {/* Contenido */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl rounded-[2rem] border border-white/18 bg-primary-950/38 px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-8 sm:py-9">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center space-x-2 rounded-full border border-emerald-200/35 bg-emerald-400/12 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Building2 className="text-emerald-100" size={16} />
            <span className="text-emerald-100 text-sm font-semibold tracking-[0.02em]">Gobierno Municipal</span>
          </div>

          {/* Título principal */}
          <h1 className="mb-5 max-w-[11ch] text-balance font-display text-4xl font-bold leading-[1.02] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.42)] animate-fade-in-up sm:max-w-[12ch] sm:text-6xl lg:text-7xl">
            Municipalidad de El Alcázar
          </h1>

          {/* Subtítulo */}
          <p className="mb-3 min-h-[3.5rem] font-display text-lg font-semibold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.36)] animate-fade-in-up animation-delay-100 sm:min-h-[4rem] sm:text-2xl">
            {typedSubtitle}
            <span className="typing-caret" aria-hidden="true" />
          </p>

          {/* Texto institucional */}
          <p className="mb-8 max-w-2xl min-h-[8.75rem] text-base leading-7 text-primary-50/96 drop-shadow-[0_4px_18px_rgba(0,0,0,0.3)] animate-fade-in-up animation-delay-200 sm:mb-10 sm:min-h-[7.5rem] sm:text-lg sm:leading-relaxed">
            {typedDescription}
            <span className="typing-caret" aria-hidden="true" />
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 animate-fade-in-up animation-delay-300 sm:flex-row sm:gap-4">
            <a
              href="#noticias"
              className="group inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-primary-700 shadow-xl transition-all duration-200 hover:scale-[1.02] hover:bg-primary-50 hover:shadow-2xl sm:px-8 sm:py-4"
            >
              <FileText className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Ver noticias
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#servicios"
              className="group inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 sm:px-8 sm:py-4"
            >
              <Building2 className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Trámites y servicios
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 sm:h-24" />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .typing-caret {
          display: inline-block;
          width: 0.08em;
          height: 1em;
          margin-left: 0.12em;
          vertical-align: -0.12em;
          background: currentColor;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50.01%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
