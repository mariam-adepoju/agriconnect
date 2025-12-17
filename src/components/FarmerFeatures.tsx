import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ShieldCheck, Truck, Leaf } from "lucide-react";

const FEATURES = [
  {
    title: "Fair market access",
    desc: "Sell your produce directly to verified buyers.",
    icon: ShoppingCart,
  },
  {
    title: "Secure Payments",
    desc: "Recieve fast and guaranteed payments.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Logistics",
    desc: "Deliver your goods with our dependable partners.",
    icon: Truck,
  },
  {
    title: "Sustainable Growth",
    desc: "Grow your farm with digital tools and resources.",
    icon: Leaf,
  },
];

const FarmerFeatures = () => {
  return (
    <section className="mt-15 hidden md:block">
      <div className="mx-auto grid gap-6 md:grid-cols-4">
        {FEATURES.map((item) => (
          <Card key={item.title} className="text-center bg-white">
            <CardContent className="p-2 space-y-2">
              <item.icon size={40} className="mx-auto text-secondary" />
              <h3 className="text-primary font-cabin text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-base text-primary">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default FarmerFeatures;
