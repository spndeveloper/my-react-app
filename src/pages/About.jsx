import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About Page</h1>
      <p>This page contains information about the application.</p>

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
          Go to Home
        </Link>

        <Link
          to="/dashboard"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#28a745",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default About;
