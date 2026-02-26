import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomizerProvider } from "./context/CustomizerContext";
import { AuthProvider } from "./context/AuthContext";
import { AdminProvider } from "./context/AdminContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminProvider>
        <CustomizerProvider>
          <App />
        </CustomizerProvider>
      </AdminProvider>
    </AuthProvider>
  </React.StrictMode>
);