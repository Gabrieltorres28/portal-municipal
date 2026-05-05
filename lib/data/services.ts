import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  CalendarDays,
  Car,
  ExternalLink,
  FileCheck2,
  FileText,
  Landmark,
  Mail,
} from 'lucide-react';

export type ServiceType = 'online' | 'informacion' | 'externo' | 'presencial';

export type ServiceItem = {
  title: string;
  description: string;
  type: ServiceType;
  ctaLabel: string;
  href: string;
  featured?: boolean;
  icon: LucideIcon;
};

export const serviceTypeLabels: Record<ServiceType, string> = {
  online: 'Gestión online',
  informacion: 'Información',
  externo: 'Enlace externo',
  presencial: 'Atención presencial',
};

export const serviceTypeTone: Record<ServiceType, string> = {
  online: 'primary',
  informacion: 'slate',
  externo: 'blue',
  presencial: 'amber',
};

export const services: ServiceItem[] = [
  {
    title: 'Reclamos vecinales',
    description:
      'Canal inicial para reportar alumbrado, residuos, calles y otras incidencias municipales. La solicitud se envía por correo institucional para seguimiento manual.',
    type: 'online',
    ctaLabel: 'Iniciar reclamo',
    href: 'mailto:reclamos@alcazar.gob.ar?subject=Reclamo%20vecinal&body=Nombre:%0ADNI:%0ATel%C3%A9fono:%0ABarrio%20o%20zona:%0ATipo%20de%20reclamo:%0ADescripci%C3%B3n:',
    featured: true,
    icon: AlertTriangle,
  },
  {
    title: 'Turnos de atención',
    description:
      'Solicitud previa para licencias, habilitaciones, mesa de entrada y consultas administrativas que requieren atención presencial.',
    type: 'online',
    ctaLabel: 'Solicitar turno',
    href: 'mailto:atencion@alcazar.gob.ar?subject=Solicitud%20de%20turno&body=Nombre:%0ADNI:%0ATel%C3%A9fono:%0A%C3%81rea:%0AFecha%20preferida:%0AMotivo:',
    featured: true,
    icon: CalendarDays,
  },
  {
    title: 'Formularios y requisitos',
    description:
      'Revisión de documentación básica y formularios vigentes antes de iniciar cualquier trámite municipal.',
    type: 'informacion',
    ctaLabel: 'Ver formularios',
    href: '/tramites/formularios',
    featured: true,
    icon: FileCheck2,
  },
  {
    title: 'Pago de patente',
    description:
      'Acceso al sistema oficial de ATM Misiones para consultar o emitir boletas vinculadas al automotor.',
    type: 'externo',
    ctaLabel: 'Ir al portal provincial',
    href: 'https://sinclavefiscal.atm.misiones.gob.ar/sc/automotor/emision_ba_ipa',
    icon: Car,
  },
  {
    title: 'Consulta de impuesto inmobiliario',
    description:
      'Enlace al portal oficial provincial para emitir boletas y consultar situación del inmueble.',
    type: 'externo',
    ctaLabel: 'Consultar boleta',
    href: 'https://sinclavefiscal.atm.misiones.gob.ar/sc/inmobiliario/emision_boleta_inmo',
    icon: Landmark,
  },
  {
    title: 'Cementerio municipal',
    description:
      'Canal de solicitud para renovaciones, traslados, actas y consultas. La gestión requiere validación posterior por personal municipal.',
    type: 'presencial',
    ctaLabel: 'Solicitar gestión',
    href: 'mailto:mesaentrada@alcazar.gob.ar?subject=Solicitud%20cementerio%20municipal&body=Nombre:%0ADNI:%0ATel%C3%A9fono:%0ATipo%20de%20solicitud:%0ADetalle:',
    icon: Mail,
  },
  {
    title: 'Mesa de entrada',
    description:
      'Orientación general para notas, presentaciones y derivaciones a áreas municipales según el trámite.',
    type: 'presencial',
    ctaLabel: 'Ver contacto',
    href: '#contacto',
    icon: FileText,
  },
];

export const serviceMeta = {
  eyebrow: 'Servicios municipales',
  title: 'Trámites y gestiones prioritarias',
  description:
    'El portal prioriza acciones útiles para vecinos. Cuando una gestión todavía depende de correo o atención presencial, se presenta de forma clara como canal de solicitud y no como sistema digital completo.',
  helperText:
    'Para consultas generales o seguimiento de una solicitud enviada, utilizá los canales de contacto oficiales.',
  helperLink: {
    label: 'Ir a contacto institucional',
    href: '#contacto',
    icon: ExternalLink,
  },
};
