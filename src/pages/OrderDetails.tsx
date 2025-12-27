import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { rtdb } from "@/firebase";
import { useAuthStore } from "@/store/useAuthStore";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const OrderDetails: React.FC = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuthStore();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser || !orderId) return;

    const loadOrder = async () => {
      setLoading(true);
      try {
        const snapshot = await get(
          ref(rtdb, `orders/${currentUser.uid}/${orderId}`)
        );
        if (snapshot.exists()) {
          setOrder(snapshot.val());
        } else {
          setOrder(null);
        }
      } catch (error) {
        console.error("Failed to load order:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [currentUser, orderId]);

  if (loading)
    return <p className="text-center py-20 text-gray-500">Loading order...</p>;
  if (!order)
    return <p className="text-center py-20 text-red-500">Order not found.</p>;

  const {
    items,
    status,
    subtotal,
    tax,
    deliveryFee,
    total,
    shippingAddress,
    shippingLocation,
    userName,
    email,
  } = order;

  return (
    <main className="bg-grany min-h-screen py-20 px-4 md:px-16 lg:px-24 xl:px-32">
      <Button
        variant="outline"
        className="mb-6"
        onClick={() => navigate("/orders")}
      >
        &larr; Back to Orders
      </Button>

      <h1 className="text-3xl font-bold mb-6 text-primary">Order #{orderId}</h1>

      {/* STATUS & SHIPPING */}
      <Card className="p-6 md:p-8 mb-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h2 className="font-semibold text-xl mb-1">Status</h2>
            <p
              className={`capitalize font-semibold ${status === "pending"
                  ? "text-yellow-600"
                  : status === "shipped"
                    ? "text-blue-600"
                    : status === "delivered"
                      ? "text-green-600"
                      : "text-red-600"
                }`}
            >
              {status}
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <h2 className="font-semibold text-xl mb-2">Shipping Details</h2>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="font-semibold text-greeny">{userName}</p>
          <p className="text-sm text-greeny capitalize">
            {shippingAddress}, {shippingLocation}
          </p>
          <p className="text-xs text-greeny mt-1">Contact: {email}</p>
        </div>
      </Card>

      {/* ORDER ITEMS */}
      <Card className="p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-6">
        <h2 className="font-semibold text-xl mb-4">Order Items</h2>
        <ul className="divide-y divide-gray-200">
          {items.map((item: CartItem) => (
            <li key={item.id} className="py-3 flex items-center gap-4 md:gap-6">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500 text-sm">
                  Qty: {item.qty} × ₦{item.price.toLocaleString()}
                </p>
              </div>
              <div className="font-semibold">
                ₦{(item.qty * item.price).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* PAYMENT SUMMARY */}
      <Card className="p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="font-semibold text-xl mb-4">Payment Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>₦{tax.toLocaleString()}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default OrderDetails;
