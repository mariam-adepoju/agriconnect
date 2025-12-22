import { ref, set, get } from "firebase/database";
import { rtdb } from "@/firebase";

export const loadCartFromDB = async (userId: string) => {
  const snapshot = await get(ref(rtdb, `carts/${userId}`));
  if (!snapshot.exists()) return [];
  return Object.values(snapshot.val()) as CartItem[];
};

export const saveCartToDB = async (userId: string, items: CartItem[]) => {
  const cartMap = items.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<number, CartItem>);

  await set(ref(rtdb, `carts/${userId}`), cartMap);
};

export const clearCartInDB = async (userId: string) => {
  await set(ref(rtdb, `carts/${userId}`), null);
};
