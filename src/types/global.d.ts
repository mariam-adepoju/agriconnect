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
interface Review {
  reviewerName: string;
  rating: number;
  description: string;
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
  reviews: Review[];
  description: string;
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
  userId: string;
  userName: string;
  shippingAddress: string;
  shippingLocation: string;
  date: string;
  status: "pending" | "shipped" | "delivered" | "cancelled";
};
type BlogCategory = "tech" | "business" | "farm";
type Article = {
  title: string;
  time: string;
  description: string;
  author: string;
  date: string;
  image: string;
};
interface UserProfile {
  role: "consumer" | "farmer";
  firstName: string;
  lastName: string;
  location: string;
  address: string;
  email: string;
  farmName?: string;
}
