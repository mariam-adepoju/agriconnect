import { Card } from "@/components/ui/card";

export interface OrderRow {
  produce: string;
  qty: string;
  price: string;
}

const RecentOrders = ({ orders }: { orders: OrderRow[] }) => {
  return (
    <Card className="p-6 rounded-2xl shadow-md bg-white">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-lg">Recent Orders</h3>
        <p className="text-sm text-gray-500">Showing latest 3</p>
      </div>
      <div className="space-y-3">
        {orders.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center bg-gray-50 rounded-md p-3"
          >
            <div>
              <p className="sm:hidden text-sm text-gray-500 ">Produce</p>
              <p className="font-medium text-[#404040]">{r.produce}</p>
            </div>
            <div>
              <p className="sm:hidden text-sm text-gray-500 ">Quantity</p>
              <p className="text-[#404040]">{r.qty}</p>
            </div>

            <div className="text-right">
              <p className="sm:hidden text-sm text-gray-500">Price</p>
              <p className="font-semibold text-[#404040] ">{r.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentOrders;
