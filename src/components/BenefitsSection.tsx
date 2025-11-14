import { type ReactNode } from "react";
import { DollarSign, FilePenLine, LucideApple, Users2 } from "lucide-react";
interface BenefitProps {
  icon: ReactNode;
  title: string;
  text: string;
}
const benefits: BenefitProps[] = [
  {
    icon: <LucideApple size={30} />,
    title: "Fresh Produce",
    text: "Enjoy farm-fresh products harvested at their peak.",
  },
  {
    icon: <DollarSign size={30} />,
    title: "Better Prices",
    text: "Cut out the middlemen and enjoy lower prices.",
  },
  {
    icon: <Users2 size={30} />,
    title: "Support for Farmers",
    text: "Help sustain local farmer's livelihoods.",
  },
  {
    icon: <FilePenLine size={30} />,
    title: "Transparency",
    text: "Know where your produce comes from.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-32 bg-grany">
      <h2 className="md:text-[40px] text-3xl font-cabin font-semibold text-center mb-8">
        Why Shop Directly from Farmers
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 justify-center gap-5 px-6 md:px-20">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="p-3 max-w-[400px] border bg-background rounded-2xl flex flex-col gap-2 items-center  text-center shadow-sm hover:shadow-md"
          >
            <div className="text-secondary">{benefit.icon}</div>
            <h3 className="text-3xl text-greeny">{benefit.title}</h3>
            <p className="text-xl text-greeny">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
