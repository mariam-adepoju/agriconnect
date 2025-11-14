import { assets } from "@/assets/asset";

const MobileAppPromo: React.FC = () => {
  return (
    <section className="bg-primary py-10 md:py-16 px-4 md:px-16 lg:px-24 xl:px-32 ">
      <div className="flex justify-between">
        <div className="self-center">
          <h2 className="md:text-[40px] sm:text-xl text-lg max-w-[613px] font-bold font-cabin text-white mb-6">
            Buy, Sell and Connect on the Go with the AgriConnect App
          </h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <img src={assets.googleplay} alt="Google Play" className="w-30" />
            <img src={assets.appstore} alt="App Store" className="w-30" />
          </div>
        </div>
        <img
          src={assets.promoImg}
          alt="promo-img"
          className="w-5/10 md:w-4/10"
        />
      </div>
    </section>
  );
};

export default MobileAppPromo;
