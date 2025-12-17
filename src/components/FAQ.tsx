import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    id: "item-1",
    question: "What happens if a buyer cancels an order?",
    answer:
      "If a buyer cancels an order, you will be notified immediately and any reserved payment will be reversed.",
  },
  {
    id: "item-2",
    question: "What crops and products can I sell on AgriConnect?",
    answer:
      "You can sell a wide range of farm produce including grains, vegetables, fruits, and processed agricultural products.",
  },
  {
    id: "item-3",
    question: "Do I need a smartphone or computer?",
    answer:
      "Yes, you can use either a smartphone or a computer with internet access to use AgriConnect.",
  },
  {
    id: "item-4",
    question: "How often are market prices updated?",
    answer:
      "Market prices are updated regularly to reflect current demand and supply trends.",
  },
  {
    id: "item-5",
    question: "How does delivery work?",
    answer:
      "Once an order is confirmed, our logistics partners handle pickup and delivery directly to the buyer.",
  },
];

export function FAQ() {
  return (
    <section className="w-full px-4 md:px-16 lg:px-24 xl:px-32 py-10 md:py-15 mx-auto bg-grany">
      <h2 className="md:text-[40px] sm:text-3xl text-2xl pb-10 font-bold text-greeny w-full text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto px-6">
        <Accordion type="single" collapsible className="space-y-4 pb-10 ">
          {FAQS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-lg border! border-secondary px-4 bg-white"
            >
              <AccordionTrigger className="text-left font-medium text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
