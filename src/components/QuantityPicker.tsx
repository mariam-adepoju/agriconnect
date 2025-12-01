import { useCartStore } from "@/store/useCartStore";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface QuantityPickerProps {
  itemId: number;
  product?: Omit<CartItem, "qty">;
}

const QuantityPicker: React.FC<QuantityPickerProps> = ({ itemId, product }) => {
  const { items, addToCart, increaseQty, decreaseQty } = useCartStore();
  const cartItem = items.find((i) => i.id === itemId);

  const [localQty, setLocalQty] = useState(1);

  useEffect(() => {
    if (cartItem) setLocalQty(cartItem.qty);
  }, [cartItem]);

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation(); // <-- Prevent Link navigation
    if (cartItem) {
      increaseQty(itemId);
    } else if (product) {
      addToCart({ ...product, qty: 1 });
    }
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation(); // <-- Prevent Link navigation
    if (cartItem) decreaseQty(itemId);
  };

  return (
    <div className="flex items-center border bg-white rounded-md">
      <button onClick={handleDecrease} className="px-3 py-2 text-[#404040]">
        <Minus size={16} />
      </button>
      <div className="px-4 py-2 font-medium min-w-12 text-center">
        {cartItem ? cartItem.qty : localQty}
      </div>
      <button onClick={handleIncrease} className="px-3 py-2 text-[#404040] ">
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantityPicker;
