import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play, Instagram, Facebook, Star } from "lucide-react";
import QualificationModal from "@/components/QualificationModal";

const testimonials = [
  { name: "Carlos M.", role: "Abogado Penalista", text: "En 3 meses tripliqué mis consultas. Dejé de depender del boca en boca y ahora tengo un flujo constante de clientes nuevos." },
  { name: "María L.", role: "Abogada de Familia", text: "Pasé de 2 consultas semanales a más de 10. El sistema realmente funciona y el retorno de inversión es impresionante." },
  { name: "Roberto S.", role: "Abogado Corporativo", text: "Nunca pensé que las redes sociales pudieran traerme clientes de este nivel. Ahora facturo el doble que hace 6 meses." },
];

const faqs = [
  { q: "¿Para qué tipo de abogados funciona este sistema?", a: "Funciona para cualquier especialidad legal: penal, familiar, corporativo, laboral, inmobiliario, etc. Lo importante es tener la disposición de invertir en crecimiento." },
  { q: "¿Cuánto tiempo tarda en dar resultados?", a: "La mayoría de nuestros clientes empiezan a recibir consultas en las primeras 2-4 semanas. Los resultados más sólidos se consolidan entre el mes 2 y 3." },
  { q: "¿Necesito saber de redes sociales?", a: "No. Nosotros nos encargamos de toda la estrategia, creación de contenido y gestión de campañas. Tú solo te enfocas en atender a tus nuevos clientes." },
  { q: "¿Cuánto debo invertir en publicidad?", a: "Recomendamos un presupuesto mínimo de pauta según tu mercado. En la consultoría gratuita analizamos tu caso específico y te damos un estimado personalizado." },
  { q: "¿Qué pasa si no funciona?", a: "Tenemos un track record comprobado. En la consultoría evaluamos si tu perfil es ideal para nuestro sistema antes de comenzar, para asegurarnos de que los resultados sean positivos." },
];

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Para abogados que quieren crecer
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Deja de depender del{" "}
            <span className="text-primary">"boca en boca"</span>{" "}
            y consigue clientes de forma predecible
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Sistema probado para atraer consultas cualificadas a través de Instagram, Facebook y WhatsApp — sin que tú tengas que crear contenido.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary">
            <div className="flex aspect-video items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm">Mira cómo funciona nuestra metodología</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <Button
          onClick={() => setModalOpen(true)}
          size="lg"
          className="h-auto max-w-xl whitespace-normal px-8 py-5 text-base font-semibold sm:text-lg"
        >
          Agenda tu consultoría gratuita: Vamos a analizar si podemos ayudarte a lograr tus objetivos
        </Button>
      </section>

      {/* Testimonios */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <QualificationModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
