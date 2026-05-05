import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
};

export type HeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export type QuickAccessItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type MunicipalityHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TrustItem = {
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

export const municipalityInfo = {
  name: 'Municipalidad de El Alcázar',
  shortName: 'El Alcázar',
  province: 'Misiones',
  eyebrow: 'Portal Oficial',
  heroTitle: 'Municipalidad de El Alcázar',
  heroSubtitle: 'Gobierno local, atención al vecino y servicios municipales con información clara.',
  heroActions: [
    { label: 'Iniciar trámite', href: '#tramites', variant: 'primary' },
    { label: 'Hacer reclamo', href: '#contacto', variant: 'secondary' },
    { label: 'Conocer el municipio', href: '#municipio', variant: 'ghost' },
  ] satisfies HeroAction[],
  heroTrustPoints: [
    'Atención al vecino',
    'Trámites y servicios',
    'Información oficial',
  ],
  summaryTitle: 'Gestión municipal con foco en vecinos, servicios e información pública',
  summary:
    'El portal institucional de El Alcázar concentra accesos útiles para vecinos, novedades de gestión, canales de contacto y orientación para trámites municipales. La prioridad es facilitar gestiones reales con información clara, lenguaje directo y una estructura fácil de mantener.',
  summaryImage: '/fotoalcazar.webp',
  highlights: [
    {
      title: 'Atención cercana',
      description: 'Canales de contacto directos para reclamos, consultas y orientación municipal.',
      icon: Users,
    },
    {
      title: 'Servicios ordenados',
      description: 'Información de requisitos, turnos y gestiones frecuentes con claridad operativa.',
      icon: FileText,
    },
    {
      title: 'Institucionalidad',
      description: 'Autoridades, áreas y canales oficiales presentados con claridad verificable.',
      icon: Building2,
    },
    {
      title: 'Identidad local',
      description: 'Un municipio misionero que preserva su perfil comunitario y productivo.',
      icon: Landmark,
    },
  ] satisfies MunicipalityHighlight[],
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Municipio', href: '#municipio' },
    { label: 'Trámites', href: '#tramites' },
    { label: 'Autoridades', href: '#autoridades' },
    { label: 'Turismo', href: '#turismo' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavLink[],
  quickAccess: [
    {
      title: 'Reclamos vecinales',
      description: 'Canal inicial para incidencias urbanas, alumbrado, residuos y mantenimiento.',
      href: '#contacto',
      icon: ShieldCheck,
    },
    {
      title: 'Turnos',
      description: 'Solicitá atención previa para gestiones presenciales y consultas administrativas.',
      href: '#tramites',
      icon: FileText,
    },
    {
      title: 'Tasas y consultas',
      description: 'Accedé a consultas tributarias y enlaces provinciales vinculados al municipio.',
      href: '#tramites',
      icon: Landmark,
    },
    {
      title: 'Municipio',
      description: 'Información institucional, datos locales y orientación para vecinos.',
      href: '#municipio',
      icon: Building2,
    },
    {
      title: 'Contacto',
      description: 'Teléfono, correo, horarios y vías oficiales de atención al vecino.',
      href: '#contacto',
      icon: Phone,
    },
    {
      title: 'Turismo',
      description: 'Información básica para visitantes y circuitos que refuerzan la identidad local.',
      href: '#turismo',
      icon: MapPin,
    },
  ] satisfies QuickAccessItem[],
  trustItems: [
    {
      title: 'Áreas municipales',
      description: 'Secretarías y dependencias organizadas para orientar a vecinos y contribuyentes.',
      detail:
        'Cada área municipal concentra responsabilidades específicas para ordenar consultas, derivaciones y respuestas. La estructura permite identificar mejor dónde iniciar un trámite o canalizar una solicitud.',
      icon: Building2,
    },
    {
      title: 'Canales oficiales',
      description: 'Teléfono, correo y atención presencial presentados con jerarquía y claridad.',
      detail:
        'Los canales oficiales reducen confusiones y centralizan la comunicación institucional. El vecino puede consultar horarios, enviar solicitudes y encontrar vías formales para seguimiento.',
      icon: Mail,
    },
    {
      title: 'Atención al vecino',
      description: 'Reclamos, turnos y consultas frecuentes priorizados desde el inicio del portal.',
      detail:
        'La atención se organiza alrededor de necesidades habituales: reclamos urbanos, turnos administrativos, consultas de tasas, formularios y orientación para gestiones presenciales.',
      icon: Users,
    },
    {
      title: 'Información pública',
      description: 'Autoridades, servicios y datos básicos en un lenguaje administrativo.',
      detail:
        'La información pública se presenta con criterios de legibilidad, identidad institucional y acceso rápido para que vecinos, contribuyentes y visitantes encuentren referencias confiables.',
      icon: ShieldCheck,
    },
  ] satisfies TrustItem[],
  contactItems: [
    {
      label: 'Dirección',
      value: 'Av. San Martín 245, El Alcázar, Misiones',
      icon: MapPin,
    },
    {
      label: 'Teléfono',
      value: '(03764) 555-1234',
      href: 'tel:+5437645551234',
      icon: Phone,
    },
    {
      label: 'Correo electrónico',
      value: 'contacto@elalcazar.gob.ar',
      href: 'mailto:contacto@elalcazar.gob.ar',
      icon: Mail,
    },
    {
      label: 'Horario de atención',
      value: 'Lunes a viernes de 7:00 a 13:00 hs',
      icon: Landmark,
    },
  ] satisfies ContactItem[],
  mapEmbedUrl:
    'https://www.google.com/maps?q=El%20Alc%C3%A1zar%20Misiones&z=13&output=embed',
  footerQuickLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Trámites', href: '#tramites' },
    { label: 'Autoridades', href: '#autoridades' },
    { label: 'Turismo', href: '#turismo' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavLink[],
  footerLegalLinks: [
    { label: 'Portal oficial', href: '#inicio' },
    { label: 'Política de privacidad', href: '#contacto' },
    { label: 'Términos de uso', href: '#contacto' },
  ] satisfies NavLink[],
};
