import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Truck,
  LineChart,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  const menu = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, href: "#" },
    { label: "Deliveries", icon: <Truck size={18} />, href: "#" },
    { label: "Analytics", icon: <LineChart size={18} />, href: "#" },
    { label: "Settings", icon: <Settings size={18} />, href: "#" },
  ];

  return (
    <aside className="hidden lg:flex lg:w-60 xl:w-65 bg-[linear-gradient(90deg,#2D7C31_1.9%,#9CCC65_100%)] rounded-2xl p-6 text-white shadow-xl flex-col">
      <h2 className="font-cabin font-bold text-[25px] text-white mb-5">
        AGRIC<span className="text-secondary">O</span>NNECT
      </h2>

      <nav className="space-y-3">
        {menu.map((item, i) => (
          <Button
            key={i}
            variant="secondary"
            className="w-full bg-white/95 hover:bg-white text-green-800 rounded-full flex items-center gap-3 px-4 py-2 justify-start"
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </Button>
        ))}
      </nav>

      <div className="mt-auto">
        <Button
          variant="secondary"
          className="w-full bg-red-50 text-red-600 hover:bg-red-100 rounded-full flex items-center gap-2 justify-center py-2"
          onClick={onLogout}
        >
          <LogOut size={16} /> Log out
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
