import ActiveFilters from "@/components/ActiveFilters";
import FilterBar from "@/components/FilterBar";
import Paginations from "@/components/Paginations";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";
import { products } from "@/lib/mockData";
import { useMemo, useState } from "react";

const Marketplace = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeCondition, setActiveCondition] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [activeSellerType, setActiveSellerType] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = useMemo(() => {
    let list = products.slice();
    if (activeCategory)
      list = list.filter((p) => p.categoryId === activeCategory);
    if (activeCondition)
      list = list.filter((p) => p.condition === activeCondition);
    if (query)
      list = list.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
    if (activeLocation)
      list = list.filter((p) => p.location === activeLocation);
    if (activeSellerType)
      list = list.filter((p) => p.sellerType === activeSellerType);

    return list;
  }, [
    query,
    activeCategory,
    activeCondition,
    activeLocation,
    activeSellerType,
  ]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="py-15 bg-grany ">
      <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-12 gap-6">
        <FilterBar
          activeCategory={activeCategory}
          activeCondition={activeCondition}
          activeSellerType={activeSellerType}
          activeLocation={activeLocation}
          setActiveCategory={setActiveCategory}
          setActiveCondition={setActiveCondition}
          setActiveSellerType={setActiveSellerType}
          setActiveLocation={setActiveLocation}
        />

        <div className="col-span-12 md:col-span-9">
          <SearchBar query={query} setQuery={setQuery} />
          <ActiveFilters
            activeCategory={activeCategory}
            activeCondition={activeCondition}
            activeLocation={activeLocation}
            activeSellerType={activeSellerType}
            clearFilters={() => {
              setActiveCategory(null);
              setActiveCondition(null);
              setActiveLocation(null);
              setActiveSellerType(null);
            }}
          />
          <ProductList products={visible} />
          <Paginations page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
