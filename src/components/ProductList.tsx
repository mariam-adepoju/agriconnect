import ProductCard from "./ProductItem";

function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="min-h-[55dvh] mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
      {products.map((p: Product) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
export default ProductList;
