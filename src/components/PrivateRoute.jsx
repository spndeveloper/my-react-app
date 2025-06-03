// src/components/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { user } = useAuth();

  if (!user) {
    // belum login → alihkan ke halaman login
    return <Navigate to="/login" replace />;
  }
  // sudah login → render semua children (nested routes)
  return <Outlet />;
}
