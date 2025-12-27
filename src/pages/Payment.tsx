import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { assets } from "@/assets/asset";
import { useLocation, useNavigate } from "react-router";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PaymentFailedModal from "@/components/PaymentFailedModal";
import { useAuthStore } from "@/store/useAuthStore";
import { createOrder } from "@/services/orderService";

type PaystackSetupOptions = {
  key: string;
  email: string;
  amount: number;
  currency?: string;
  ref?: string;
  callback?: (response: PaystackResponse) => void;
  onClose?: () => void;
};

type PaystackHandler = {
  openIframe: () => void;
};

type Paystack = {
  setup: (options: PaystackSetupOptions) => PaystackHandler;
};

const PaystackPop: Paystack | undefined = (
  window as Window & {
    PaystackPop?: Paystack;
  }
).PaystackPop;

const PaymentPage: React.FC = () => {
  const { items, clearCart } = useCartStore();
  const { currentUser, userProfile, isLoading: isAuthLoading } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [showFailed, setShowFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const paymentData = location.state as PaymentState | null;

  // Redirect if user accesses page directly
  useEffect(() => {
    if (!paymentData || (!isAuthLoading && (!currentUser || !userProfile))) {
      toast.error("Authentication required or payment details missing.");
      navigate("/cart");
    }
  }, [paymentData, currentUser, userProfile, isAuthLoading, navigate]);

  if (!paymentData || isAuthLoading || !currentUser || !userProfile)
    return null;
  const userEmail = currentUser.email || "";
  const userFullName = `${userProfile.firstName} ${userProfile.lastName}`;
  const { subtotal, deliveryFee, tax, total } = paymentData;
  const PAYSTACK_PUBLIC_KEY: string = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const handlePaystackPayment = () => {
    if (!PAYSTACK_PUBLIC_KEY || !PaystackPop) {
      toast.error("Paystack library not loaded");
      return;
    }

    if (!userEmail) {
      toast.error("User email is missing for payment processing.");
      return;
    }

    setLoading(true);

    const handler = PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: userEmail,
      amount: Math.round(total * 100),
      currency: "NGN",
      ref: `agric-order-${Date.now()}`,

      callback: (response: PaystackResponse) => {
        setLoading(false);

        if (response.status !== "success") {
          setShowFailed(true);
          return;
        }

        // Wrap async logic
        (async () => {
          try {
            const order: Order = {
              id: response.reference ?? `order-${Date.now()}`,
              items: [...items],
              subtotal,
              deliveryFee,
              tax,
              total,
              date: new Date().toISOString(),
              status: "pending",
              userId: currentUser.uid,
              userName: userFullName,
              email: userEmail,
              shippingAddress: userProfile.address,
              shippingLocation: userProfile.location,
            };

            const orderId = await createOrder(currentUser.uid, order);
            await clearCart();
            toast.success("Payment successful!");
            navigate("/orders", {
              state: { recentOrderId: orderId },
            });
          } catch (error) {
            console.error("Order creation failed:", error);
            toast.error("Order processing failed. Please contact support.");
          }
        })();
      },
      onClose: () => {
        setLoading(false);
        toast.warning("Payment was not completed.");
      },
    });

    handler.openIframe();
  };

  return (
    <main className="bg-grany min-h-screen py-20 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT SIDE — PAYSTACK BUTTON */}
        <div className="lg:col-span-7">
          <Card className="p-6 md:p-8 rounded-xl shadow-sm">
            <div className="w-40 overflow-hidden mb-2 md:mb-8">
              <img src={assets.paystack} className="w-full" />
            </div>
            <p className="text-[#404040] mb-6">
              You will be redirected to a secure Paystack popup to complete your
              payment.
            </p>
            <Button
              onClick={handlePaystackPayment}
              className="w-full text-grany text-xl bg-secondary hover:bg-secondary/80 py-5 rounded-full"
              disabled={loading}
            >
              {loading ? "Processing..." : `Pay ₦${total.toLocaleString()} Now`}
            </Button>
          </Card>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY WITH ADDRESS */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="p-6 md:p-8 text-[#404040] rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-xl">Order Summary</h3>
            <Separator className="my-2" />

            {/* SHIPPING DETAILS SECTION */}
            <div className="space-y-3 mb-5">
              <h4 className="font-semibold text-base text-primary">
                Shipping Details
              </h4>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-greeny capitalize">
                  {userFullName}
                </p>
                <p className="text-sm text-greeny capitalize">
                  {userProfile.address}, {userProfile.location}
                </p>
                <p className="text-xs text-greeny mt-1">Contact: {userEmail}</p>
              </div>
            </div>
            <Separator className="my-2" />
            {/* ORDER NUMBERS */}
            <div className="flex justify-between text-[#404040] mb-1">
              <span className="">
                Subtotal ({items.length} {items.length === 1 ? "item" : "items"}
                )
              </span>
              <span className="font-medium">₦{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-1">
              <span>Delivery Fee</span>
              <span className="font-medium">
                ₦{deliveryFee.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span className="font-medium">₦{tax.toLocaleString()}</span>
            </div>

            <Separator className="my-2" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
          </Card>
        </div>
      </div>
      {/* FAILED MODAL */}
      <PaymentFailedModal
        open={showFailed}
        onClose={() => setShowFailed(false)}
      />
    </main>
  );
};

export default PaymentPage;
