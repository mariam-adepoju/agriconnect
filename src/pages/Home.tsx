import BenefitsSection from "@/components/BenefitsSection";
import CategorySection from "@/components/CategorySection";
import DiscountBanner from "@/components/DiscountBanner";
import FarmersMap from "@/components/FarmersMap";
import Hero from "@/components/Hero";
import LogisticPartners from "@/components/LogisticPartners";
import MobileAppPromo from "@/components/MobileAppPromo";
import Testimonials from "@/components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <DiscountBanner />
      <CategorySection />
      <FarmersMap />
      <BenefitsSection />
      <MobileAppPromo />
      <Testimonials />
      <LogisticPartners />
    </>
  );
};

export default Home;
