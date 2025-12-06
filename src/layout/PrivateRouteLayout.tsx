import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";

const PrivateRouteLayout = () => {
  const { currentUser, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (currentUser) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRouteLayout;
