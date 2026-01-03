import { useState } from "react";
import TourHeader from "./TourHeader";
import TourCards from "./TourCards";
import AirTicketing from "./AirTicketing";
import Visas from "./Visas";
import CruiseHolidays from "./CruiseHolidays";
import HotelsandResort from "./HotelsandResort";

export default function TourServicesLayout() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <section className="w-full max-w-7xl mx-auto px-0 md:px-10 py-8 md:py-16">
      <TourHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-4">
        {activeTab === "packages" && <TourCards />}
        {activeTab === "air" && <AirTicketing />}
        {activeTab === "visa" && <Visas />}
        {activeTab === "cruise" && <CruiseHolidays />}
        {activeTab === "hotels" && <HotelsandResort />}
      </div>
    </section>
  );
}
