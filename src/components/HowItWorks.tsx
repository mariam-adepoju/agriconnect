import { Users, ClipboardList, Handshake, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const STEPS = [
  {
    title: "Create an Account",
    desc: "Register as a verified farmer.",
    icon: Users,
  },
  {
    title: "List your product",
    desc: "Add product details and price.",
    icon: ClipboardList,
  },
  {
    title: "Connect with Buyers",
    desc: "Receive orders from verified buyers.",
    icon: Handshake,
  },
  {
    title: "Get Paid Securely",
    desc: "Payments sent directly to your wallet.",
    icon: Wallet,
  },
];
const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col">
      <h2 className="md:text-[40px] sm:text-3xl text-2xl py-5 font-bold text-center text-greeny bg-grany w-full">
        How It Works
      </h2>
      <div className="w-full px-4 md:px-16 lg:px-24 xl:px-32 py-10 mx-auto  bg-[linear-gradient(90deg,#2D7C31_1.9%,#9CCC65_100%)] ">
        <div className="grid gap-5 pt-10 text-white grid-cols-2 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.title} className="text-center space-y-3">
              <div className="mx-auto flex h-20 w-20 sm:h-30 sm:w-30 items-center justify-center rounded-full bg-white text-green-600">
                <step.icon size={40} className="text-secondary" />
              </div>
              <div className="">
                <h4 className="font-cabin text-lg font-semibold">
                  {step.title}
                </h4>
                <p className="text-sm text-white/90">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-10 flex items-center justify-center">
          <Button
            variant="secondary"
            onClick={() => navigate("/signup")}
            className="font-medium text-base text-grany"
          >
            Register your farm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
