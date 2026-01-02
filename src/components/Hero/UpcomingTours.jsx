import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import BookNowButton from "../BookNowButton";
import BookingModal from "../BookingModal";

const tours = [
  {
    title: "Goa Long Weekend",
    offer: "Flat 25% Off",
    image: "/assets/images/adventures/adv1.png",
  },
  {
    title: "Manali Snow Escape",
    offer: "Flat 30% Off",
    image: "/assets/images/adventures/adv2.png",
  },
  {
    title: "Kerala Backwaters",
    offer: "Flat 30% Off",
    image: "/assets/images/adventures/adv3.png",
  },
  {
    title: "Dubai Shopping Festival",
    offer: "Flat 30% Off",
    image: "/assets/images/adventures/adv4.png",
  },
  {
    title: "Bali Island Escape",
    offer: "Flat 20% Off",
    image: "/assets/images/adventures/adv5.png",
  },
];

export default function UpcomingTours() {
  const [startIndex, setStartIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  /* ------------------ RESPONSIVE LOGIC ------------------ */
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      if (w >= 1024) setCardsToShow(4);
      else if (w >= 768) setCardsToShow(3);
      else if (w >= 480) setCardsToShow(2);
      else setCardsToShow(1);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex < tours.length - cardsToShow;

  /* ======================================================
     📱 MOBILE VIEW (ARROWS + CLICK → NEXT)
  ====================================================== */
  if (isMobile) {
    return (
      <>
        <section className="w-full px-4 py-8">
          <div
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Background Image */}
            <img
              src={tours[startIndex].image}
              alt={tours[startIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* LEFT ARROW */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (canGoLeft) setStartIndex(startIndex - 1);
              }}
              disabled={!canGoLeft}
              className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full transition-all ${canGoLeft ? "active:scale-95 opacity-100" : "opacity-30 cursor-not-allowed"
                }`}
            >
              <ChevronLeft size={28} />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (canGoRight) setStartIndex(startIndex + 1);
              }}
              disabled={!canGoRight}
              className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full transition-all ${canGoRight ? "active:scale-95 opacity-100" : "opacity-30 cursor-not-allowed"
                }`}
            >
              <ChevronRight size={28} />
            </button>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
              <h2 className="text-2xl font-bold leading-snug">
                {tours[startIndex].title}
              </h2>

              <p className="text-lg font-semibold mt-2">
                {tours[startIndex].offer}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModal(true);
                }}
                className="mt-6 bg-[#EEFB56] text-black px-10 py-3 rounded-full font-bold text-base shadow-lg active:scale-95 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </section>

        <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
      </>
    );
  }

  /* ======================================================
     💻 TABLET + DESKTOP VIEW (UNCHANGED)
  ====================================================== */
  return (
    <>
      <section className="w-full px-4 md:px-10 2xl:px-24 py-10 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-purple-600">
              Next Adventures
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Upcoming Tours
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <ChevronLeft
              onClick={() => canGoLeft && setStartIndex((i) => i - 1)}
              className={`text-2xl transition ${canGoLeft
                ? "text-blue-600 cursor-pointer hover:scale-125"
                : "text-black/20 cursor-not-allowed"
                }`}
            />
            <ChevronRight
              onClick={() => canGoRight && setStartIndex((i) => i + 1)}
              className={`text-2xl transition ${canGoRight
                ? "text-blue-600 cursor-pointer hover:scale-125"
                : "text-black/20 cursor-not-allowed"
                }`}
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            animate={{
              x: `-${startIndex * (100 / cardsToShow)}%`,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex"
          >
            {tours.map((tour, i) => {
              const isFlipped = flippedIndex === i;

              return (
                <div
                  key={i}
                  style={{
                    flex: `0 0 ${100 / cardsToShow}%`,
                    perspective: "1000px",
                  }}
                  className="px-3 h-[300px]"
                  onMouseEnter={() => setFlippedIndex(i)}
                  onMouseLeave={() => setFlippedIndex(null)}
                  onClick={() => setFlippedIndex(isFlipped ? null : i)}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 p-5 text-white">
                        <h3 className="text-xl font-bold">
                          {tour.title}
                        </h3>
                        <p className="text-sm mt-1">
                          {tour.offer}
                        </p>
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-indigo-950 text-white flex flex-col justify-center items-center text-center px-6"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2">
                        {tour.title}
                      </h3>
                      <p className="text-yellow-400 mb-4">
                        {tour.offer}
                      </p>
                      <BookNowButton
                        variant="yellow"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenModal(true);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}