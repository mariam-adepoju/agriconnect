import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NotificationsCardSkeleton = () => {
  const count = 5;
  return (
    <Card className="p-6 rounded-2xl shadow-lg">
      {/* Title Skeleton */}
      <Skeleton className="h-6 w-1/3 mb-6" />
      <div className="space-y-3">
        {[...Array(count)].map((_, i) => (
          <div key={i} className="flex items-start gap-3 pb-4">
            <Skeleton className="w-3 h-3 rounded-full mt-1.5" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
export default NotificationsCardSkeleton;
