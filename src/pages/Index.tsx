import { useState } from "react";
import { Play, ImageIcon, X, Check  } from "lucide-react";
import VslPlayer from "@/components/VslPlayer";
import QualificationModal from "@/components/QualificationModal";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollToTop from "@/components/ScrollToTop";

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
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="sm:mt-6 text-2xl sm:text-3xl md:text-4xl ">
                No necesitas hacer más videitos...{" "}
                <span>
                  Necesitas entender por qué no estás consiguiendo clientes
                </span>
              </h1>
              <p className="mx-auto max-w-2xl font-bold text-sm sm:text-lg text-muted-foreground leading-tight">
                <span className="block">
                  Implementamos un sistema de adquisición que te lleva a
                </span>
                <span className="block text-foreground text-base sm:text-xl">
                  facturar entre 20K – 50K en 5 meses
                </span>
                <span className="block">
                  (o trabajamos gratis hasta lograrlo)
                </span>
              </p>
            </div>
          </ScrollReveal>

          {/* Video */}
          <ScrollReveal delay={200} className="mt-5 w-full max-w-2xl">
            <VslPlayer />
          </ScrollReveal>

          {/* CTA below video */}
          <ScrollReveal delay={400} className="mt-5 w-full flex flex-col items-center">
            <div className="cta-section-gradient py-2 px-8 rounded-xl max-w-xl w-full text-center shadow-lg">
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                Si eres <span className="font-bold">Abogado</span> o tienes un{" "}
                <span className="font-bold">Estudio Jurídico</span> y quieres{" "}
                <span className="font-bold">dejar de perder</span> clientes frente a tu competencia,
                agenda tu consultoría gratuita.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-pulse mt-8 rounded-full px-8 py-4 text-sm uppercase tracking-wider text-white border border-white/20 transition-all duration-300"
              style={{ 
                fontFamily: "'Hind', sans-serif",
                background: "linear-gradient(135deg, #4a00ff 0%, #7c3aff 50%, #a855f7 100%)"
              }}
            >
              Consultoría <span className="hidden sm:inline font-extrabold">Gratis</span>
            </button>
          </ScrollReveal>
        </section>

        {/* Clientes */}
        <section id="clientes" className="px-4 py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="gradient-title mb-16 text-center text-5xl sm:text-6xl tracking-wide">
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
        <section id="metodo" className="px-4 py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="gradient-title mb-16 text-center text-5xl sm:text-6xl tracking-wide">
                Método
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 md:gap-2 md:grid-cols-2 items-center">

              {/* Tarjeta 1: Agencias Estiércol */}
              <ScrollReveal delay={0} direction="left">
                <div className="flex flex-col gap-3 mx-auto w-full max-w-sm">
                  <h3 className="text-2xl md:text-4xl text-center tracking-tight text-white">
                    Agencias Estiércol
                  </h3>
                  <div className="rounded-[2rem] p-5 md:p-8 shadow-lg" style={{ backgroundColor: '#333547' }}>
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <span className="text-3xl md:text-4xl drop-shadow-md">💩</span>
                    </div>
                    <ul className="space-y-2 md:space-y-3 text-sm md:text-xl text-white" style={{ fontFamily: "'Hind', sans-serif" }}>
                      {[
                        "Publican contenido sin generar ventas",
                        "Se enfocan en likes y alcance",
                        "Procesos desordenados y sin claridad (IMPROVISACIÓN)",
                        "Dependes de ellos para todo",
                        "Contratan a terceros y no obtienen resultados",
                        "No garantizan resultados"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 shrink-0 text-white/80 font-bold leading-snug">•</span>
                          <span className="leading-snug text-left w-full text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Tarjeta 2: Market Team Agency */}
              <ScrollReveal delay={200} direction="right">
                <div className="flex flex-col gap-3 mx-auto w-full max-w-sm">
                  <h3 className="text-2xl md:text-4xl text-center tracking-tight text-white">
                    Market Team Agency
                  </h3>
                  <div
                    className="rounded-[2rem] p-5 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(74,0,255,0.4)]"
                    style={{ backgroundColor: '#4a00ff' }}
                  >
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <img
                        src="/icons/logo.png"
                        alt="Logo Market Team Agency"
                        className="w-14 md:w-20 h-auto drop-shadow-md"
                      />
                    </div>
                    <ul className="space-y-2 md:space-y-3 text-sm md:text-xl text-white" style={{ fontFamily: "'Hind', sans-serif" }}>
                      {[
                        <>Implementamos un sistema que genera <span className="font-bold md:text-2xl">clientes constantes</span></>,
                        "Nos enfocamos en conversión y rentabilidad real",
                        <>Trabajamos con metodologías <span className="font-bold md:text-2xl">TRACK + PAE + Troyanos</span></>,
                        <>Construimos un sistema que <span className="font-bold md:text-2xl">No depende de ti</span></>,
                        "Equipo interno optimizado para un rendimiento real",
                        "Trabajamos gratis hasta lograr el resultado"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 shrink-0 text-white font-bold leading-snug">•</span>
                          <span className="leading-snug text-left w-full">{item}</span>
                        </li>
                      ))}
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
              <h2 className="gradient-title mb-12 text-center text-5xl sm:text-6xl tracking-widest">
                Track
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
              <h2 className="gradient-title mb-12 text-center text-5xl sm:text-6xl tracking-wide">
                Preguntas Frecuentes
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <FaqAccordion faqs={faqs} />
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
      
      {/* NUEVO: Botón de volver arriba */}
      <ScrollToTop />
      
    </div>
  );
};

export default Index;
