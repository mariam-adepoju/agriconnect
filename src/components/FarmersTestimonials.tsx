import { assets } from "@/assets/asset";
import { StarIcon } from "lucide-react";

const FarmersTestimonial: React.FC = () => {
  const reviews = [
    {
      image: assets.kunle,
      name: "Ibrahim A, Kunle",
      text: "The platform is easy too use. I list my produce and track orders without stress",
    },
    {
      image: assets.aisha,
      name: "Kehinde S, Aisha",
      text: "Agri-connect helped me connect with serious buyers and plan my harvest better.",
    },
  ];

  return (
    <section className="bg-grany md:py-15 py-10 px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
      <h2 className="md:text-[40px] sm:text-3xl text-2xl font-cabin font-semibold text-greeny text-center mb-10">
        What Farmers Are Saying
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
              className="w-20 h-30 md:w-30 md:h-40 bg-cover rounded-2xl aspect-video absolute left-0  top-1/2  transform -translate-x-1/2 -translate-y-1/2"
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

export default FarmersTestimonial;
