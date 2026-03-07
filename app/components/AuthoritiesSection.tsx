import Image from 'next/image';

type Authority = {
  name: string;
  role: string;
  description: string;
  image: string;
  imageClassName?: string;
};

const authorities: Authority[] = [
  {
    name: 'Dr. Eduardo Vázquez',
    role: 'Intendente Municipal',
    description:
      'Médico y actual intendente municipal, encabeza la gestión de El Alcázar con compromiso comunitario, cercanía institucional y una visión orientada al desarrollo ordenado del municipio.',
    image: '/intendente.png',
    imageClassName: 'object-[center_18%]',
  },
];

function AuthorityCard({ authority }: { authority: Authority }) {
  return (
    <article className="group relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(15,23,42,0.1)] sm:rounded-[34px]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#f5faf7_0%,rgba(245,250,247,0)_100%)] sm:h-28" />

      <div className="relative grid gap-8 px-5 py-7 sm:px-10 sm:py-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-center lg:px-12 lg:py-12">
        <div className="flex flex-col items-center lg:items-start">
          <div className="inline-flex rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">
            Poder Ejecutivo
          </div>

          <div className="mt-5 rounded-full bg-[linear-gradient(180deg,#eef7f2_0%,#ffffff_100%)] p-2 shadow-[0_12px_30px_rgba(22,66,47,0.12)] ring-1 ring-primary-100/80 sm:mt-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-primary-50 sm:h-44 sm:w-44">
              <Image
                src={authority.image}
                alt={authority.name}
                fill
                sizes="(max-width: 640px) 160px, 176px"
                className={`object-cover ${authority.imageClassName ?? ''}`}
                priority
              />
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
            {authority.role}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 sm:mt-4 sm:text-4xl">
            {authority.name}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
            {authority.description}
          </p>

          <div className="mt-6 inline-flex rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600 sm:mt-8 sm:px-5 sm:py-4">
            Referente institucional de la Municipalidad de El Alcázar y de la administración
            general del municipio.
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AuthoritiesSection() {
  return (
    <section
      id="autoridades"
      className="bg-[linear-gradient(180deg,#f8faf9_0%,#f4f6f5_100%)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 sm:mb-6">
            Institucional
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-5xl">
            Autoridades
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-relaxed">
            Conocé a las autoridades de la Municipalidad de El Alcázar.
          </p>
        </div>

        <div className="mt-10 flex justify-center sm:mt-14">
          {authorities.map((authority) => (
            <AuthorityCard key={`${authority.role}-${authority.name}`} authority={authority} />
          ))}
        </div>
      </div>
    </section>
  );
}
