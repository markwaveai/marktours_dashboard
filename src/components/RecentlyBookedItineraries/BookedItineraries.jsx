import it1 from "/assets/itineraries-images/it1.png";
import it2 from "/assets/itineraries-images/it2.png";
import it3 from "/assets/itineraries-images/it3.png";
import it4 from "/assets/itineraries-images/it4.png";
import { useEffect, useRef, useState } from "react";
const itineraries = [
    {
        title: "Couple Holiday: 3 Nights In Phuket",
        subtitle: "Phuket (3N)",
        image: "/assets/images/Background1.png",
    },
    {
        title: "Solo Retreat: 5 Nights in Krabi And Phuket",
        subtitle: "Phuket (3N)",
        image: "/assets/images/Background2.png",
    },
    {
        title: "Family Getaway: 7 Nights In Halong Bay",
        subtitle: "Hanoi (1N) +3 more",
        image: "/assets/images/Background3.png",
    },
    {
        title: "Nature Escape",
        subtitle: "Vietnam Hills",
        image: "/assets/images/Background4.png",
    },
];

const RecentlyBookedItineraries = () => {
    const scrollRef = useRef(null);
    const [open, setOpen] = useState(false);

    const bannerImages = [it1, it2, it3, it4];
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scroll = (dir) => {
        scrollRef.current.scrollBy({
            left: dir === "left" ? -340 : 340,
            behavior: "smooth",
        });
    };

    return (
        /* FULL WIDTH BACKGROUND */
        <section
            className="w-full pt-16 bg-cover bg-center bg-no-repeat mt-8"
            style={{
                backgroundImage: "url('/assets/images/Background.png')",
            }}
        >
            {/* CENTERED CONTENT */}
            <div className="max-w-8xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-8">
                    <p className="text-sm text-white/80 mb-1">
                        Modern & Beautiful
                    </p>
                    <h2 className="text-3xl font-bold text-yellow-300">
                        RECENTLY BOOKED ITINERARIES
                    </h2>
                </div>

                {/* FILTER BAR */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap font-medium relative">

                    {/* DROPDOWN PILL */}
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="
                flex items-center gap-2
                px-5 py-1.5 rounded-full
                text-sm bg-indigo-700 text-white
                hover:bg-indigo-800 transition
              "
                        >
                            All Destinations
                            <svg
                                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* DROPDOWN MENU */}
                        {open && (
                            <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg w-44 z-30">
                                {["Thailand", "Vietnam", "Malaysia", "Singapore"].map(
                                    (item) => (
                                        <div
                                            key={item}
                                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setOpen(false)}
                                        >
                                            {item}
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    {/* NORMAL FILTER PILLS */}
                    {[
                        "Under ₹50K",
                        "₹50K to ₹1.5L",
                        "₹1.5L to ₹2.5L",
                        "Luxury",
                    ].map((item) => (
                        <button
                            key={item}
                            className="
                px-5 py-1.5 rounded-full
                text-sm bg-white/95 text-gray-800
                hover:bg-white transition
              "
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* CAROUSEL */}
                <div className="relative">

                    {/* LEFT ARROW */}
                    <button
                        onClick={() => scroll("left")}
                        className="
    absolute left-9 top-[48%] -translate-y-1/2
    bg-white 
    w-9 h-9 rounded-full
    flex items-center justify-center
    shadow-lg z-30
    font-bold
  "
                    >
                        ❮
                    </button>


                    {/* SCROLL AREA */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide px-14"
                    >
                        {itineraries.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[320px] h-[210px] rounded-2xl overflow-hidden relative"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/25 flex items-center px-5">
                                    <div>
                                        <h3 className="text-yellow-300 font-semibold text-xl leading-snug text-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-white text-sm mt-1 text-center">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={() => scroll("right")}
                        className="
    absolute -right-4 top-[48%] -translate-y-1/2
    bg-lime-400 text-white
    w-9 h-9 rounded-full
    flex items-center justify-center
    shadow-lg z-30
    font-bold
  "
                    >
                        ❯
                    </button>

                </div>
            </div>
            <div className="w-full my-20 relative  overflow-hidden group ">
                <img
                    src={bannerImages[currentBannerIndex]}
                    alt="Plan your dream trip"
                    className="w-full h-auto object-cover transition-opacity duration-1000 ease-in-out"
                    key={currentBannerIndex}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/70 py-6 flex justify-center items-center gap-2 text-white text-2xl font-semibold ">
                    <span>The Easiest Way to</span>
                    <span className="text-yellow-400">Plan Your Dream Trip</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 border border-white rounded-full p-1 ml-2 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default RecentlyBookedItineraries;
