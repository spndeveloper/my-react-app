// src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Selamat datang, {user?.name}!</h1>
      <p>Email: {user?.email}</p>

      <div style={{ marginTop: "1.5rem" }}>
        <Link
          to="/"
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Ke Home
        </Link>

        <Link
          to="/about"
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Ke About
        </Link>

        <button
          onClick={handleLogout}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
