import { categories, products } from "@/lib/mockData";
import CategoryList from "./CategoryList";
import ProductGrid from "./ProductGrid";
import { useMemo, useState } from "react";

const CategorySection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    5
  );
  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };
  const filteredProducts: Product[] = useMemo(() => {
    return products.filter(
      (product) => product.categoryId === selectedCategoryId
    );
  }, [selectedCategoryId]);
  return (
    <section className="bg-grany py-12 px-4 md:px-16 lg:px-24 xl:px-32 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 md:items-start md:justify-between w-full">
        <CategoryList
          categories={categories}
          onSelectCategory={handleCategoryClick}
          selectedId={selectedCategoryId}
        />
        <div className="w-full overflow-hidden relative flex justify-center items-center flex-col">
          <h2 className="lg:text-3xl md:text-xl md:font-semibold text-2xl text-[#404040] mx-auto mt-8 mb-4">
            {selectedCategoryId &&
              `Products in ${
                categories.find(
                  (category) => category.id === selectedCategoryId
                )?.name
              }`}
          </h2>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
