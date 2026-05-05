import { RotateCcw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type InstitutionalFlipCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
};

export function InstitutionalFlipCard({
  icon: Icon,
  title,
  description,
  detail,
}: InstitutionalFlipCardProps) {
  const controlId = `flip-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <article className="h-full">
      <input id={controlId} type="checkbox" className="flip-toggle sr-only" />
      <div className="flip-card group">
        <div className="flip-card-inner">
          <div className="flip-card-face border border-white/12 bg-white p-6 text-gray-900 shadow-xl shadow-primary-950/20">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-800 ring-1 ring-primary-200">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-gray-950">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
            <div className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
              Institucional
            </div>
          </div>

          <div className="flip-card-face flip-card-back border border-primary-200 bg-primary-50 p-6 text-gray-900 shadow-xl shadow-primary-950/20">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
              Detalle operativo
            </p>
            <h3 className="mt-4 font-display text-xl font-bold text-gray-950">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-gray-700">{detail}</p>
          </div>
        </div>
      </div>

      <label
        htmlFor={controlId}
        className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 md:hidden"
        role="button"
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        <span className="flip-label-more">Ver más</span>
        <span className="flip-label-less">Volver</span>
      </label>
    </article>
  );
}
