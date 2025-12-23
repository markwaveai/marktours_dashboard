import DreamsBanner from "./DreamsBanner";
import Hero from "./Hero/Hero";
import SearchBar from "./Hero/SearchBar";
import UpcomingTrips from "./UpcomingTrips/UpcomingTrips";
import HolidayPackages from "./UpcomingTrips/HolidayPackages";
import RecentlyBookedItineraries from "./RecentlyBookedItineraries/BookedItineraries";

export default function Home() {
    return (
        <>
            <Hero />
            <SearchBar />

            {/* Sections from markwave_tours_anjili */}
            <UpcomingTrips />
            <HolidayPackages />

            <DreamsBanner />

            <RecentlyBookedItineraries />
        </>
    );
}
