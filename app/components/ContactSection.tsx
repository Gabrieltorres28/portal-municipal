'use client';

import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Av. San Martín 245, El Alcázar, Misiones',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '(03764) 555-1234',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Correo electrónico',
      content: 'contacto@elalcazar.gob.ar',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Clock,
      title: 'Horario de atención',
      content: 'Lunes a viernes de 7:00 a 13:00 hs',
      color: 'from-gray-600 to-gray-700',
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Estamos para ayudarte
          </div>
          
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Contacto
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comunicate con nosotros para consultas, sugerencias o cualquier información que necesites
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mapa placeholder */}
            <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600 font-semibold">Mapa de ubicación</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Municipalidad de El Alcázar
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-accent-100/30" />
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-10 shadow-lg">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
              Envianos un mensaje
            </h3>
            <p className="text-gray-600 mb-8">
              Completá el formulario y te responderemos a la brevedad
            </p>

            <form className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="Juan Pérez"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="3764 123456"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Escribí tu consulta o mensaje..."
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
