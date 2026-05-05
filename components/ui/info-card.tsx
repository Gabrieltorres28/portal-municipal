import type { LucideIcon } from 'lucide-react';

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function InfoCard({ icon: Icon, title, description, className = '' }: InfoCardProps) {
  return (
    <article className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}
