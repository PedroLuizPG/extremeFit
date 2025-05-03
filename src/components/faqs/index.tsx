import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
  return (
    <section className="bg-[#121212] py-12">
      <div className="container mx-auto mb-12 " data-aos="zoom-out">
        <h2 className="text-white text-4xl md:text-6xl text-center mb-8">
          Perguntas Frequentes{" "}
        </h2>
        <div className="m-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white text-xl md:text-2xl font-semibold p-4">
                Quais dias que abre a academia?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm font-semibold pl-6">
                Abrimos de segunda a sábado, segunda a sexta das 5:30 às 22 horas e sábado das 8 às 12 horas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white text-xl md:text-2xl font-semibold p-4">
                Pra fechar o plano no cartão, o valor é recorrente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm font-semibold pl-6">
                Não, o valor é cheio, podendo parcelar até 12x dependo do plano fechado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-white text-xl md:text-2xl font-semibold p-4">
                Como funciona para trancar a matrícula?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm font-semibold pl-6">
                Nós podemos trancar a matrícula a partir do plano trimestral, podendo ficar com a matricula trancada por um período de até 30 dias.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-white text-xl md:text-2xl font-semibold p-4">
                O que é incluso na matrícula?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm font-semibold pl-6">
                Na matrícula vem incluso a musculação, as aulas de dança e o funcional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
