import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import FarmerFeatures from "./FarmerFeatures";
const FarmerHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-dvh flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assests/farmerHero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 z-10">
        <div className="relative text-center text-white">
          <h1 className="md:text-[40px] lg:text-5xl text-3xl font-cabin mt-20 mb-2 font-bold">
            Empowering Farmers, Connecting Markets
          </h1>
          <p className="mb-6 font-medium text-lg">
            Sell your produce directly to buyers, access fair prices, and grow
            your agribusiness with AgriConnect.
          </p>
          <Button
            onClick={() => navigate("/signup")}
            variant={"secondary"}
            className="font-medium text-base text-grany"
          >
            Start Selling Now
          </Button>
        </div>
        <FarmerFeatures />
      </div>
    </section>
  );
};

export default FarmerHero;
