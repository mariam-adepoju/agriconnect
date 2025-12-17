import { FAQ } from "@/components/FAQ";
import FarmerHero from "@/components/FarmerHero";
import FarmersTestimonial from "@/components/FarmersTestimonials";
import { FeaturedFarms } from "@/components/FeaturedFarms";
import HowItWorks from "@/components/HowItWorks";

const Farmers = () => {
  return (
    <div>
      <FarmerHero />
      <HowItWorks />
      <FeaturedFarms />
      <FarmersTestimonial />
      <FAQ />
    </div>
  );
};

export default Farmers;
