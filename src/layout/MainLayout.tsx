import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";
const MainLayout = () => {
  const navigate = useNavigate();
  const { currentUser, userProfile, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && currentUser && userProfile?.role === "farmer") {
      navigate("/farmer-dashboard", { replace: true });
    }
  }, [isLoading, currentUser, userProfile, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
