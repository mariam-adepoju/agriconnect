import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { User, Leaf } from "lucide-react";

interface RoleSelectionProps {
  onSelectRole: (role: "farmer" | "consumer") => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-green-100 to-white p-6">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 sm:mb-4 text-greeny/70">
          Welcome to AgricConnect
        </h1>
        <p className="sm:text-lg font-medium text-greeny mb-12">
          Choose how you want to get started.
        </p>

        <div className="grid grid-cols-[repeat(1,minmax(0,400px))] md:grid-cols-2 gap-10 justify-center">
          {/* Consumer Card */}
          <Card
            onClick={() => onSelectRole("consumer")}
            className="p-5 rounded-2xl border-none shadow-md hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer bg-white"
          >
            <CardHeader className="text-center space-y-2 md:space-y-3">
              <User className="h-14 w-14 text-primary mx-auto" />
              <CardTitle className="text-2xl font-semibold text-[#404040]">
                Consumer
              </CardTitle>
              <CardDescription className="text-[#404040] text-base">
                Shop <strong>fresh produce</strong> directly from local farmers.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Farmer Card */}
          <Card
            onClick={() => onSelectRole("farmer")}
            className="p-5 rounded-2xl border-none shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer bg-white"
          >
            <CardHeader className="text-center space-y-2 md:space-y-3">
              <Leaf className="h-14 w-14 text-secondary mx-auto" />
              <CardTitle className="text-2xl font-semibold text-[#404040]">
                Farmer
              </CardTitle>
              <CardDescription className="text-[#404040] text-base">
                Sell your crops and reach more <strong>ready buyers</strong>.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
