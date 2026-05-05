export type AuthorityItem = {
  name: string;
  role: string;
  area: string;
  description: string;
  photo?: string;
  contact?: string;
  featured?: boolean;
};

export const authoritiesSection = {
  eyebrow: 'Gobierno municipal',
  title: 'Intendente municipal',
  description:
    'Referencia institucional del Departamento Ejecutivo Municipal y conducción de la gestión local.',
};

export const authorities: AuthorityItem[] = [
  {
    name: 'Dr. Eduardo Vázquez',
    role: 'Intendente Municipal',
    area: 'Departamento Ejecutivo',
    description:
      'Encabeza la administración general del municipio, la planificación de prioridades de gestión y la coordinación política e institucional de las áreas municipales. Su rol concentra la conducción del Departamento Ejecutivo y la representación del gobierno local ante vecinos, instituciones y organismos provinciales.',
    photo: '/intendente.webp',
    contact: 'intendencia@elalcazar.gob.ar',
    featured: true,
  },
  {
    name: 'Secretaría de Gobierno',
    role: 'Área municipal',
    area: 'Gobierno y coordinación administrativa',
    description:
      'Asistencia institucional, coordinación de áreas, atención administrativa y seguimiento de actuaciones internas.',
    contact: 'gobierno@elalcazar.gob.ar',
  },
  {
    name: 'Secretaría de Obras y Servicios Públicos',
    role: 'Área municipal',
    area: 'Infraestructura urbana',
    description:
      'Interviene en mantenimiento de calles, alumbrado, espacios públicos, limpieza urbana y servicios operativos.',
    contact: 'obraspublicas@elalcazar.gob.ar',
  },
  {
    name: 'Secretaría de Hacienda',
    role: 'Área municipal',
    area: 'Administración y recursos',
    description:
      'Gestión económico-financiera, consultas vinculadas a tasas y coordinación administrativa tributaria.',
    contact: 'hacienda@elalcazar.gob.ar',
  },
  {
    name: 'Secretaría de Desarrollo Social',
    role: 'Área municipal',
    area: 'Atención comunitaria',
    description:
      'Programas de asistencia, acompañamiento social y articulación con instituciones locales y familias.',
    contact: 'desarrollosocial@elalcazar.gob.ar',
  },
];
