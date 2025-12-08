import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";
import { Loader2 } from "lucide-react";

const PrivateRouteLayout = () => {
  const { currentUser, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />{" "}
        <h3 className="text-xl font-bold tracking-tight">
          Authenticating Session...
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Please wait while we check your credentials.
        </p>
      </div>
    );
  }

  if (currentUser) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRouteLayout;
