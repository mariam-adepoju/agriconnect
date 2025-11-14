import { assets } from "@/assets/asset";
import { StarIcon } from "lucide-react";

const Testimonials: React.FC = () => {
  const reviews = [
    {
      image: assets.ibrahim,
      name: "Ibrahim K, Kano",
      text: "Buying directly from farmers has been a game changer for me. I get fresh produce at affordable prices.",
    },
    {
      image: assets.kehinde,
      name: "Kehinde S, Ogun",
      text: "As a food vendor, buying directly helps me cut costs and maximize profits while serving fresh meals.",
    },
  ];

  return (
    <section className="bg-grany py-16 px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
      <h2 className="md:text-[40px] text-3xl font-cabin font-semibold mb-8 text-center">
        What Our Customers Are Saying
      </h2>
      <div className="grid md:grid-cols-2 justify-center items-center gap-10 md:gap-20 mx-auto px-6">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="py-5 pr-4 pl-12 md:pl-18 relative  bg-primary/9 rounded-[30px] shadow-sm max-w-md h-auto flex flex-col justify-center"
          >
            <img
              src={review.image}
              alt="customer image"
              className="w-20 md:w-30 aspect-auto absolute left-0  top-1/2  transform -translate-x-1/2 -translate-y-1/2"
            />
            <p className="mb-4 text-xl md:text-2xl text-[#1e1e1e] italic">
              “{review.text}”
            </p>
            <h4 className="font-semibold text-xl md:text-2xl text-[#1e1e1e]">
              {review.name}
            </h4>
            <div className="text-[#ffca28] my-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="fill-[#ffca28] inline-block mr-2"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
