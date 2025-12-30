import DreamsBanner from "./DreamsBanner";
import Hero from "./Hero/Hero";
import SearchBar from "./Hero/SearchBar";
import UpcomingTrips from "./UpcomingTrips/UpcomingTrips";
import HolidayPackages from "./UpcomingTrips/HolidayPackages";
import RecentlyBookedItineraries from "./RecentlyBookedItineraries/BookedItineraries";
import OffersSection from "./offers/OffersSection";
import PopularAdventures from "./adventures/PopularAdventures";
import Testimonials from "./Testimonials/Testimonials";
import UpcomingTours from "./Hero/UpcomingTours";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <SearchBar />
            <UpcomingTours />

            {/* Sections from markwave_tours_anjili */}
            <UpcomingTrips />
            <HolidayPackages />

            <DreamsBanner />

            <RecentlyBookedItineraries />
            <OffersSection />
            <PopularAdventures />
            <Testimonials />
            <Footer />
        </>
    );
}
