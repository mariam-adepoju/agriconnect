import { useState } from "react";
import { Link } from "react-router";

const ProductCard = ({ product }: { product: Product }) => {
  const [qty, setQty] = useState(1);

  return (
    <Link to={`productdetails/${product.id}`}>
      <article className="bg-white rounded-xl flex-col flex py-3 px-4 gap-2 overflow-hidden shadow-sm border">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-30 h-30 object-contain mx-auto"
        />

        <h3 className="text-sm font-semibold">{product.name}</h3>

        <div className="flex justify-between items-center">
          <span className="font-semibold">₦{product.price}</span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="border px-2 py-1 rounded"
            >
              -
            </button>
            <span className="border px-3 py-1 rounded">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="border px-2 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>

        <button className="mt-4 w-full bg-primary text-white py-2 rounded-md">
          Add to cart
        </button>
      </article>
    </Link>
  );
};
export default ProductCard;
