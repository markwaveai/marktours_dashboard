import { Outlet } from "react-router-dom";
import TourHeader from "./TourHeader";

export default function TourServicesLayout() {
  return (
    <section className="w-full max-w-7xl mx-auto px-0 md:px-10 py-8 md:py-16">
      <TourHeader />
      <Outlet />
    </section>
  );
}
