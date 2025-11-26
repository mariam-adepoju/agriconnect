import { useCartStore } from "@/store/useCartStore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import QuantityPicker from "@/components/QuantityPicker";

const CartPage = () => {
  const { items, removeItem } = useCartStore();

  const deliveryFee = 8000;
  const tax = 1000;

  const subtotal = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  if (items.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        Your cart is empty.
      </div>
    );

  return (
    <main className="mx-auto pt-25 pb-20 bg-grany px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:col-span-7 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="border rounded-xl shadow-sm">
              <CardContent className="flex items-center gap-10">
                {/* image */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-25 h-25 object-cover rounded-lg border"
                />

                {/* content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#404040]">
                      {item.name}
                    </h3>
                    <p className="text-[#404040]">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* quantity + remove */}
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

        {/* RIGHT SIDE - SUMMARY */}
        <div className="lg:col-span-5 space-y-5">
          {/* Discount */}
          <Card className="p-5 text-[#404040]">
            <h3 className="font-semibold text-xl ">Discount Code</h3>
            <Input placeholder="Enter code" />
            <Button className="bg-secondary hover:bg-secondary/80 text-grany text-xl py-2 px-4 rounded-md shadow-sm transition-colors">
              Apply
            </Button>
          </Card>

          {/* Order summary */}
          <Card className="p-5 text-[#404040]">
            <h3 className="font-semibold text-xl">Your Order</h3>
            <Separator />
            <div className="flex justify-between  mb-2">
              <span>Subtotal ({items.length} items)</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between  mb-2">
              <span>Delivery Fee</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Tax</span>
              <span>₦{tax.toLocaleString()}</span>
            </div>

            <Separator className="my-3" />

            <div className="flex justify-between font-semibold mb-4">
              <span>Total amount</span>
              <span>₦{(subtotal + deliveryFee + tax).toLocaleString()}</span>
            </div>

            <Button className="bg-secondary hover:bg-secondary/80 text-grany text-xl py-2 px-4 rounded-md shadow-sm transition-colors">
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
