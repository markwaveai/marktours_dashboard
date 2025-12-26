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

export default function RecentlyBookedItineraries() {
  const scrollRef = useRef(null);
  const [open, setOpen] = useState(false);

  /* 🔥 ARROW STATES */
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* BANNER */
  const bannerImages = [it1, it2, it3, it4];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* 🔥 CHECK SCROLL POSITION */
  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  /* SCROLL HANDLER */
  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".trip-card");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full pt-16 bg-cover bg-center bg-no-repeat mt-8"
      style={{ backgroundImage: "url('/assets/images/Background.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-3">
          <p className="text-md text-white">Modern & Beautiful</p>
          <h2 className="text-3xl font-bold text-[#EDF957]">
            RECENTLY BOOKED ITINERARIES
          </h2>
        </div>

        {/* FILTER BAR */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap font-medium relative">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-5 py-1.5 rounded-full text-sm bg-indigo-700 text-white border"
            >
              All Destinations
              <svg
                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg w-44 z-30">
                {["Thailand", "Vietnam", "Malaysia", "Singapore"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {["Under ₹50K", "₹50K to ₹1.5L", "₹1.5L to ₹2.5L", "Luxury"].map(
            (item) => (
              <button
                key={item}
                className="px-5 py-1.5 rounded-full text-sm bg-white/95 text-gray-800"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* ====== CAROUSEL ====== */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className={`
              absolute -left-5 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full shadow-lg
              flex items-center justify-center
              ${canScrollLeft ? "bg-lime-400 text-white" : "bg-white text-black"}
            `}
          >
            ❮
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {itineraries.map((item, index) => (
              <div
                key={index}
                className="
                  trip-card
                  flex-shrink-0
                  w-full
                  sm:w-[calc(50%-12px)]
                  lg:w-[calc(33.333%-16px)]
                  h-[210px]
                  rounded-2xl
                  overflow-hidden
                  relative
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />

                <div className="absolute inset-0 bg-black/25 flex items-center px-5">
                  <div className="w-full text-center">
                    <h3 className="text-[#EDF957] font-semibold text-xl leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white text-md mt-1">
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
            className={`
              absolute -right-5 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full shadow-lg
              flex items-center justify-center
              ${canScrollRight ? "bg-lime-400 text-white" : "bg-white text-black"}
            `}
          >
            ❯
          </button>
        </div>
      </div>

      {/* ====== BANNER ====== */}
      <div className="w-full mt-20 relative overflow-hidden aspect-[16/6]">
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Plan your dream trip"
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-1000 ease-in-out
              ${index === currentBannerIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        <div className="absolute bottom-0 left-0 w-full bg-black/30 py-6 z-10">
          <div className="flex justify-center items-center gap-3 text-white text-2xl">
            <span>The Easiest Way to</span>
            <span className="text-[#EEFB56] font-bold">
              Plan Your Dream Trip
            </span>
            <span>
              <img
                src="/assets/images/arrow.png"
                alt="ARROW"
                width={40}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
