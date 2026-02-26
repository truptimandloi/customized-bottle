import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState([]);

  // Load admin status + orders from localStorage
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    const savedOrders = localStorage.getItem("orders");

    if (adminStatus === "true") {
      setIsAdmin(true);
    }

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Admin Login
  const login = (username, password) => {
    // 👇 For now hardcoded (later connect backend)
    if (username === "admin" && password === "1234") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  // Add Order
  const addOrder = (orderData) => {
    const updatedOrders = [...orders, orderData];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        login,
        logout,
        orders,
        addOrder
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);