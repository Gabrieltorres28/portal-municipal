'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { municipalityInfo } from '@/lib/data/municipality';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/layout/mobile-menu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');

  useEffect(() => {
    const sectionIds = municipalityInfo.navigation
      .map((item) => item.href)
      .filter((href) => href.startsWith('#'));
    const sections = sectionIds
      .map((href) => document.querySelector(href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.2, 0.45, 0.7] },
    );

    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-shadow ${
        isScrolled ? 'border-white/10 shadow-sm' : 'border-white/10'
      }`}
      style={{ backgroundColor: '#06291e' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-4 py-3">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/logoalcazar.webp"
                alt="Logo oficial de la Municipalidad de El Alcázar"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-primary-100">
                Portal Oficial
              </p>
              <p className="truncate font-display text-lg font-bold text-white">
                {municipalityInfo.name}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {municipalityInfo.navigation.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-sm font-medium text-white transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary-100 after:transition-transform hover:text-primary-50 active:text-primary-100 ${
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="#tramites">Trámites</Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-xl border border-white/15 bg-white/10 p-2.5 text-white lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div id="mobile-navigation">
        <MobileMenu
          isOpen={isMenuOpen}
          links={municipalityInfo.navigation}
          activeHref={activeHref}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
}
