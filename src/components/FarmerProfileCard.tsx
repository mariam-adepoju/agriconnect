import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Props {
  fullName: string;
  location: string;
  farmName: string;
}

const FarmerProfileCard = ({ fullName, location, farmName }: Props) => {
  const letter = fullName?.[0] || "F";

  return (
    <Card className="p-6 rounded-2xl shadow-md text-center">
      <Avatar className="w-20 h-20 mx-auto">
        <AvatarFallback className="bg-primary text-white text-5xl font-bold">
          {letter}
        </AvatarFallback>
      </Avatar>
      <div className="text-[#404040]">
        <h3 className="font-semibold text-2xl text-primary space-y-1">
          {fullName}
        </h3>
        <p className="">{farmName} Farm</p>
        <p className="">{location} State</p>
      </div>
      <div className="mt-4 flex gap-3 justify-center">
        <Button variant="ghost" className="text-[#404040]">
          Edit Profile
        </Button>
        <Button className="bg-secondary text-grany hover:bg-secondary/70">
          My Orders
        </Button>
      </div>
    </Card>
  );
};

export default FarmerProfileCard;
