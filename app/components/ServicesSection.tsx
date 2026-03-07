import Link from 'next/link';
import { 
  Car, 
  Receipt, 
  AlertCircle, 
  Church, 
  Calendar, 
  FileCheck,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

type ServiceType = 'external' | 'internal';

interface Service {
  icon: any;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  cta: string;
  type: ServiceType;
  href: string;
  external: boolean;
}

const services: Service[] = [
  {
    icon: Car,
    category: 'Enlace externo',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Pago de patente',
    description: 'Consultá o gestioná el pago de la patente automotor desde el sistema oficial provincial.',
    cta: 'Ir al portal oficial',
    type: 'external',
    href: 'https://sinclavefiscal.atm.misiones.gob.ar/sc/automotor/emision_ba_ipa',
    external: true,
  },
  {
    icon: Receipt,
    category: 'Enlace externo',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'Impuesto inmobiliario',
    description: 'Accedé a la consulta y emisión de boletas desde el portal oficial de la Provincia de Misiones.',
    cta: 'Consultar boleta',
    type: 'external',
    href: 'https://sinclavefiscal.atm.misiones.gob.ar/sc/inmobiliario/emision_boleta_inmo',
    external: true,
  },
  {
    icon: AlertCircle,
    category: 'Solicitud online',
    categoryColor: 'bg-primary-100 text-primary-700',
    title: 'Reclamos vecinales',
    description: 'Informá baches, luminarias, residuos u otros inconvenientes municipales mediante un correo precompletado.',
    cta: 'Enviar reclamo por correo',
    type: 'external',
    href: 'mailto:reclamos@alcazar.gob.ar?subject=Reclamo%20vecinal&body=Nombre:%0A%DNI:%0ATel%C3%A9fono:%0ABarrio%20%2F%20zona:%0ATipo%20de%20reclamo:%0ADescripci%C3%B3n:',
    external: true,
  },
  {
    icon: Church,
    category: 'Solicitud online',
    categoryColor: 'bg-primary-100 text-primary-700',
    title: 'Cementerio municipal',
    description: 'Solicitá renovaciones, traslados, actas o consultas sobre parcelas y nichos mediante un correo guiado.',
    cta: 'Solicitar gestión por correo',
    type: 'external',
    href: 'mailto:mesaentrada@alcazar.gob.ar?subject=Solicitud%20cementerio%20municipal&body=Nombre:%0A%DNI:%0ATel%C3%A9fono:%0ATipo%20de%20solicitud:%0ADetalle:',
    external: true,
  },
  {
    icon: Calendar,
    category: 'Solicitud online',
    categoryColor: 'bg-primary-100 text-primary-700',
    title: 'Turnos y atención',
    description: 'Pedí turno para licencias, habilitaciones, ventanilla única u otras gestiones presenciales por correo.',
    cta: 'Solicitar turno por correo',
    type: 'external',
    href: 'mailto:atencion@alcazar.gob.ar?subject=Solicitud%20de%20turno&body=Nombre:%0A%DNI:%0ATel%C3%A9fono:%0A%C3%81rea%20de%20consulta:%0AFecha%20preferida:%0AMotivo:',
    external: true,
  },
  {
    icon: FileCheck,
    category: 'Información',
    categoryColor: 'bg-gray-100 text-gray-700',
    title: 'Formularios y requisitos',
    description: 'Consultá formularios disponibles y requisitos generales antes de iniciar cualquier trámite municipal.',
    cta: 'Ver formularios vigentes',
    type: 'internal',
    href: '/tramites/formularios',
    external: false,
  },
];

export default function ServicesSection() {
  const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const Icon = service.icon;
    const cardClassName =
      'group block w-full rounded-[24px] border border-gray-100 bg-white p-6 text-left shadow-sm transition-all duration-300 cursor-pointer hover:border-primary-200 hover:shadow-xl sm:rounded-2xl sm:p-8';
    const content = (
      <>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
          <Icon className="text-white" size={24} />
        </div>

        <div className={`inline-block ${service.categoryColor} mb-3 rounded-full px-3 py-1 text-[11px] font-semibold sm:mb-4 sm:text-xs`}>
          {service.category}
        </div>

        <h3 className="mb-3 font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-700 sm:text-xl">
          {service.title}
        </h3>
        <p className="mb-6 text-sm leading-6 text-gray-600 sm:leading-relaxed">
          {service.description}
        </p>

        <div className="flex min-h-11 items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
          <span className="group-hover:underline underline-offset-4">{service.cta}</span>
          {service.external ? (
            <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          ) : (
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          )}
        </div>
      </>
    );

    if (service.external) {
      return (
        <a
          key={index}
          href={service.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClassName}
        >
          {content}
        </a>
      );
    }

    if (service.href) {
      return (
        <Link key={index} href={service.href} className={cardClassName}>
          {content}
        </Link>
      );
    }
  };

  return (
    <section id="servicios" className="py-16 bg-gradient-to-b from-gray-50 to-white sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-5 sm:mb-6">
            Servicios municipales
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-gray-900 mb-5 sm:mb-6">
            Trámites y servicios
          </h2>
          
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-7 sm:text-lg sm:leading-relaxed">
            Accedé a información útil, iniciá solicitudes municipales y encontrá accesos directos 
            a servicios y trámites disponibles para los vecinos de El Alcázar.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
