import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { products } from "@/lib/mockData";
import SellerCard from "../components/SellerCard";
import QuantityPicker from "../components/QuantityPicker";
import { MapPin } from "lucide-react";
import { toast } from "react-toastify";
import { useCartStore } from "@/store/useCartStore";
import StarRating from "@/components/StarRating";

const ProduceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.items);

  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(
    product ? product.imageUrl : null
  );

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imageUrl);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        Product not found.
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 6);
  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <main className="mx-auto pt-25 pb-20 bg-grany px-4 md:px-16 lg:px-24 xl:px-32">
      {/* 12-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Image */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 flex items-center justify-center h-auto lg:h-[520px]">
            {selectedImage && (
              <img
                src={selectedImage}
                alt={product.name}
                className="max-h-full max-w-full object-cover drop-shadow-lg"
              />
            )}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {[product.imageUrl, product.imageUrl, product.imageUrl].map(
              (img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`bg-white border rounded-lg p-2 h-auto lg:h-50 flex items-center justify-center cursor-pointer transition-all ${
                    selectedImage === img
                      ? "border-secondary border"
                      : "border-gray-200 hover:border-secondary/80"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 flex flex-col gap-4 ">
          <div>
            <h1 className="text-3xl font-bold text-[#404040] mb-1">
              {product.name}
            </h1>
            <p className="text-base text-[#404040]">
              ₦{product.price.toLocaleString()}/part
            </p>
          </div>

          <div className="flex items-center gap-4">
            <QuantityPicker itemId={product.id} product={product} />
            <button
              onClick={() => {
                if (!cartItem) {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    qty: 1,
                  });
                }
                navigate("/cart");
              }}
              className="bg-secondary hover:bg-secondary/80 text-grany text-xl py-2 px-4 rounded-md shadow-sm transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-[#404040] mb-1">Description</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Seller Info */}
          {product.seller && (
            <SellerCard
              name={product.seller.name}
              location={product.seller.location}
              avatar={product.seller.avatar}
              onMessage={() => toast(`Message sent to ${product.seller!.name}`)}
            />
          )}

          {/* Reviews */}
          <div>
            <h3 className="font-semibold text-[#404040] mb-1">Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className="space-y-1">
                <div className="bg-white p-3 rounded-lg border border-gray-100">
                  <div className="flex gap-1 mb-2 text-[#ffca28]">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className=" font-bold text-[#404040]">
                    {review.reviewerName}
                  </p>
                  <p className=" text-[#404040]">{review.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="max-w-98 h-38 rounded-[15px] overflow-hidden relative">
            <div className="absolute  rounded-[15px] inset-0 bg-[url('assets/images/location-map.jpg')] bg-contain bg-no-repeat"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin
                className="text-secondary drop-shadow-md"
                size={20}
                fill="currentColor"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-7 md:mt-10 ">
        <h2 className="text-2xl font-cabin text-[#404040] text-center mb-4">
          Related Produce
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {relatedProducts.map((rel) => (
            <Link
              to={`/productdetails/${rel.id}`}
              key={rel.id}
              className="block"
            >
              <div className="bg-white p-4 rounded-2xl shadow">
                <img
                  src={rel.imageUrl}
                  className="h-25 lg:h-32 mx-auto object-contain"
                />
                <p className="text-center truncate font-medium mt-2">
                  {rel.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProduceDetail;
