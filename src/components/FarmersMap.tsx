import { assets } from "@/assets/asset";

const FarmersMap: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-32 bg-[linear-gradient(95.66deg,#2E7D32_5.6%,#9CCC65_91.2%)] shadow-[0px_4px_4px_0px_#00000040] text-center">
      <h2 className="md:text-[40px] text-3xl font-cabin font-semibold mb-4">
        Where Our Farmers Are Located
      </h2>
      <img src={assets.map} alt="Map of Nigeria" className="mx-auto" />
    </section>
  );
};

export default FarmersMap;
