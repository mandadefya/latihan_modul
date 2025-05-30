import { Suspense, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
// import './App.css'
import "./assets/tailwind.css";
// import Sidebar from "./layouts/Sidebar";
// import Header from "./layouts/Header";
// import Dashboard from "./pages/Dashboard";
// import { Routes, Route } from "react-router-dom";
// import Loading from "./components/Loading";
// import Orders from "./pages/Orders";
// import Customer from "./pages/Customer";
// import NotFound from "./pages/NotFound";
// import Error from "./pages/Error";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Resgister";
// import Forgot from "./pages/Auth/Forgot";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customer = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/mainlayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login.jsx"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const User = React.lazy(() => import("./pages/User"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const GuestDashboard = React.lazy(() => import("./pages/guest/GuestDashboard"));
const Products = React.lazy(() => import("./pages/Product"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const CekKetersediaan = React.lazy(() =>
  import("./pages/guest/CekKetersediaanProduct")
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/user" element={<User />} /> {/* ✅ Route baru */}
          <Route path="/error/:code" element={<Error />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<GuestDashboard />} />
          <Route
            path="/cek-ketersediaan-produk"
            element={<CekKetersediaan />}
          />{" "}
          {/* Tambah route ini */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
