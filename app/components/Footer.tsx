'use client';

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Municipio', href: '#municipio' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Trámites y Servicios', href: '#servicios' },
    { label: 'Turismo', href: '#turismo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const services = [
    { label: 'Reclamos vecinales', href: '#servicios' },
    { label: 'Turnos y atención', href: '#servicios' },
    { label: 'Pago de patente', href: '#servicios' },
    { label: 'Formularios y requisitos', href: '#servicios' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-xl">EA</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">
                  El Alcázar
                </h3>
                <p className="text-sm text-gray-400">Misiones</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Municipalidad de El Alcázar. Trabajando por el desarrollo de nuestra comunidad 
              y el bienestar de todos los vecinos.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 group-hover:scale-125 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 group-hover:scale-125 transition-transform" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Av. San Martín 245<br />El Alcázar, Misiones
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">(03764) 555-1234</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">contacto@elalcazar.gob.ar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Municipalidad de El Alcázar. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Términos y condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacidad
            </a>
          </div>
        </div>

        {/* Institutional line */}
        <div className="mt-8 text-center">
          <p className="text-primary-400 font-display font-semibold text-sm">
            Portal oficial del municipio
          </p>
        </div>
      </div>
    </footer>
  );
}
