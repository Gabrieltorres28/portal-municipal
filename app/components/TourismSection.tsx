'use client';

import { Compass, Trees, Coffee, ArrowRight } from 'lucide-react';

const attractions = [
  {
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    title: 'Reserva natural El Alcázar',
    description: 'Senderos rodeados de vegetación misionera, flora autóctona y observación de aves. Un espacio ideal para conectar con la naturaleza y disfrutar de la biodiversidad local.',
  },
  {
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
    title: 'Circuito rural y productivo',
    description: 'Visitá establecimientos agrícolas locales, conocé el proceso de producción de yerba mate, té y cultivos regionales. Experimentá la vida rural misionera de primera mano.',
  },
  {
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    title: 'Cultura y tradición local',
    description: 'Disfrutá de ferias artesanales, gastronomía típica y encuentros culturales que reflejan la identidad y el espíritu comunitario de nuestro pueblo.',
  },
];

export default function TourismSection() {
  return (
    <section id="turismo" className="py-16 bg-gradient-to-b from-white to-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-5 sm:mb-6">
            Descubrí El Alcázar
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gray-900 mb-5 sm:mb-6">
            Turismo e identidad local
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-relaxed">
            Descubrí los atractivos naturales, productivos y culturales que hacen de 
            El Alcázar un destino único en el corazón de Misiones
          </p>
        </div>

        {/* Grid de atracciones */}
        <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {attractions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent-200 hover:-translate-y-1"
              >
                {/* Imagen */}
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icono flotante */}
                  <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 backdrop-blur-sm sm:h-12 sm:w-12">
                    <Icon className="text-accent-600" size={24} />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-accent-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-6 sm:leading-relaxed mb-5 sm:mb-4">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <button className="flex min-h-10 items-center text-accent-600 font-semibold text-sm group-hover:text-accent-700">
                    <span>Conocer más</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA footer */}
        <div className="mt-12 bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl p-7 text-center shadow-xl sm:mt-16 sm:p-12">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            Vení a conocer El Alcázar
          </h3>
          <p className="text-white/90 text-base sm:text-lg leading-7 mb-7 sm:mb-8 max-w-2xl mx-auto">
            Experimentá la calidez de nuestra comunidad, la belleza de la naturaleza misionera 
            y la autenticidad de un pueblo que preserva sus raíces
          </p>
          <button className="inline-flex min-h-12 items-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-accent-700 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
            Planificá tu visita
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
