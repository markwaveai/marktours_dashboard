import DreamsBanner from "./DreamsBanner";
import Hero from "./Hero/Hero";
import SearchBar from "./Hero/SearchBar";
import HolidayPackages from "./UpcomingTrips/HolidayPackages";
import RecentlyBookedItineraries from "./RecentlyBookedItineraries/BookedItineraries";
import OffersSection from "./offers/OffersSection";
import PopularAdventures from "./adventures/PopularAdventures";
import Testimonials from "./Testimonials/Testimonials";
import UpcomingTours from "./Hero/UpcomingTours";
import Footer from "./Footer";
import TourServices from "./markservices/TourServices";

export default function Home() {
    return (
        <>
            <Hero />
            <SearchBar />

            <UpcomingTours />
            <HolidayPackages />

            <DreamsBanner />

            <RecentlyBookedItineraries />
            <OffersSection />
            <PopularAdventures />
            <TourServices />
            <Testimonials />
            <Footer />
        </>
    );
}
