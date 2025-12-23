import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/Login/LoginPage";
import AdminDashboard from "./components/Admin/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
