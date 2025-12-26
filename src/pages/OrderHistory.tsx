import { useLocation, useNavigate } from "react-router";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Loader2, PackageOpen, Calendar, MapPin, Package } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useOrders } from "@/hooks/useOrder";
import StatusBadge from "@/components/StatusBadge";

const Orders: React.FC = () => {
    const { currentUser } = useAuthStore();
    const navigate = useNavigate();
    const location = useLocation();
    const recentOrderId = location.state?.recentOrderId;

    const { orderEntries, loading, error } = useOrders(currentUser?.uid);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <p className="text-muted-foreground">Loading your orders...</p>
            </div>
        );
    }

    return (
        <main className="bg-grany min-h-screen py-12 px-4 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <header className="mb-10 text-cabin text-center md:text-left">
                    <h1 className="text-3xl font-bold text-primary tracking-tight">My Orders</h1>
                    <p className="text-muted-foreground text-sm">Track and manage your purchase history.</p>
                </header>
                {!error && orderEntries.length === 0 ? (
                    <Card className="p-16 text-center rounded-2xl border-dashed flex flex-col items-center">
                        <PackageOpen className="w-12 h-12 text-gray-300 mb-4" />
                        <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
                        <Button className="mt-4" onClick={() => navigate("/marketplace")}>
                            Start Shopping
                        </Button>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orderEntries.map(([orderId, order]) => {
                            const isRecent = orderId === recentOrderId;
                            return (
                                <Card
                                    key={orderId}
                                    className={`relative flex flex-col p-5 rounded-2xl shadow-sm cursor-pointer transition-all hover:shadow-lg active:scale-[0.98] group border
                                    ${isRecent
                                            ? "border-green-500 bg-green-50/30 ring-1 ring-green-500"
                                            : "hover:border-primary/40 bg-white"
                                        }`}
                                    onClick={() => navigate(`/orders/${orderId}`)}
                                >
                                    {isRecent && (
                                        <div className="absolute -top-3 left-4 bg-green-600 text-white text-[10px] px-2.5 py-1 rounded-full uppercase tracking-widest font-bold shadow-sm">
                                            Recent Order
                                        </div>
                                    )}

                                    {/* Header: Order ID & Status */}
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</p>
                                            <p className="font-bold text-slate-800 group-hover:text-primary transition-colors">
                                                #{orderId.slice(-8).toUpperCase()}
                                            </p>
                                        </div>
                                        <StatusBadge status={order.status} />
                                    </div>

                                    {/* Body: Details with Icons for better scannability */}
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                            {new Date(order.date).toLocaleDateString(undefined, {
                                                month: "short", day: "numeric", year: "numeric"
                                            })}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Package className="w-4 h-4 mr-2 text-gray-400" />
                                            {order.items?.length || 0} {order.items?.length === 1 ? "Item" : "Items"}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2 text-gray-400 shrink-0" />
                                            <span className="truncate">{order.shippingLocation}</span>
                                        </div>
                                    </div>

                                    <Separator className="mt-auto mb-2" />

                                    {/* Footer: Price */}
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-gray-400 font-medium uppercase">Total Amount</p>
                                        <p className="text-xl font-black text-slate-900">
                                            ₦{order.total?.toLocaleString()}
                                        </p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
};

export default Orders;