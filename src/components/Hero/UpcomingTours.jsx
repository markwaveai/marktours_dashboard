import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import BookNowButton from "../BookNowButton";
import BookingModal from "../BookingModal";

const tours = [
  {
    title: "Goa Long Weekend",

    image: "/assets/images/adventures/goa1.jpg",
    backImage: "/assets/images/adventures/goa2.avif",
  },
  {
    title: "Manali Snow Escape",

    image: "/assets/images/adventures/manali1.jpg",
    backImage: "/assets/images/adventures/manali2.jpg",
  },
  {
    title: "Kerala Backwaters",

    image: "/assets/images/adventures/kerala1.jpg",
    backImage: "/assets/images/adventures/kerala2.jpg",
  },
  {
    title: "Dubai Shopping Festival",

    image: "/assets/images/adventures/dubai1.jpg",
    backImage: "/assets/images/adventures/dubai2.jpg",
  },
  {
    title: "Bali Island Escape",

    image: "/assets/images/adventures/bali1.jpg",
    backImage: "/assets/images/adventures/bali2.jpg",
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

  // Clamp startIndex when cardsToShow changes to prevent empty spaces
  useEffect(() => {
    const maxIndex = Math.max(0, tours.length - cardsToShow);
    if (startIndex > maxIndex) {
      setStartIndex(maxIndex);
    }
  }, [cardsToShow]);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex < tours.length - cardsToShow;

  /* ======================================================
     📱 MOBILE VIEW (ARROWS + CLICK → NEXT)
  ====================================================== */

  /* ======================================================
     💻 TABLET + DESKTOP VIEW (UNCHANGED)
  ====================================================== */
  return (
    <>
      <section className="w-full px-4 md:px-10 2xl:px-24 py-4 md:py-10 overflow-hidden">
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
                  className="px-3 h-[360px] md:h-[300px]"
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
                      className={`absolute inset-0 rounded-2xl ${tour.backImage ? "bg-black" : "bg-indigo-950"
                        } text-white flex flex-col justify-center items-center text-center px-6 overflow-hidden`}
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {tour.backImage && (
                        <>
                          <img
                            src={tour.backImage}
                            alt={tour.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          {/* Overlay to ensure text readability */}
                          <div className="absolute inset-0 bg-black/50" />
                        </>
                      )}

                      <div className="relative z-10 flex flex-col items-center">
                        <h3 className="text-xl font-bold mb-2">
                          {tour.title}
                        </h3>

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