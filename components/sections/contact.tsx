import { SendHorizonal } from 'lucide-react';
import { municipalityInfo } from '@/lib/data/municipality';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';

export function ContactSection() {
  return (
    <section id="contacto" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal perspective="left">
          <SectionHeader
            eyebrow="Contacto"
            title="Canales oficiales de atención"
            description="Información de contacto con jerarquía clara para consultas, turnos, reclamos y orientación administrativa."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {municipalityInfo.contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = item.href ? (
                <a href={item.href} className="text-base text-gray-700 hover:text-primary-700">
                  {item.value}
                </a>
              ) : (
                <p className="text-base text-gray-700">{item.value}</p>
              );

              return (
                <Reveal key={item.label} delay={index * 70} perspective="left">
                <article
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">
                        {item.label}
                      </h3>
                      <div className="mt-2">{content}</div>
                    </div>
                  </div>
                </article>
                </Reveal>
              );
            })}

            <Reveal delay={120} perspective="up" className="overflow-hidden rounded-2xl border border-gray-200">
              <iframe
                title="Mapa de referencia de El Alcázar"
                src={municipalityInfo.mapEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          <Reveal perspective="right" className="rounded-[1.75rem] border border-primary-100 bg-primary-50 p-6 shadow-lg shadow-primary-900/10 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Formulario de contacto
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Este formulario funciona como interfaz de consulta. El envío se canaliza por correo institucional para respuesta posterior.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Nombre y apellido"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-primary-500"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="3764 123456"
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-primary-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Consulta o mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={6}
                  placeholder="Detalle su consulta, reclamo o solicitud."
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-primary-500"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-gray-500">
                  Para urgencias o seguimiento, utilice también los canales oficiales indicados a la izquierda.
                </p>
                <Button href="mailto:contacto@elalcazar.gob.ar?subject=Consulta%20desde%20portal%20municipal">
                  <SendHorizonal className="mr-2 h-4 w-4" />
                  Enviar consulta
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
