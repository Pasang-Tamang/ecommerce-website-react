import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Products";

const AppComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default AppComponent;
