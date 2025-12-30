import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import LoginPage from "./components/Login/LoginPage";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Splash from "./components/Splash";

import TourServices from "./components/markservices/TourServices";
import AirTicketing from "./components/markservices/AirTicketing";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          {/* Existing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* ✅ NEW ROUTES */}
          <Route path="/tour-services" element={<TourServices />} />
          <Route path="/air-ticketing" element={<AirTicketing />} />
        </Routes>
      )}
    </>
  );
}
