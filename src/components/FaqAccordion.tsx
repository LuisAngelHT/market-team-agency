import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

const FaqAccordion = ({ faqs }: { faqs: FaqItem[] }) => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
      className="space-y-3"
    >
      {faqs.map((f, i) => {
        const value = `faq-${i}`;
        const isOpen = openItem === value;
        return (
          <AccordionItem
            key={i}
            value={value}
            className="rounded-xl border px-5 overflow-hidden transition-all duration-300"
            style={{
              fontFamily: "'Hind', sans-serif",
              background: isOpen
                ? "linear-gradient(90deg, #7800ff, #3a00bf)"
                : "hsl(240 10% 14% / 0.3)",
              borderColor: isOpen ? "transparent" : "hsl(265 100% 50% / 0.6)",
            }}
          >
            <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline text-foreground py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm pb-4" style={{ color: isOpen ? "hsl(0 0% 90%)" : "hsl(240 5% 55%)" }}>
              {f.a}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FaqAccordion;
