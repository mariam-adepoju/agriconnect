import { Link, useNavigate } from "react-router";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "./ui/button";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        <LazyLoadImage
          src={product.imageUrl}
          alt={product.name}
          effect="blur"
          threshold={300}
          wrapperClassName="w-40 h-30 mx-auto block"
          className="w-full h-full object-contain mx-auto"
        />
        <div className="text-[#404040] mt-2 space-y-1">
          <h3 className="font-medium text-sm">{product.name}</h3>
          <p className="text-sm font-semibold">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
        <Button onClick={handleAddToCart} className="mt-2 text-base w-full ">
          Add to cart
        </Button>
      </article>
    </Link>
  );
};

export default ProductCard;
