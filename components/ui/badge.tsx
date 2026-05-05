import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  tone?: 'primary' | 'blue' | 'amber' | 'slate';
};

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  primary: 'bg-primary-50 text-primary-700 border-primary-100',
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  amber: 'bg-amber-50 text-amber-800 border-amber-100',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
};

export function Badge({ children, tone = 'primary' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
