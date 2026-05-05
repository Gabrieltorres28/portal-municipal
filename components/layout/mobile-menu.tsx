'use client';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { NavLink } from '@/lib/data/municipality';

type MobileMenuProps = {
  isOpen: boolean;
  links: NavLink[];
  activeHref: string;
  onClose: () => void;
};

export function MobileMenu({ isOpen, links, activeHref, onClose }: MobileMenuProps) {
  return (
    <div
      className={`overflow-hidden border-t border-white/10 bg-[#06291e] transition-all lg:hidden ${
        isOpen ? 'max-h-[540px]' : 'max-h-0 border-t-0'
      }`}
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-100">
            Navegación
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/15 bg-white/10 p-2 text-white active:bg-white/15"
            aria-label="Cerrar menú"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="mt-4 space-y-1">
          {links.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block rounded-xl border-b border-transparent px-4 py-3 text-sm font-medium text-white transition-colors active:bg-white/12 ${
                  isActive
                    ? 'border-primary-100 bg-white/10 text-primary-50'
                    : 'hover:bg-white/8 hover:text-primary-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="mt-4">
          <Button href="#tramites" className="w-full">
            Trámites
          </Button>
        </div>
      </div>
    </div>
  );
}
