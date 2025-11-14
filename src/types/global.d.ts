interface Category {
  id: number;
  name: string;
  imageUrl: string;
}
interface Product {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  imageUrl: string;
}
