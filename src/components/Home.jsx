import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Hero from "./Hero/Hero";
import SearchBar from "./Hero/SearchBar";
import UpcomingTours from "./Hero/UpcomingTours";
import HolidayPackages from "./UpcomingTrips/HolidayPackages";
import DreamsBanner from "./DreamsBanner";
import RecentlyBookedItineraries from "./RecentlyBookedItineraries/BookedItineraries";
import OffersSection from "./offers/OffersSection";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/tour-services");
    }
  }, []);

  return (
    <>
      <Hero />
      <SearchBar />

      <UpcomingTours />
      <HolidayPackages />

      <DreamsBanner />

            <RecentlyBookedItineraries />
            <OffersSection />

            <TourServices />
            <Testimonials />
            <Footer />
        </>
    );
}
