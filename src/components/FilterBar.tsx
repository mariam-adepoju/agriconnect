import { categories } from "@/lib/mockData";
import { type ReactNode } from "react";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

interface FilterBarProps {
  activeCategory: number | null;
  activeCondition: string | null;
  activeLocation: string | null;
  activeSellerType: string | null;
  setActiveCategory: (category: number | null) => void;
  setActiveCondition: (condition: string | null) => void;
  setActiveLocation: (location: string | null) => void;
  setActiveSellerType: (sellerType: string | null) => void;
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="mb-2">
      <h3 className="font-medium text-base">{title}</h3>
      <ul className="text-sm">{children}</ul>
    </div>
  );
}
function FilterBar({
  activeCategory,
  activeCondition,
  activeLocation,
  activeSellerType,
  setActiveCategory,
  setActiveCondition,
  setActiveLocation,
  setActiveSellerType,
}: FilterBarProps) {
  const conditions = ["Fresh", "Dried", "Frozen", "Processed"];
  const locations = ["Oyo", "Lagos", "Osun"];
  const sellerTypes = ["Corporate", "Individual"];

  return (
    <aside className="col-span-12 md:col-span-3 bg-[linear-gradient(90deg,#2D7C31_1.9%,#9CCC65_100%)] text-white rounded-lg p-6">
      <h2 className="text-xl mb-3">Filter Options</h2>

      <FilterSection title="Produce Type">
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() =>
              setActiveCategory(
                category.id === activeCategory ? null : category.id
              )
            }
            className={`block w-full px-3 py-1 rounded-full text-left ${
              activeCategory === category.id
                ? "bg-white text-greeny"
                : "bg-transparent"
            }`}
          >
            {category.name}
          </li>
        ))}
      </FilterSection>

      <FilterSection title="Condition">
        {conditions.map((condition) => (
          <li
            key={condition}
            onClick={() =>
              setActiveCondition(
                condition === activeCondition ? null : condition
              )
            }
            className={`block w-full px-3 py-1 rounded-full text-left ${
              activeCondition === condition
                ? "bg-white text-greeny"
                : "bg-transparent"
            }`}
          >
            {condition}
          </li>
        ))}
      </FilterSection>
      <FilterSection title="Location">
        {locations.map((location) => (
          <li
            key={location}
            onClick={() =>
              setActiveLocation(location === activeLocation ? null : location)
            }
            className={`block w-full px-3 py-1 rounded-full text-left ${
              activeLocation === location
                ? "bg-white text-greeny"
                : "bg-transparent"
            }`}
          >
            {location}
          </li>
        ))}
      </FilterSection>
      <FilterSection title="Seller Type">
        {sellerTypes.map((sellerType) => (
          <li
            key={sellerType}
            onClick={() =>
              setActiveSellerType(
                sellerType === activeSellerType ? null : sellerType
              )
            }
            className={`block w-full px-3 py-1 rounded-full text-left ${
              activeSellerType === sellerType
                ? "bg-white text-greeny"
                : "bg-transparent"
            }`}
          >
            {sellerType}
          </li>
        ))}
      </FilterSection>
    </aside>
  );
}
export default FilterBar;
