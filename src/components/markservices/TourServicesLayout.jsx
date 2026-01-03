import { useState, useEffect } from "react";
import TourHeader from "./TourHeader";
import TourCards from "./TourCards";
import AirTicketing from "./AirTicketing";
import Visas from "./Visas";
import CruiseHolidays from "./CruiseHolidays";
import HotelsandResort from "./HotelsandResort";

export default function TourServicesLayout() {
  const [activeTab, setActiveTab] = useState("packages");

  useEffect(() => {
    const handleTabSwitch = (e) => {
      if (e.detail && e.detail.tab) {
        setActiveTab(e.detail.tab);
      }
    };
    window.addEventListener("switch-tour-tab", handleTabSwitch);
    return () => window.removeEventListener("switch-tour-tab", handleTabSwitch);
  }, []);

  return (
    <section id="tour-services" className="w-full max-w-7xl mx-auto px-0 md:px-10 py-4 md:py-8">
      <TourHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="border border-gray-300 rounded-[32px] p-2 md:p-6 bg-white relative">
        {activeTab === "packages" && <TourCards />}
        {activeTab === "air" && <AirTicketing />}
        {activeTab === "visa" && <Visas />}
        {activeTab === "cruise" && <CruiseHolidays />}
        {activeTab === "hotels" && <HotelsandResort />}
      </div>
    </section>
  );
}
