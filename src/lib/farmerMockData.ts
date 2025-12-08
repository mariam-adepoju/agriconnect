export type ProduceRow = {
  produce: string;
  stock: string;
  price: string;
};
export type OrderRow = {
  produce: string;
  qty: string;
  price: string;
};
export const mockProduce: ProduceRow[] = [
  { produce: "Orange", stock: "50 Cartons", price: "₦1,000/kg" },
  { produce: "Lime", stock: "30 Cartons", price: "₦1,200/kg" },
  { produce: "Pear", stock: "70 Cartons", price: "₦900/kg" },
  { produce: "Apple", stock: "20 Cartons", price: "₦1,500/kg" },
  { produce: "Coconut", stock: "120 Cartons", price: "₦800/kg" },
];
export const mockOrders: OrderRow[] = [
  { produce: "Orange", qty: "10 Cartons", price: "₦10,000" },
  { produce: "Lime", qty: "5 Cartons", price: "₦6,000" },
  { produce: "Apple", qty: "3 Cartons", price: "₦4,500" },
];
