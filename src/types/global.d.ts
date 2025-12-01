interface Category {
  id: number;
  name: string;
  imageUrl: string;
}
interface Seller {
  id: number;
  name: string;
  location: string;
  avatar: string;
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
  seller: Seller;
}
interface ActiveFilters {
  produceType: string | null;
  condition: string | null;
  location: string | null;
  availability: string | null;
  sellerType: string | null;
}
type PaystackResponse = {
  status?: string;
  reference?: string;
};
type PaymentState = {
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
};
type CartItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  qty: number;
};
type Order = {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
};
