export type TourismItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const tourismSection = {
  eyebrow: 'Identidad local',
  title: 'Turismo y perfil productivo',
  description:
    'El turismo acompaña la identidad de El Alcázar, pero se presenta como una sección complementaria dentro de un portal orientado principalmente a servicios para vecinos.',
};

export const tourismItems: TourismItem[] = [
  {
    title: 'Naturaleza misionera',
    description:
      'Entorno natural, senderos y paisaje local como parte de la identidad territorial del municipio.',
    image: '/fondoalcazar.webp',
    href: '#contacto',
  },
  {
    title: 'Circuito rural y productivo',
    description:
      'Recorridos asociados a la producción regional y al vínculo histórico entre comunidad, trabajo y territorio.',
    image: '/fotoalcazar.webp',
    href: '#contacto',
  },
  {
    title: 'Ferias y encuentros locales',
    description:
      'Actividades culturales y comunitarias que fortalecen la vida local y la participación social.',
    image: '/alcazar-festivo-optimized.webp',
    href: '#contacto',
  },
];
