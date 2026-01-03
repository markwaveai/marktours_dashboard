import { useEffect, useRef, useState } from "react";

const itineraries = [
  {
    title: "Couple Holiday: 3 Nights",
    subtitle: "In Phuket",
    image: "/assets/itineraries-images/it8.png",
    destination: "Thailand",
    priceRange: "Under ₹50K",
  },
  {
    title: "Solo Retreat: 5 Nights",
    subtitle: "Krabi And Phuket",
    image: "/assets/itineraries-images/it7.png",
    destination: "Thailand",
    priceRange: "₹50K to ₹1.5L",
  },
  {
    title: "Couple Holiday: 3 Nights",
    subtitle: "In Phuket",
    image: "/assets/itineraries-images/it6.png",
    destination: "Thailand",
    priceRange: "Under ₹50K",
  },
  {
    title: "Solo Retreat: 5 Nights",
    subtitle: "Krabi And Phuket",
    image: "/assets/itineraries-images/it5.png",
    destination: "Thailand",
    priceRange: "₹50K to ₹1.5L",
  },
  {
    title: "Family Fun: 4 Nights",
    subtitle: "Bali Adventure",
    image: "/assets/itineraries-images/it8.png",
    destination: "Indonesia",
    priceRange: "₹50K to ₹1.5L",
  },
  {
    title: "Luxury Escape: 5 Nights",
    subtitle: "Maldives",
    image: "/assets/itineraries-images/it7.png",
    destination: "Maldives",
    priceRange: "Luxury",
  },
  {
    title: "City Break: 3 Nights",
    subtitle: "Singapore",
    image: "/assets/itineraries-images/it6.png",
    destination: "Singapore",
    priceRange: "₹50K to ₹1.5L",
  },
];

export default function RecentlyBookedItineraries() {
  const scrollRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Filter States
  const [activeDestination, setActiveDestination] = useState("All Destinations");
  const [activePriceRange, setActivePriceRange] = useState(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Derived State: Filtered Itineraries
  const filteredItineraries = itineraries.filter((item) => {
    const matchDest =
      activeDestination === "All Destinations" ||
      item.destination === activeDestination;
    const matchPrice =
      !activePriceRange || item.priceRange === activePriceRange;
    return matchDest && matchPrice;
  });

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    // Tolerance of 5px
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    // Re-check scroll when filters change because content width changes
  }, [filteredItineraries]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".trip-card");
    // If no cards are visible due to filters, return
    if (!card) return;

    const gap = 24;
    const width = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  // Toggle Price Range
  const handlePriceFilter = (range) => {
    if (activePriceRange === range) {
      setActivePriceRange(null); // Toggle off if already selected
    } else {
      setActivePriceRange(range);
    }
  };

  const destinations = ["All Destinations", "Thailand", "Indonesia", "Maldives", "Singapore"];

  return (
    <section className="w-full bg-[#EEFB56] py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-800">Modern & Beautiful</p>
          <h2 className="text-3xl font-bold text-black">
            RECENTLY BOOKED ITINERARIES
          </h2>
        </div>

        {/* FILTER BAR */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap font-medium">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-5 py-1.5 rounded-full text-sm text-black border border-black bg-white/50 hover:bg-white transition-colors"
            >
              {activeDestination} ▼
            </button>

            {open && (
              <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg w-44 z-30 overflow-hidden">
                {destinations.map((item) => (
                  <div
                    key={item}
                    className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${activeDestination === item ? "font-bold bg-gray-50" : ""
                      }`}
                    onClick={() => {
                      setActiveDestination(item);
                      setOpen(false);
                    }}
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
                onClick={() => handlePriceFilter(item)}
                className={`px-5 py-1.5 rounded-full text-sm border border-transparent transition-colors
                  ${activePriceRange === item
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                  }
                `}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* CAROUSEL */}
        <div className="relative group">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all
              ${canScrollLeft
                ? "bg-black text-white hover:scale-110"
                : "bg-white/50 text-gray-400 cursor-not-allowed hidden"
              }
            `}
          >
            ❮
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
          >
            {filteredItineraries.length > 0 ? (
              filteredItineraries.map((item, index) => (
                <div
                  key={index}
                  className="
                    trip-card
                    flex-shrink-0
                    w-[85%]
                    sm:w-[45%]
                    lg:w-[30%]
                    h-[230px]
                    rounded-2xl
                    overflow-hidden
                    relative
                    shadow-sm
                    hover:shadow-md
                    transition-shadow
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 flex items-end">
                    <div
                      className={`w-full text-center py-3 px-4
                        ${index % 2 === 0
                          ? "bg-indigo-600 text-white"
                          : "bg-[#D4E232] text-black"
                        }
                      `}
                    >
                      <h3 className="font-semibold text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-10 text-gray-500 italic">
                No itineraries found for these filters.
              </div>
            )}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all
              ${canScrollRight
                ? "bg-black text-white hover:scale-110"
                : "bg-white/50 text-gray-400 cursor-not-allowed hidden"
              }
            `}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
