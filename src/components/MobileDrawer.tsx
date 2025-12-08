import {
  X,
  LayoutDashboard,
  Truck,
  LineChart,
  Settings,
  LogOut,
} from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleLogout: () => void;
}

const MobileDrawer = ({ isOpen, onClose, handleLogout }: Props) => {
  const menu = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Deliveries", icon: <Truck size={18} /> },
    { label: "Analytics", icon: <LineChart size={18} /> },
    { label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div
      aria-hidden={!isOpen}
      className={`lg:hidden fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <aside
        className={`absolute left-0 top-0 bottom-0 w-72 bg-[linear-gradient(90deg,#2D7C31_1.9%,#9CCC65_100%)] p-6 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-bold text-white">AGRICONNECT</div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-md"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          {menu.map((item, i) => (
            <button
              key={i}
              onClick={onClose}
              className="flex items-center gap-3 text-white bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 font-medium"
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mt-auto w-full flex items-center gap-2 justify-center rounded-lg px-3 py-2 bg-red-50 text-red-600"
          onClick={handleLogout}
        >
          <LogOut size={16} /> Log out
        </button>
      </aside>
    </div>
  );
};

export default MobileDrawer;
