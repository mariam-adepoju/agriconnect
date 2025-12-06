import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import CartPage from "./pages/Cart";
import PaymentPage from "./pages/Payment";
import MainLayout from "./layout/MainLayout";
import Farmers from "./pages/Farmers";
import Blogs from "./pages/Blogs";
import AuthLayout from "./layout/AuthLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import PrivateRouteLayout from "./layout/PrivateRouteLayout";

function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route
            path="/marketplace/productdetails/:id"
            element={<ProductDetails />}
          />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
