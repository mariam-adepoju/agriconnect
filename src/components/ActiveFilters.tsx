import { categories } from "@/lib/mockData";

interface ActiveFiltersProps {
  activeCategory: number | null;
  activeCondition: string | null;
  activeLocation: string | null;
  activeSellerType: string | null;
  clearFilters: () => void;
}

const ActiveFilters = ({
  activeCategory,
  activeCondition,
  activeLocation,
  activeSellerType,
  clearFilters,
}: ActiveFiltersProps) => {
  const categoryName =
    activeCategory !== null
      ? categories.find((category) => category.id === activeCategory)?.name
      : null;

  const activeFilters = [
    categoryName,
    activeCondition,
    activeLocation,
    activeSellerType,
  ].filter(Boolean);

  return (
    <div className="mt-4 flex gap-3 items-center flex-wrap">
      {activeFilters.map((filter, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-white rounded-full border text-sm"
        >
          {filter}
        </span>
      ))}

      {activeFilters.length > 0 && (
        <button
          onClick={clearFilters}
          className="text-red-600 text-sm hover:underline"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ActiveFilters;
