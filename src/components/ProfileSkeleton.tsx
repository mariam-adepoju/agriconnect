import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileCardSkeleton = () => {
  return (
    <Card className="p-6 rounded-2xl shadow-md text-center">
      {/* Avatar Skeleton */}
      <Skeleton className="w-20 h-20 mx-auto rounded-full mb-4" />

      <div className="space-y-2">
        {/* Name Skeleton */}
        <Skeleton className="h-6 w-3/4 mx-auto" />
        {/* Farm Name Skeleton */}
        <Skeleton className="h-4 w-1/2 mx-auto" />
        {/* Location Skeleton */}
        <Skeleton className="h-4 w-1/3 mx-auto" />
      </div>

      <div className="mt-6 flex gap-3 justify-center">
        {/* Button Skeletons */}
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>
    </Card>
  );
};

export default ProfileCardSkeleton;
