import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  onAddToCart?: (quantity: number) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(quantity);
  };

  return (
    <div className="flex items-center justify-between gap-1 border border-gray-300 rounded-lg px-2 py-2 hover:shadow-md transition-all">
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex items-center gap-1 text-green-900"
      >
        <ShoppingCart size={20} className="hidden lg:block" />
        <span className="font-medium text-sm">Add to cart</span>
      </button>

      <div className="flex items-center gap-1 text-green-900">
        <button
          type="button"
          onClick={handleDecrement}
          className="text-lg font-medium px-1"
        >
          -
        </button>
        <span className="font-medium text-lg">{quantity}</span>
        <button
          type="button"
          onClick={handleIncrement}
          className="text-lg font-medium px-1"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;
