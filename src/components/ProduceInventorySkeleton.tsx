import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProduceInventorySkeleton = () => {
  return (
    <Card className="p-6 rounded-2xl shadow-md bg-white">
      <div className="flex justify-between mb-4 items-center">
        {/* Title Skeleton */}
        <Skeleton className="h-6 w-1/4" />
        {/* Button Skeleton */}
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>

      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-md p-3"
          >
            {/* Produce */}
            <Skeleton className="h-4 w-3/4" />
            {/* Stock */}
            <Skeleton className="h-4 w-1/2" />
            {/* Price */}
            <div className="text-right">
              <Skeleton className="h-4 w-1/3 ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProduceInventorySkeleton;
