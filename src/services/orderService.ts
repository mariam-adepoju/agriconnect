import { ref, push, set } from "firebase/database";
import { rtdb } from "@/firebase";

export const createOrder = async (
  userId: string,
  order: Order
): Promise<string> => {
  const orderRef = push(ref(rtdb, `orders/${userId}`));
  await set(orderRef, order);
  return orderRef.key as string;
};
