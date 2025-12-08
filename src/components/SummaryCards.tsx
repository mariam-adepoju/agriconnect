import { Card } from "@/components/ui/card";

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Card className="px-2 lg:px-3 py-5 rounded-2xl text-center shadow-sm">
        <p className="text-sm sm:text-base font-medium text-[#404040]">
          Total Earnings
        </p>
        <p className="text-lg md:text-xl font-bold text-primary">₦5,000,000</p>
      </Card>

      <Card className="px-2 lg:px-3 py-5 rounded-2xl text-center shadow-sm">
        <p className="text-sm sm:text-base font-medium text-[#404040]">
          Total Products
        </p>
        <p className="text-lg md:text-xl font-bold  text-primary">1,050</p>
      </Card>

      <Card className="px-2 lg:px-3 py-5 rounded-2xl text-center shadow-sm">
        <p className="text-sm sm:text-base font-medium text-[#404040]">
          Total Orders
        </p>
        <p className="text-lg md:text-xl font-bold text-primary">100</p>
      </Card>
    </div>
  );
};

export default SummaryCards;
