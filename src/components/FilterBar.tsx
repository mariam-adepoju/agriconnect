import { categories } from "@/lib/mockData";
import { useState, type ReactNode } from "react";
import { X, Filter } from "lucide-react";
import { Button } from "./ui/button";

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
  const [open, setOpen] = useState(false);
  const conditions = ["Fresh", "Dried", "Frozen", "Processed"];
  const locations = ["Oyo", "Lagos", "Osun"];
  const sellerTypes = ["Corporate", "Individual"];

  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden flex justify-center px-10">
        <Button variant={"secondary"}
          className="flex items-center gap-2 px-4 py-2 text-grany font-medium  shadow-md"
          onClick={() => setOpen(true)}
        >
          <Filter size={20} />
          Filters
        </Button>
      </div>

      {/* Overlay for mobile */}
      {open && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />}

      {/* Sidebar panel */}
      <aside
        className={`bg-[linear-gradient(90deg,#2D7C31_1.9%,#9CCC65_100%)] text-white rounded-lg p-6
          md:col-span-3 md:block fixed md:relative top-0 left-0 z-50 md:z-20 h-full md:h-auto w-50 md:w-auto
          transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={() => setOpen(false)}><X /></button>
        </div>

        <FilterSection title="Produce Type">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() =>
                setActiveCategory(category.id === activeCategory ? null : category.id)
              }
              className={`block w-full px-3 py-1 rounded-full cursor-pointer ${activeCategory === category.id ? "bg-white text-greeny" : "bg-transparent"
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
                setActiveCondition(condition === activeCondition ? null : condition)
              }
              className={`block w-full cursor-pointer px-3 py-1 rounded-full ${activeCondition === condition ? "bg-white text-greeny" : "bg-transparent"
                }`}
            >
              {condition}
            </li>
          ))}
        </FilterSection>

        <FilterSection title="Location">
          {locations.map((loc) => (
            <li
              key={loc}
              onClick={() =>
                setActiveLocation(loc === activeLocation ? null : loc)
              }
              className={`block w-full cursor-pointer px-3 py-1 rounded-full ${activeLocation === loc ? "bg-white text-greeny" : "bg-transparent"
                }`}
            >
              {loc}
            </li>
          ))}
        </FilterSection>

        <FilterSection title="Seller Type">
          {sellerTypes.map((type) => (
            <li
              key={type}
              onClick={() =>
                setActiveSellerType(type === activeSellerType ? null : type)
              }
              className={`block w-full cursor-pointer px-3 py-1 rounded-full ${activeSellerType === type ? "bg-white text-greeny" : "bg-transparent"
                }`}
            >
              {type}
            </li>
          ))}
        </FilterSection>
      </aside>
    </>
  )
}
export default FilterBar;
