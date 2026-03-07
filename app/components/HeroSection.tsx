'use client';

import { ArrowRight, FileText, Building2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-[82vh] items-center pt-[72px] sm:min-h-[90vh] sm:pt-20">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-700/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600"
          alt="Naturaleza de Misiones"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center space-x-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Building2 className="text-white" size={16} />
            <span className="text-white text-sm font-medium">Gobierno Municipal</span>
          </div>

          {/* Título principal */}
          <h1 className="mb-5 font-display text-4xl font-bold leading-[1.05] text-white animate-fade-in-up sm:text-6xl lg:text-7xl">
            Municipalidad de El Alcázar
          </h1>

          {/* Subtítulo */}
          <p className="mb-3 font-display text-lg font-medium text-white/90 animate-fade-in-up animation-delay-100 sm:text-2xl">
            Portal oficial del municipio
          </p>

          {/* Texto institucional */}
          <p className="mb-8 max-w-2xl text-base leading-7 text-white/80 animate-fade-in-up animation-delay-200 sm:mb-10 sm:text-lg sm:leading-relaxed">
            Trabajamos para fortalecer nuestra comunidad, preservar nuestra identidad local 
            y facilitar el acceso a información y servicios para todos los vecinos de El Alcázar.
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
      `}</style>
    </section>
  );
}
