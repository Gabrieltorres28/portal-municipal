'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Municipio', href: '#municipio' },
    { label: 'Autoridades', href: '#autoridades' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Trámites y Servicios', href: '#servicios' },
    { label: 'Turismo', href: '#turismo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-[72px] items-center justify-between sm:h-16">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="text-left">
              <span className="font-display text-base font-bold tracking-[0.16em] text-primary-800 sm:text-xl">
                EL ALCÁZAR
              </span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden rounded-xl p-2.5 text-gray-700 transition-colors hover:bg-gray-100"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Menú mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[420px] border-t border-gray-200' : 'max-h-0'
        }`}
      >
        <nav className="bg-white px-5 py-4 space-y-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-primary-50 hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
