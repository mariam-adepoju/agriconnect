import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import MainLayout from "./layout/MainLayout";
import Farmers from "./pages/Farmers";
import AuthLayout from "./layout/AuthLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import React, { Suspense, useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import PrivateRouteLayout from "./layout/PrivateRouteLayout";
import { Loader } from "lucide-react";
import CartPage from "./pages/Cart";
import Blogs from "./pages/Blogs";
import PaymentPage from "./pages/Payment";
import FarmerDashboard from "./pages/FarmerDashboard";
import OrderDetails from "./pages/OrderDetails";
import ProduceDetails from "./pages/ProductDetails";
const Marketplace = React.lazy(() => import("./pages/Marketplace"));
const Orders = React.lazy(() => import("./pages/OrderHistory"));


function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const isLoading = useAuthStore((state) => state.isLoading);
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  if (isLoading) {
    return null;
  }
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route
              path="/marketplace/productdetails/:id"
              element={<ProduceDetails />}
            />
            <Route path="/productdetails/:id" element={<ProduceDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/blog" element={<Blogs />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRouteLayout />}>
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/farmer-dashboard/*" element={<FarmerDashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:orderId" element={<OrderDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
