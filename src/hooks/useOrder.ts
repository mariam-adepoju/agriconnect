import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { rtdb } from "@/firebase";

export const useOrders = (uid: string | undefined) => {
  const [orders, setOrders] = useState<Record<string, Order>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!uid) return;

    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const snapshot = await get(ref(rtdb, `orders/${uid}`));
        setOrders(snapshot.exists() ? snapshot.val() : {});
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError("We couldn't load your orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [uid]);

  const orderEntries = Object.entries(orders).reverse();

  return { orders, orderEntries, loading, error };
};
