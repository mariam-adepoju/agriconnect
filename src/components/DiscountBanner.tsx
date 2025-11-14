import { Button } from "./ui/button";

const DiscountBanner = () => {
  return (
    <section className="bg-[url('assets/images/discountBanner.png')] bg-cover bg-center px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center justify-center py-25">
      <h3 className="md:text-[40px] sm:text-3xl text-2xl font-cabin max-w-[551px] md:leading-12 font-semibold text-greeny text-center md:text-justify mb-10 lg:mb-20">
        Use the code <span className="text-secondary">'F2C001'</span> to enjoy
        10% discount on your first order
      </h3>
      <Button
        variant={"secondary"}
        className="text-[#f2f2f2] px-[111px] py-2.5"
      >
        Shop Now
      </Button>
    </section>
  );
};

export default DiscountBanner;
