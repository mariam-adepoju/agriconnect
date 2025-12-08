import { Card } from "@/components/ui/card";
interface NotificationItem {
  id: number;
  typeColor: string;
  title: string;
  details: string;
}
const NotificationsCard = () => {
  const mockNotifications: NotificationItem[] = [
    {
      id: 1,
      typeColor: "bg-secondary",
      title: "New message from buyer",
      details: "Lettuce enquiry · 5hrs ago",
    },
    {
      id: 2,
      typeColor: "bg-primary",
      title: "Order #231 processed",
      details: "Ready for pickup · 2 days ago",
    },
    {
      id: 3,
      typeColor: "bg-primary",
      title: "Payment received (Order #235)",
      details: "₦150,000 deposited · Just now",
    },
    {
      id: 4,
      typeColor: "bg-destructive",
      title: "New order placed",
      details: "Requires confirmation · 30 mins ago",
    },
    {
      id: 5,
      typeColor: "bg-greeny",
      title: "Delivery completed",
      details: "Order #230 delivered · 1 day ago",
    },
  ];

  return (
    <Card className="p-6 rounded-2xl shadow-lg">
      <h4 className="font-semibold mb-4 text-lg text-[#404040]">
        Notifications
      </h4>

      <div className="space-y-3">
        {mockNotifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 border-b pb-4 last:border-b-0 last:pb-0"
          >
            <div
              className={`w-3 h-3 ${item.typeColor} rounded-full mt-1.5 shrink-0`}
            />
            <div>
              <p className="font-medium text-[#404040]">{item.title}</p>
              <p className="text-sm text-gray-500">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default NotificationsCard;
