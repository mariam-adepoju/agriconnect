import { assets } from "@/assets/asset";

const LogisticPartners: React.FC = () => {
  const logos = [assets.gig, assets.courier, assets.dhl, assets.fedEx];

  return (
    <section className="py-10 bg-grany px-4 md:px-16 lg:px-24 xl:px-32 text-center">
      <h2 className="md:text-[40px] text-3xl font-cabin font-semibold text-greeny mb-8">
        Our Logistic Partners
      </h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Partner logo"
            className="xl:h-50 lg:h-30 h-25"
          />
        ))}
      </div>
    </section>
  );
};

export default LogisticPartners;
