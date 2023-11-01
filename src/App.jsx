import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Products";
import SecureRoute from "./routes/SecureRoute";
import Counter from "./components/Counter";

const AppComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="" element={<SecureRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/counter" element={<Counter s />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default AppComponent;
