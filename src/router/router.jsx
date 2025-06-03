// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  // Public Routes (tanpa layout)
  { path: "/login", element: <Login /> },

  // Protected Routes (dibungkus oleh PrivateRoute dan MainLayout)
  {
    element: <PrivateRoute />, // pastikan user login
    children: [
      {
        element: <MainLayout />, // layout hanya untuk halaman login
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          // tambahkan route protected lainnya di sini
        ],
      },
    ],
  },

  // Fallback 404
  { path: "*", element: <NotFound /> },
]);

export default router;

// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [{ index: true, element: <Home /> }],
//   },
//   { path: "*", element: <NotFound /> },
// ]);

// export default router;
