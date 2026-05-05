import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { serviceTypeLabels, serviceTypeTone, type ServiceItem } from '@/lib/data/services';

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const isExternal = service.href.startsWith('http') || service.href.startsWith('mailto:');
  const Icon = service.icon;
  const content = (
    <article
      className={`h-full rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/10 ${
        service.featured ? 'border-primary-200' : 'border-gray-200'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
          <Icon className="h-6 w-6" />
        </div>
        <Badge tone={serviceTypeTone[service.type] as 'primary' | 'blue' | 'amber' | 'slate'}>
          {serviceTypeLabels[service.type]}
        </Badge>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-gray-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{service.description}</p>
      <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary-700">
        {service.ctaLabel}
        {isExternal ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
      </span>
    </article>
  );

  if (isExternal) {
    return (
      <a
        href={service.href}
        target={service.href.startsWith('http') ? '_blank' : undefined}
        rel={service.href.startsWith('http') ? 'noreferrer noopener' : undefined}
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={service.href} className="block h-full">
      {content}
    </Link>
  );
}
