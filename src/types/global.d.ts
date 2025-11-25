interface Category {
  id: number;
  name: string;
  imageUrl: string;
}
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  categoryId: number;
  price: number;
  condition: string;
  location: string;
  sellerType: string;
}
interface ActiveFilters {
  produceType: string | null;
  condition: string | null;
  location: string | null;
  availability: string | null;
  sellerType: string | null;
}
