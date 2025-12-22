import { create } from "zustand";
import { persist } from "zustand/middleware";
import { auth } from "@/firebase";
import {
  loadCartFromDB,
  saveCartToDB,
  clearCartInDB,
} from "@/services/cartservice";

interface CartState {
  items: CartItem[];
  isSyncing: boolean;

  loadFirebaseCart: () => Promise<void>;
  addToCart: (item: CartItem) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
  increaseQty: (id: number) => Promise<void>;
  decreaseQty: (id: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isSyncing: false,

      /** Firebase cart load (only when logged in) */
      loadFirebaseCart: async () => {
        const user = auth.currentUser;
        if (!user) return;

        set({ isSyncing: true });
        try {
          const firebaseItems = await loadCartFromDB(user.uid);
          set({ items: firebaseItems });
          console.log("[CartStore] Firebase cart loaded");
        } catch (error) {
          console.error("[CartStore] Firebase load failed", error);
        } finally {
          set({ isSyncing: false });
        }
      },

      addToCart: async (item) => {
        const items = get().items;
        const existing = items.find((i) => i.id === item.id);

        const updated = existing
          ? items.map((i) =>
              i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
            )
          : [...items, item];

        set({ items: updated });

        const user = auth.currentUser;
        if (user) await saveCartToDB(user.uid, updated);
      },

      removeItem: async (id) => {
        const updated = get().items.filter((i) => i.id !== id);
        set({ items: updated });

        const user = auth.currentUser;
        if (user) await saveCartToDB(user.uid, updated);
      },

      increaseQty: async (id) => {
        const updated = get().items.map((i) =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i
        );
        set({ items: updated });

        const user = auth.currentUser;
        if (user) await saveCartToDB(user.uid, updated);
      },

      decreaseQty: async (id) => {
        const updated = get().items.map((i) =>
          i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
        );
        set({ items: updated });

        const user = auth.currentUser;
        if (user) await saveCartToDB(user.uid, updated);
      },

      clearCart: async () => {
        set({ items: [] });

        const user = auth.currentUser;
        if (user) await clearCartInDB(user.uid);
      },
    }),
    {
      name: "guest-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
