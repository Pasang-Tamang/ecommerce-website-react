import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Products";
import SecureRoute from "./routes/SecureRoute";

const AppComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="" element={<SecureRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default AppComponent;
