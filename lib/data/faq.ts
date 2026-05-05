export type FaqItem = {
  question: string;
  answer: string;
};

export const faqSection = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Consultas habituales de vecinos',
  description:
    'Respuestas breves para orientar las gestiones más comunes y derivar a los canales institucionales correspondientes.',
};

export const faqItems: FaqItem[] = [
  {
    question: 'Cómo hacer un reclamo',
    answer:
      'Ingresá a la sección de trámites o utilizá el correo institucional de reclamos. Indicá nombre, barrio, teléfono y una descripción clara del problema para facilitar el seguimiento.',
  },
  {
    question: 'Cómo solicitar un turno',
    answer:
      'Podés pedir turno desde la sección de trámites mediante el canal de contacto indicado. Es conveniente informar el área, el motivo y una fecha de preferencia.',
  },
  {
    question: 'Dónde comunicarse con el municipio',
    answer:
      'En la sección de contacto figuran dirección, teléfono, correo electrónico y horario de atención. Esos son los canales oficiales del portal.',
  },
  {
    question: 'Horarios de atención',
    answer:
      'La atención presencial se realiza de lunes a viernes de 7:00 a 13:00 hs, salvo modificaciones comunicadas por canales oficiales.',
  },
];
