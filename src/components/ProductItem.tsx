import { Link, useNavigate } from "react-router";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      qty: 1,
    });
    navigate("/cart");
  };

  return (
    <Link to={`productdetails/${product.id}`}>
      <article className="bg-white rounded-xl flex-col flex py-3 px-4 gap-2 overflow-hidden shadow-sm border">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-30 h-30 object-contain mx-auto"
        />

        <h3 className="text-sm font-semibold">{product.name}</h3>

        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold">
            ₦{product.price.toLocaleString()}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-primary text-white py-2 rounded-md"
        >
          Add to cart
        </button>
      </article>
    </Link>
  );
};

export default ProductCard;
