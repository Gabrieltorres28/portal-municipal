'use client';

import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    date: '28 de febrero, 2026',
    title: 'Inauguración de nueva plaza comunitaria en el barrio Norte',
    summary: 'Se completaron los trabajos de remodelación y ampliación de la plaza del barrio Norte, que ahora cuenta con nuevos juegos infantiles, área deportiva y espacios verdes mejorados.',
    category: 'Obras públicas',
  },
  {
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
    date: '22 de febrero, 2026',
    title: 'Festival cultural misionero: tradición y comunidad',
    summary: 'Este fin de semana se desarrollará el tradicional festival cultural con música folklórica, artesanías locales y gastronomía típica de la región. Entrada libre y gratuita.',
    category: 'Cultura',
  },
  {
    image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=800',
    date: '18 de febrero, 2026',
    title: 'Jornada solidaria de salud en la comunidad',
    summary: 'El municipio, junto a profesionales de la salud, realizará una jornada de atención gratuita con controles, vacunación y asesoramiento médico para todos los vecinos.',
    category: 'Salud comunitaria',
  },
];

export default function NewsSection() {
  return (
    <section id="noticias" className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-5 sm:mb-6">
            Información local
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gray-900 mb-5 sm:mb-6">
            Últimas noticias
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-7">
            Mantente informado sobre las novedades y eventos de nuestra comunidad
          </p>
        </div>

        {/* Grid de noticias */}
        <div className="grid gap-5 mb-10 sm:mb-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
            >
              {/* Imagen */}
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5 sm:p-6">
                {/* Fecha */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.date}</span>
                </div>

                {/* Título */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Resumen */}
                <p className="text-gray-600 text-sm leading-6 sm:leading-relaxed mb-5 sm:mb-4 line-clamp-3">
                  {item.summary}
                </p>

                {/* CTA */}
                <button className="flex min-h-10 items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                  <span>Leer más</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Botón ver todas */}
        <div className="text-center">
          <button className="inline-flex min-h-12 items-center rounded-xl bg-primary-600 px-6 py-3.5 text-white font-semibold transition-all shadow-lg hover:bg-primary-700 hover:shadow-xl hover:scale-[1.02] sm:px-8 sm:py-4">
            Ver todas las noticias
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
