import { useEffect, useRef, useState } from "react";

const itineraries = [
  {
    title: "Couple Holiday: 3 Nights",
    subtitle: "In Phuket",
    image: "/assets/itineraries-images/it8.png",
  },
  {
    title: "Solo Retreat: 5 Nights",
    subtitle: "Krabi And Phuket",
    image: "/assets/itineraries-images/it7.png",
  },
  {
    title: "Couple Holiday: 3 Nights",
    subtitle: "In Phuket",
    image: "/assets/itineraries-images/it6.png",
  },
  {
    title: "Solo Retreat: 5 Nights",
    subtitle: "Krabi And Phuket",
    image: "/assets/itineraries-images/it5.png",
  },
];

export default function RecentlyBookedItineraries() {
  const scrollRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".trip-card");
    if (!card) return;

    const gap = 24;
    const width = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

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
              className="flex items-center gap-2 px-5 py-1.5 rounded-full text-sm  text-black border border-black"
            >
              All Destinations ▼
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
                className="px-5 py-1.5 rounded-full text-sm bg-white text-black"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* CAROUSEL */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full shadow-md flex items-center justify-center
              ${canScrollLeft ? "bg-black text-white" : "bg-white text-black"}
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
                  sm:w-[45%]
                  lg:w-[30%]
                  h-[230px]
                  rounded-2xl
                  overflow-hidden
                  relative
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
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full shadow-md flex items-center justify-center
              ${canScrollRight ? "bg-black text-white" : "bg-white text-black"}
            `}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
