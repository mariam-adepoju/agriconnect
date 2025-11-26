interface RelatedProductCardProps {
  product: Product;
  onClick: (id: number) => void;
}

const RelatedProductCard: React.FC<RelatedProductCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(product.id)}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="h-40 w-full overflow-hidden bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        {/* Simple display similar to the visual reference */}
        <h3 className="font-medium text-gray-800 text-sm">{product.name}</h3>
        <p className="text-orange-600 font-bold text-sm mt-1">
          N
          {
            product.price *
              1000 /* Converting purely for visual similarity to "N1000" */
          }
        </p>
      </div>
    </div>
  );
};

export default RelatedProductCard;
