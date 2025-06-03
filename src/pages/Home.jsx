import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>

      <div style={{ marginTop: "1.5rem" }}>
        <Link
          to="/dashboard"
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Go to Dashboard
        </Link>

        <Link
          to="/about"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Go to About
        </Link>
      </div>
    </div>
  );
};

export default Home;
