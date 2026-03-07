import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FormulariosPage() {
  const formularios = [
    'Solicitud de habilitación comercial',
    'Declaración jurada para trámites municipales',
    'Formulario de actualización de datos del contribuyente',
    'Solicitud de libre deuda municipal',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors duration-200 hover:border-primary-200 hover:text-primary-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al portal
        </Link>

        <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Trámites municipales
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
          Formularios y requisitos
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Esta sección reunirá los formularios oficiales y los requisitos necesarios para iniciar
          gestiones ante la Municipalidad de El Alcázar. Mientras completamos la publicación
          digital, podés usar esta referencia para conocer los próximos documentos disponibles.
        </p>

        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
            Formularios próximos a publicarse
          </h2>
          <ul className="space-y-3 text-gray-700">
            {formularios.map((formulario) => (
              <li key={formulario} className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                {formulario}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-primary-50 rounded-2xl border border-primary-100 p-8">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
            Mensaje institucional
          </h2>
          <p className="text-gray-700 leading-relaxed">
            La Municipalidad de El Alcázar está ordenando y digitalizando sus trámites para
            facilitar el acceso de los vecinos. Si necesitás avanzar con una gestión antes de la
            publicación definitiva de estos formularios, comunicate por los canales de atención
            disponibles en el portal.
          </p>
        </section>
      </div>
    </main>
  );
}
