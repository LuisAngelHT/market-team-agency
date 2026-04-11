import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play, ImageIcon } from "lucide-react";
import QualificationModal from "@/components/QualificationModal";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const clientes = [
  {
    name: "Nick Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo vel lacus viverra placerat.",
  },
  {
    name: "Nick Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo vel lacus viverra placerat.",
  },
];

const faqs = [
  {
    q: "¿Esto funciona para mi tipo de negocio?",
    a: "Trabajamos con negocios B2B, expertos y marcas personales que ya tienen conocimiento y buscan convertirlo en clientes. Si ya tienes algo validado pero no logras escalar, es donde más impacto generamos.",
  },
  {
    q: "¿Necesito tener experiencia creando contenido o vendiendo?",
    a: "No. Nosotros nos encargamos de toda la estrategia, creación de contenido y gestión de campañas. Tú solo te enfocas en atender a tus nuevos clientes.",
  },
  {
    q: "¿Qué pasa si no obtengo resultados?",
    a: "Trabajamos gratis hasta lograr el resultado. Tenemos un track record comprobado y evaluamos tu caso antes de comenzar.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo necesitas agendar tu consultoría gratuita. Ahí analizaremos tu caso y te diremos exactamente qué necesitas.",
  },
];

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full blur-[180px]" style={{ background: 'radial-gradient(circle, rgba(74,0,255,0.25), transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 h-[500px] w-[500px] rounded-full blur-[150px]" style={{ background: 'radial-gradient(circle, rgba(40,41,84,0.4), transparent 70%)' }} />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(74,0,255,0.15), transparent 70%)' }} />
      </div>

      <div className="relative z-10">
        <Navbar onCtaClick={() => setModalOpen(true)} />

        {/* Hero */}
        <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl space-y-6">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                No necesitas hacer más videitos...{" "}
                <span className="text-foreground">
                  Necesitas entender por qué no estás consiguiendo clientes.
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg" style={{ fontFamily: "'Hind', sans-serif" }}>
                Implementamos un sistema de adquisición que te lleva a{" "}
                <br />
                <span className="font-bold text-foreground">facturar entre 20K – 50K en 5 meses</span>
                <br />
                <span className="text-muted-foreground">(o trabajamos gratis hasta lograrlo)</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Video */}
          <ScrollReveal delay={200} className="mt-12 w-full max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm">
              <div className="flex aspect-video items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-muted-foreground/30 bg-secondary/80 transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <Play className="h-7 w-7 text-muted-foreground" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA below video */}
          <ScrollReveal delay={400} className="mt-10 w-full">
            <div className="cta-section-gradient py-8 px-4 -mx-4">
              <p className="mx-auto mb-6 max-w-2xl text-sm text-foreground sm:text-base" style={{ fontFamily: "'Hind', sans-serif" }}>
                Si eres <span className="font-bold">Abogado</span> o tienes un{" "}
                <span className="font-bold">Estudio Jurídico</span> y quieres{" "}
                <span className="font-bold">dejar de perder</span> clientes frente a tu competencia,
                agenda tu consultoría gratuita.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-cta-gradient rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider text-[hsl(0,0%,100%)] border border-[hsl(0,0%,100%)]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                style={{ fontFamily: "'Hind', sans-serif" }}
              >
                Consultoría <span className="font-extrabold">Gratis</span>
              </button>
            </div>
          </ScrollReveal>
        </section>

        {/* Clientes */}
        <section id="clientes" className="px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="gradient-title mb-16 text-center text-5xl sm:text-6xl uppercase tracking-wide">
                Clientes
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {clientes.map((c, i) => (
                <ScrollReveal key={i} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="flex flex-col sm:flex-row items-center gap-5 rounded-xl border border-border bg-secondary/30 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50">
                    <div className="flex-shrink-0 w-full sm:w-56 aspect-[4/3] rounded-lg bg-secondary/80 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary border border-muted-foreground/30">
                        <Play className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-base font-extrabold uppercase tracking-wide">{c.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>{c.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Método */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="gradient-title mb-16 text-center text-5xl sm:text-6xl uppercase tracking-wide">
                Metodo
              </h2>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2 items-start">
              <ScrollReveal delay={0} direction="left">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-center">Agencias Estiercol</h3>
                  <div className="method-bad rounded-2xl p-6">
                    <div className="mb-4 flex justify-center">
                      <span className="text-3xl">💩</span>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground" style={{ fontFamily: "'Hind', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                        Publican contenido sin generar ventas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                        Se enfocan en likes y alcance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                        Procesos desordenados y sin claridad (IMPROVISACIÓN)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                        Dependes de ellos para todo
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                        Contratan a terceros y no obtener resultados
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                        No garantizan resultados
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200} direction="right">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-center">Market Team Agency</h3>
                  <div className="method-good rounded-2xl p-6">
                    <div className="mb-4 flex justify-center">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <ul className="space-y-3 text-sm text-foreground" style={{ fontFamily: "'Hind', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                        Implementamos un sistema que genera <span className="font-bold">clientes constantes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                        Nos enfocamos en conversión y rentabilidad real
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                        Trabajamos con metodologías <span className="font-bold">TRACK + PAE + Troyanos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                        Construimos un sistema que <span className="font-bold">No depende de ti</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                        Equipo interno optimizado para un rendimiento real
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                        Trabajamos gratis hasta lograr el resultado
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* TRACK */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="gradient-title mb-12 text-center text-5xl sm:text-6xl uppercase tracking-widest">
                TRACK
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200} direction="scale">
              <div className="rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm">
                <div className="flex aspect-video items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <ImageIcon className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-24">
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <h2 className="gradient-title mb-12 text-center text-5xl sm:text-6xl uppercase tracking-wide">
                Preguntas frecuentes
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="rounded-xl border border-primary/60 bg-secondary/30 backdrop-blur-sm px-5 overflow-hidden transition-all duration-300 data-[state=open]:border-transparent data-[state=open]:faq-active"
                    style={{ fontFamily: "'Hind', sans-serif" }}
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline text-foreground py-4">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4 data-[state=open]:text-foreground/80">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-4 py-20 text-center">
          <ScrollReveal>
            <p className="mx-auto mb-8 max-w-xl text-sm text-muted-foreground sm:text-base" style={{ fontFamily: "'Hind', sans-serif" }}>
              <span className="font-bold text-foreground">No necesitas más contenido, más herramientas o más personas.</span> Necesitas entender por qué todo eso no te está dando resultados.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-cta-gradient rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider text-[hsl(0,0%,100%)] border border-[hsl(0,0%,100%)]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              style={{ fontFamily: "'Hind', sans-serif" }}
            >
              Consultoría <span className="font-extrabold">Gratis</span>
            </button>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Hind', sans-serif" }}>
              © Copyright {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>

      <QualificationModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
