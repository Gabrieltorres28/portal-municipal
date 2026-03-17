'use client';

import { Heart, Users, Leaf, Sprout } from 'lucide-react';

export default function MunicipalitySection() {
  const features = [
    {
      icon: Heart,
      title: 'Comunidad unida',
      description: 'Una comunidad comprometida con el desarrollo local y el bienestar común.',
    },
    {
      icon: Leaf,
      title: 'Naturaleza misionera',
      description: 'Rodeados por la selva y la biodiversidad característica de nuestra provincia.',
    },
    {
      icon: Users,
      title: 'Identidad local',
      description: 'Preservamos nuestras tradiciones y fortalecemos el sentido de pertenencia.',
    },
    {
      icon: Sprout,
      title: 'Crecimiento sostenible',
      description: 'Trabajamos por un desarrollo que respete nuestra identidad y entorno.',
    },
  ];

  return (
    <section id="municipio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido */}
          <div>
            <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sobre nosotros
            </div>
            
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              El Alcázar, corazón de Misiones
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                El Alcázar es un municipio pequeño ubicado en la provincia de Misiones, 
                caracterizado por su identidad rural, su vínculo profundo con la naturaleza 
                y una comunidad que valora el trabajo, la solidaridad y las tradiciones locales.
              </p>
              
              <p>
                Nuestra localidad se distingue por su compromiso con el desarrollo sostenible, 
                la preservación del ambiente natural misionero y el fortalecimiento de la vida 
                comunitaria. Aquí, el campo productivo convive en armonía con la selva, 
                generando una economía local basada en la agricultura, el turismo rural y 
                emprendimientos familiares.
              </p>
              
              <p>
                Desde el gobierno municipal trabajamos cada día para mejorar la calidad de vida 
                de nuestros vecinos, facilitar el acceso a servicios esenciales y promover 
                iniciativas que fortalezcan nuestra identidad como pueblo misionero.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/fotoalcazar.png"
                alt="Vista de El Alcázar"
                className="h-[420px] w-full object-cover object-center sm:h-[520px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
            </div>
            
            {/* Badge decorativo */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                <span className="font-display font-bold text-gray-900">El Alcázar hoy</span>
              </div>
              <p className="text-sm text-gray-600">
                Un municipio que crece respetando sus raíces y su naturaleza
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
