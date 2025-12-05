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

function App() {
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
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
