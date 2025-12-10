import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <StarIcon
            size={20}
            key={index}
            className={
              (cn("text-[#ffca28]"),
              rating > index ? "fill-[#ffca28]" : "fill-white")
            }
          />
        ))}
    </>
  );
};

export default StarRating;
