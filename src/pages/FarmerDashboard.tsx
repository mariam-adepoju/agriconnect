import { useState } from "react";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router";
import MobileDrawer from "@/components/MobileDrawer";
import Sidebar from "@/components/Sidebar";
import SummaryCards from "@/components/SummaryCards";
import RecentOrders from "@/components/RecentOrders";
import ProduceInventory from "@/components/ProduceInventory";
import FarmerProfileCard from "@/components/FarmerProfileCard";
import NotificationsCard from "@/components/NotificationsCard";
import { mockOrders, mockProduce } from "@/lib/farmerMockData";
import { Menu } from "lucide-react";
import SummaryCardsSkeleton from "@/components/SummaryCardSkeleton";
import RecentOrdersSkeleton from "@/components/RecentOrderSkeleton";
import ProduceInventorySkeleton from "@/components/ProduceInventorySkeleton";
import ProfileCardSkeleton from "@/components/ProfileSkeleton";
import NotificationsCardSkeleton from "@/components/NotificationCardSkeleton";

const FarmerDashboard = () => {
  const { userProfile, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { firstName, lastName, location, farmName } = userProfile || {};
  const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Farmer";
  const displayLocation = location || "Unknown location";
  const displayFarmName = farmName || "Unknown farm";

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  const isProfileLoading = !userProfile;
  const MainContent = isProfileLoading ? (
    <>
      <SummaryCardsSkeleton />
      <RecentOrdersSkeleton />
      <ProduceInventorySkeleton />
    </>
  ) : (
    <>
      <SummaryCards />
      <RecentOrders orders={mockOrders} />
      <ProduceInventory produce={mockProduce} onAdd={() => navigate("#")} />
    </>
  );
  const AsideContent = isProfileLoading ? (
    <>
      <ProfileCardSkeleton />
      <NotificationsCardSkeleton />
    </>
  ) : (
    <>
      <FarmerProfileCard
        fullName={fullName}
        location={displayLocation}
        farmName={displayFarmName}
      />
      <NotificationsCard />
    </>
  );
  return (
    <div className="min-h-screen bg-grany flex flex-col">
      {/* Top bar for mobile: hamburger + title */}
      <header className="lg:hidden w-full bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b">
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Menu className="h-6 w-6 text-primary hover:text-primary/80" />
            </button>
            <h1 className="font-cabin font-bold text-[25px] text-[#404040]">
              AGRIC<span className="text-primary">O</span>NNECT
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium text-[#404040]">
              Hi, {firstName || "User"}
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Header */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        handleLogout={handleLogout}
      />
      {/* Main Container */}
      <div className="flex flex-1 flex-col md:flex-row pt-6 lg:pt-10 gap-5 px-4 sm:px-6 pb-20 mx-auto w-full">
        {/* Desktop Sidebar */}
        <Sidebar onLogout={handleLogout} />
        <main className="flex-1 flex flex-col gap-6">{MainContent}</main>
        <aside className="w-full md:w-80 space-y-6 order-first lg:order-0">
          {AsideContent}
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default FarmerDashboard;
