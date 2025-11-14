// import { categories } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (categoryId: number) => void;
  selectedId: number | null;
}
const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onSelectCategory,
  selectedId,
}) => {
  return (
    <div className="w-full md:w-5/10 lg:w-4/10">
      <h2 className="lg:text-3xl md:text-xl md:font-semibold text-2xl text-[#404040]">
        Shop by Categories
      </h2>
      <p className="md:text-lg text-base text-[#404040] mb-3 md:mb-[30px]">
        Explore top picks from farms near you
      </p>
      <div className="grid grid-cols-[repeat(3,minmax(100px,150px))] md:grid-cols-2 justify-center gap-2 lg:gap-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className={cn(
              "relative group rounded-lg cursor-pointer hover:scale-102 h-[150px] md:h-auto",
              selectedId === category.id && "ring-3 ring-secondary"
            )}
            onClick={() => onSelectCategory(category.id)}
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-full rounded-lg object-cover"
            />
            <Button
              className={cn(
                "absolute bg-background/70 hover:bg-background/50 text-black px-2 lg:px-5 py-2.5 text-xs font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer",
                selectedId === category.id && "bg-secondary"
              )}
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
