import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthStore } from "./useAuthStore";

interface OrderTotals {
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
}

interface CartState {
  items: CartItem[];
  orderHistory: Order[];
  addToCart: (item: CartItem) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
  addOrder: (order: Order) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      orderHistory: [],

      addToCart: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
      },

      removeItem: (id) =>
        set({ items: get().items.filter((item) => item.id !== id) }),

      increaseQty: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
          ),
        }),

      decreaseQty: (id) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
          ),
        }),

      clearCart: () => set({ items: [] }),
      addOrder: (order) =>
        set({ orderHistory: [...get().orderHistory, order] }),
    }),

    { name: "cart-storage" }
  )
);
export const placeOrder = (totals: OrderTotals) => {
  const { items, addOrder, clearCart } = useCartStore.getState();
  const { currentUser, userProfile } = useAuthStore.getState();

  // Safety checks
  if (!currentUser || !userProfile) {
    console.error(
      "Order placement failed: User not authenticated or profile missing."
    );
    return;
  }
  if (items.length === 0) {
    console.warn("Order placement failed: Cart is empty.");
    return;
  }

  // 1. Construct the complete Order object
  const newOrder: Order = {
    id: `ORDER-${Date.now()}`,
    items: items,
    ...totals,

    // Add User Profile Data
    userId: currentUser.uid,
    userName: `${userProfile.firstName} ${userProfile.lastName}`,
    shippingAddress: userProfile.address,
    shippingLocation: userProfile.location,

    date: new Date().toISOString(),
    status: "pending",
  };

  addOrder(newOrder);
  clearCart();

  console.log(`Order placed successfully: ${newOrder.id}`);
  return newOrder.id;
};
