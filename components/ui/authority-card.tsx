import Image from 'next/image';
import { Mail } from 'lucide-react';
import type { AuthorityItem } from '@/lib/data/authorities';

type AuthorityCardProps = {
  authority: AuthorityItem;
};

export function AuthorityCard({ authority }: AuthorityCardProps) {
  return (
    <article
      className={`rounded-[1.75rem] border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/10 sm:p-6 ${
        authority.featured ? 'border-primary-200 lg:p-8' : 'border-gray-200'
      }`}
    >
      <div className={`grid gap-6 ${authority.featured ? 'lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center lg:gap-10' : ''}`}>
        <div className={`${authority.featured ? 'grid gap-5 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center lg:block' : 'flex items-start gap-4'}`}>
          <div className={`relative overflow-hidden rounded-2xl bg-primary-50 ${authority.featured ? 'h-72 w-full sm:h-80 lg:h-[360px]' : 'h-20 w-20'}`}>
            {authority.photo ? (
              <Image
                src={authority.photo}
                alt={authority.name}
                fill
                sizes={authority.featured ? '(min-width: 1024px) 320px, (min-width: 640px) 220px, 100vw' : '80px'}
                className="object-cover"
              />
            ) : (
              <Image
                src="/authority-placeholder.svg"
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            )}
          </div>
          <div className={authority.featured ? 'lg:mt-5' : ''}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
              {authority.area}
            </p>
            <h3 className={`${authority.featured ? 'mt-3 font-display text-3xl font-bold sm:text-4xl' : 'mt-2 text-xl font-semibold'} text-gray-900`}>
              {authority.name}
            </h3>
            <p className={`${authority.featured ? 'mt-2 text-base' : 'mt-1 text-sm'} text-gray-600`}>{authority.role}</p>
          </div>
        </div>
        <div>
          <p className={`${authority.featured ? 'text-base leading-8 sm:text-lg' : 'text-sm leading-6'} text-gray-600`}>{authority.description}</p>
          {authority.contact ? (
            <a
              href={`mailto:${authority.contact}`}
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary-700"
            >
              <Mail className="mr-2 h-4 w-4" />
              {authority.contact}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
