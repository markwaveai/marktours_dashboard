import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Splash from "./components/Splash";

import TourServicesLayout from "./components/markservices/TourServicesLayout";
import TourCards from "./components/markservices/TourCards";
import AirTicketing from "./components/markservices/AirTicketing";
import Visas from "./components/markservices/Visas";
import CruiseHolidays from "./components/markservices/CruiseHolidays";
import HotelsandResort from "./components/markservices/HotelsandResort";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}>
            {/* Removed path="tour-services" to flatten the URL structure */}
            <Route element={<TourServicesLayout />}>
              <Route index element={<TourCards />} />
              <Route path="air" element={<AirTicketing />} />
              <Route path="visa" element={<Visas />} />
              <Route path="cruise" element={<CruiseHolidays />} />
              <Route path="hotels" element={<HotelsandResort />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}
