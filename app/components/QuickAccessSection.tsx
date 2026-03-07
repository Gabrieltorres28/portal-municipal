'use client';

import { Newspaper, FileText, MapPin, Mail, ArrowRight } from 'lucide-react';

const quickAccess = [
  {
    icon: Newspaper,
    title: 'Noticias',
    description: 'Mantente informado sobre novedades, obras y eventos de nuestra comunidad.',
    href: '#noticias',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Trámites y Servicios',
    description: 'Accedé a información y gestioná trámites municipales de forma sencilla.',
    href: '#servicios',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: MapPin,
    title: 'Turismo',
    description: 'Descubrí los atractivos naturales y culturales de El Alcázar.',
    href: '#turismo',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Mail,
    title: 'Contacto',
    description: 'Comunicate con las distintas áreas del gobierno municipal.',
    href: '#contacto',
    color: 'from-gray-600 to-gray-700',
  },
];

export default function QuickAccessSection() {
  return (
    <section className="py-16 bg-gray-50 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-4 sm:text-4xl">
            Accesos rápidos
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto sm:text-lg">
            Navegá directamente a las secciones más importantes del portal
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickAccess.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:p-8"
              >
                {/* Icono */}
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14`}>
                  <Icon className="text-white" size={24} />
                </div>

                {/* Contenido */}
                <h3 className="mb-2 font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-700 sm:mb-3 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-6 text-gray-600 sm:mb-4">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="flex min-h-10 items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                  <span>Ir a la sección</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
