import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomizerProvider } from "./context/CustomizerContext";
import { AuthProvider } from "./context/AuthContext";
import { AdminProvider } from "./context/AdminContext";

import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Order from "./pages/Order";
import Agents from "./pages/Agents";

export default function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <CustomizerProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customize" element={<Customize />} />
              <Route path="/order" element={<Order />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CustomizerProvider>
      </AdminProvider>
    </AuthProvider>
  );
}