import { assets } from "../assets/asset";
const Hero = () => {
  return (
    <section
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden"
    >
      <img
        src={assets.hero}
        alt="Agricconnect Hero"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="eager"
        fetchPriority="high"
      />
      {/* Optional: Dark Overlay to make text pop */}
      <div className="absolute inset-0 bg-white/10 -z-10" />
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 space-y-6">
        <h1 className="font-cabin font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-sm md:max-w-md xl:max-w-xl text-greeny/80">
          Bridging The Gap Between Farmers and Consumers. Fresh, Fair and
          Direct.
        </h1>
        <p className="text-[20px] font-medium max-w-sm md:max-w-md xl:max-w-xl text-greeny/80">
          Agriconnect links farmers and consumers through a simple platform that
          ensures direct access to fresh produce and fair prices.
        </p>
        <div className="w-full pt-2 flex flex-wrap gap-5 text-[#f2f2f2] font-medium">
          <div className="bg-primary inline-flex gap-2 rounded-[15px] p-2.5">
            <img src={assets.avocadoicon} alt="Produce" className="h-10 w-10" />
            <div className="self-center">
              <p>100+</p>
              <p>Produce</p>
            </div>
          </div>
          <div className="bg-primary inline-flex gap-2 rounded-[15px] p-2.5">
            <img src={assets.farmericon} alt="Farmers" className="h-10 w-10" />
            <div className="self-center">
              <p>50+</p>
              <p>Farmers</p>
            </div>
          </div>
          <div className="bg-primary inline-flex gap-2 rounded-[15px] p-2.5">
            <img
              src={assets.locationicon}
              alt="Locations"
              className="h-10 w-10"
            />
            <div className="self-center">
              <p>12+</p>
              <p>Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
