import { useRef, useState, useEffect } from "react";
import BookNowButton from "../BookNowButton";
import BookingModal from "../BookingModal";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const hotels = [
  {
    title: "Goa Beach Resort",
    nights: "5 Nights",
    image: "/assets/hotels/hotel1.png",
  },
  {
    title: "Manali Snowside Hotel",
    nights: "4 Days",
    image: "/assets/hotels/hotel2.png",
  },
  {
    title: "Kerala Ayurveda Resort",
    nights: "7 Nights",
    image: "/assets/hotels/hotel3.png",
  },
  {
    title: "Dubai Marina Hotel",
    nights: "5 Nights",
    image: "/assets/hotels/hotel4.png",
  },
  {
    title: "Andaman Eco-Resort",
    nights: "3 Nights",
    image: "/assets/hotels/hotel5.png",
  },
];

export default function HotelsandResort() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [liked, setLiked] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const toggleLike = (i) => {
    setLiked((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const updateScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (dir) => {
    const cardWidth = scrollRef.current.clientWidth / 4;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScroll();
    const el = scrollRef.current;
    el.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);
    return () => {
      el.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <div className="rounded-[28px] p-10 relative border bg-white">
      <h2 className="text-blue-700 font-semibold mb-6 ml-4">
        Hotels & Resorts Planning
      </h2>

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full shadow z-20
          ${
            canScrollLeft
              ? "bg-[#EDF957] text-black"
              : "bg-white text-gray-300 cursor-not-allowed"
          }`}
      >
        <ChevronLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full shadow z-20
          ${
            canScrollRight
              ? "bg-[#EDF957] text-black"
              : "bg-white text-gray-300 cursor-not-allowed"
          }`}
      >
        <ChevronRight size={22} />
      </button>

      {/* Cards */}
      <div ref={scrollRef} className="flex overflow-hidden">
        {hotels.map((h, i) => (
          <div key={i} className="w-1/4 px-3 flex-shrink-0">
            <div className="h-[320px] rounded-[22px] overflow-hidden relative">
              <img
                src={h.image}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              <span className="absolute top-3 -left-1 bg-[#EEFB56] text-xs font-semibold px-4 py-1 z-10">
                {h.nights}
              </span>

              <button
                onClick={() => toggleLike(i)}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow z-10"
              >
                <Heart
                  size={16}
                  className={
                    liked[i]
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500"
                  }
                />
              </button>

              {/* Centered title + stars */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
                <h3 className="font-semibold text-lg">
                  {h.title}
                </h3>
                <div className="flex gap-1 mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <svg
                        key={idx}
                        viewBox="0 0 24 24"
                        fill="#EEFB56"
                        className="w-4 h-4"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOOK NOW */}
      <div className="flex justify-center mt-10">
        <BookNowButton
          variant="yellow"
          onClick={() => setOpenModal(true)}
        />
      </div>

      {/* MODAL */}
      <BookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}
