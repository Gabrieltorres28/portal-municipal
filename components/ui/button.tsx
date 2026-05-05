import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600',
  secondary:
    'border border-primary-200 bg-white text-primary-700 hover:bg-primary-50 focus-visible:outline-primary-600',
  ghost:
    'border border-white/20 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  const baseClassName = `inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        className={baseClassName}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClassName}>
      {children}
    </Link>
  );
}
