import { useCartStore } from "@/store/useCartStore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Trash } from "lucide-react";
import QuantityPicker from "@/components/QuantityPicker";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "react-toastify";

const CartPage = () => {
  const { items, removeItem } = useCartStore();
  const {
    userProfile,
    isLoading: isProfileLoading,
    currentUser,
  } = useAuthStore();
  const navigate = useNavigate();

  const deliveryFee = 8000;
  const tax = 1000;

  // Clean subtotal calculation
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const total = subtotal + deliveryFee + tax;

  // Early UI exits
  if (items.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        Your cart is empty.
      </div>
    );

  if (isProfileLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        Loading user profile...
      </div>
    );

  const addressDetails = userProfile ? (
    <>
      <p className="font-semibold capitalize mb-0">
        {userProfile.firstName} {userProfile.lastName}
      </p>
      <p className="capitalize">{userProfile.address}</p>
      <p className="capitalize">{userProfile.location}</p>
    </>
  ) : (
    <p className="text-destructive">
      Error: Address not found. Please log in again.
    </p>
  );

  return (
    <main className="mx-auto pt-30 pb-20 bg-grany px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Back Button */}
        <Button
          variant={"link"}
          onClick={() => navigate("/marketplace")}
          className="absolute top-18 bg-white z-20 rounded-full"
        >
          <ArrowLeft />
        </Button>

        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-7 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="border rounded-xl shadow-sm">
              <CardContent className="flex items-center gap-10">
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-25 h-25 object-cover rounded-lg border"
                />

                {/* Item Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#404040]">
                      {item.name}
                    </h3>
                    <p className="text-[#404040]">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity + Remove */}
                  <div className="flex md:items-center items-start flex-col md:flex-row md:gap-5 gap-2 mt-1">
                    <QuantityPicker itemId={item.id} />

                    <Button
                      variant="ghost"
                      className="text-destructive hover:text-destructive/80 font-semibold"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash size={18} className="mr-1" /> Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* RIGHT SIDE - SUMMARY & ADDRESS */}
        <div className="lg:col-span-5 space-y-4">
          {/* Discount */}
          <Card className="p-5 text-[#404040]">
            <h3 className="font-semibold text-xl">Discount Code</h3>
            <Input placeholder="Enter code" />
            <Button className="bg-secondary hover:bg-secondary/80 text-grany text-xl py-2 px-4 rounded-md shadow-sm mt-2">
              Apply
            </Button>
          </Card>

          {/* Shipping Address */}
          <Card className="p-5 text-[#404040]">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl">Shipping Address</h3>
              {/* NEW: Change Address */}
              <Button variant="outline" className="text-sm">
                Change
              </Button>
            </div>
            <Separator className="my-2" />
            {addressDetails}
          </Card>

          {/* Order Summary */}
          <Card className="p-5 text-[#404040]">
            <h3 className="font-semibold text-xl">Your Order</h3>
            <Separator className="my-2" />

            <div className="flex justify-between mb-1">
              <span>
                Subtotal ({items.reduce((t, i) => t + i.qty, 0)} items)
              </span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-1">
              <span>Delivery Fee</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-1">
              <span>Tax</span>
              <span>₦{tax.toLocaleString()}</span>
            </div>

            <Separator className="my-2" />

            <div className="flex justify-between font-semibold mb-4">
              <span>Total Amount</span>
              <span>₦{total.toLocaleString()}</span>
            </div>

            <Button
              onClick={() => {
                if (!currentUser) {
                  toast.warn("Please log in to proceed to checkout.");
                  navigate("/login", { state: { redirectTo: "/payment" } });
                  return;
                }
                navigate("/payment", {
                  state: {
                    subtotal,
                    deliveryFee,
                    tax,
                    total,
                  },
                });
              }}
              className="bg-secondary hover:bg-secondary/80 text-grany text-xl py-2 px-4 rounded-md shadow-sm"
            >
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
