import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const RecentOrdersSkeleton = () => {
  return (
    <Card className="p-6 rounded-2xl shadow-md bg-white">
      {/* Title Skeleton */}
      <Skeleton className="h-6 w-1/3 mb-6" />

      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center rounded-md p-3"
          >
            {/* Produce Name */}
            <Skeleton className="h-4 w-11/12" />
            {/* Quantity */}
            <Skeleton className="h-4 w-1/3" />
            {/* Price */}
            <div className="text-right">
              <Skeleton className="h-4 w-1/4 ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentOrdersSkeleton;
