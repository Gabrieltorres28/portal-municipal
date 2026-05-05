import Image from 'next/image';
import { municipalityInfo } from '@/lib/data/municipality';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="isolate border-t border-primary-900/10 bg-[#06291e] text-white selection:bg-primary-700 selection:text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg shadow-black/20">
              <Image src="/logoalcazar.webp" alt="" fill sizes="56px" className="object-contain p-1" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-200">
                Municipalidad
              </p>
              <p className="font-display text-lg font-bold">{municipalityInfo.shortName}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-primary-100/80">
            Sitio institucional orientado a trámites, información pública, contacto y servicios municipales para vecinos de El Alcázar, Misiones.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-200">
            Accesos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-100/80">
            {municipalityInfo.footerQuickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="touch-manipulation text-primary-100/80 hover:text-white active:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-200">
            Servicios
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-100/80">
            <li><a href="#tramites" className="touch-manipulation text-primary-100/80 hover:text-white active:text-white">Reclamos vecinales</a></li>
            <li><a href="#tramites" className="touch-manipulation text-primary-100/80 hover:text-white active:text-white">Turnos</a></li>
            <li><a href="#tramites" className="touch-manipulation text-primary-100/80 hover:text-white active:text-white">Formularios y requisitos</a></li>
            <li><a href="#contacto" className="touch-manipulation text-primary-100/80 hover:text-white active:text-white">Atención al vecino</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-200">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-100/80">
            {municipalityInfo.contactItems.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} className="touch-manipulation text-primary-100/80 hover:text-white active:text-white">
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-primary-100/75 sm:px-6 lg:px-8">
          <p>© {year} Municipalidad de El Alcázar. Portal oficial de gestión municipal.</p>
        </div>
      </div>
    </footer>
  );
}
