// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const HARD_CODED_USER = {
    email: "admin@example.com",
    password: "password123",
    name: "Admin User",
  };

  // Restore user dari localStorage jika ada
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // Simpan atau hapus user dari localStorage saat berubah
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async ({ email, password }) => {
    if (
      email === HARD_CODED_USER.email ||
      password === HARD_CODED_USER.password
    ) {
      await new Promise((res) => setTimeout(res, 300)); // Simulasi delay
      const userData = {
        name: HARD_CODED_USER.name,
        email: HARD_CODED_USER.email,
      };
      setUser(userData);
    } else {
      throw new Error("Email atau password salah");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
