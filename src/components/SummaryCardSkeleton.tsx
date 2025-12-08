import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // Assuming import path

const SummaryCardsSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <Card
          key={i}
          className="px-2 lg:px-3 py-5 rounded-2xl text-center shadow-sm"
        >
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SummaryCardsSkeleton;
