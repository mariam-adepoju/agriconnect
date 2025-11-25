import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import AddToCartButton from "./AddToCart";

// Assuming Product type is defined/imported elsewhere
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="w-full mx-auto">
      <Swiper
        grid={{
          rows: 2,
          fill: "column",
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Grid, Navigation, Pagination]}
        className="mySwiper h-[600px] py-6!"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="bg-white rounded-xl p-2 md:p-5 flex flex-col gap-2 shadow-lg transition duration-300 hover:shadow-xl"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-30 h-30 object-contain mx-auto"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold truncate grow-0">{product.name}</h3>
              <p className="text-greeny font-semibold my-1 grow-0">
                #{product.price.toFixed(2)}
              </p>
              <AddToCartButton />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGrid;
