'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex h-[74px] items-center justify-between gap-4 sm:h-[78px] lg:gap-10">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 lg:flex-none lg:justify-start lg:gap-6">
            <a href="#inicio" className="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3.5 lg:gap-4">
              <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                <Image
                  src="/logoalcazar.png"
                  alt="Logo oficial de la Municipalidad de El Alcázar"
                  fill
                  sizes="(max-width: 640px) 44px, 48px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="min-w-0 text-left">
                <span className="block truncate font-display text-[0.9rem] font-bold tracking-[0.12em] text-primary-800 sm:text-lg lg:text-xl">
                  EL ALCÁZAR
                </span>
                <span className="hidden text-[0.7rem] font-medium uppercase tracking-[0.14em] text-primary-700/80 sm:block">
                  Municipalidad
                </span>
              </div>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-3 shrink-0 rounded-xl border border-primary-900/10 bg-white/70 p-2.5 text-gray-700 shadow-sm transition-colors hover:bg-gray-100 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary-700"
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
        <nav className="bg-white px-4 pb-5 pt-3 space-y-1.5 sm:px-6">
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
