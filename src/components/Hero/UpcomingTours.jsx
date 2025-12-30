import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import BookNowButton from "../BookNowButton";
import BookingModal from "../BookingModal";

const tours = [
  { title: "Goa Long Weekend", offer: "Flat 25% Off", image: "/assets/images/adventures/adv1.png" },
  { title: "Manali Snow Escape", offer: "Flat 30% Off", image: "/assets/images/adventures/adv2.png" },
  { title: "Kerala Backwaters", offer: "Flat 30% Off", image: "/assets/images/adventures/adv3.png" },
  { title: "Dubai Shopping", offer: "Flat 30% Off", image: "/assets/images/adventures/adv4.png" },
  { title: "Bali Island Escape", offer: "Flat 20% Off", image: "/assets/images/adventures/adv5.png" },
];

const GAP = 24;

export default function UpcomingTours() {
  const [startIndex, setStartIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) setCardsToShow(4);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex < tours.length - cardsToShow;

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
              className={`text-2xl transition duration-300 ${canGoLeft ? "text-blue-600 cursor-pointer hover:scale-125" : "text-black/20 cursor-not-allowed"
                }`}
            />
            <ChevronRight
              onClick={() => canGoRight && setStartIndex((i) => i + 1)}
              className={`text-2xl transition duration-300 ${canGoRight ? "text-blue-600 cursor-pointer hover:scale-125" : "text-black/20 cursor-not-allowed"
                }`}
            />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden mx-[-12px]">
          <motion.div
            animate={{
              x: -(startIndex * (100 / cardsToShow)) + "%",
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
                    perspective: "1000px"
                  }}
                  className="px-3 h-[260px] md:h-[300px]"
                  onMouseEnter={() => setFlippedIndex(i)}
                  onMouseLeave={() => setFlippedIndex(null)}
                  onClick={() => setFlippedIndex(isFlipped ? null : i)}
                >
                  {/* Flip Wrapper */}
                  <div
                    className="relative w-full h-full transition-transform duration-700 cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* FRONT SIDE */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="text-xl font-bold leading-tight">
                          {tour.title}
                        </h3>
                        <p className="text-sm font-medium opacity-90 mt-1">
                          {tour.offer}
                        </p>
                      </div>
                    </div>

                    {/* BACK SIDE */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-indigo-950 text-white flex flex-col justify-center items-center text-center px-6 shadow-xl"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2">
                        {tour.title}
                      </h3>
                      <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4" />
                      <p className="text-sm font-semibold text-yellow-400 mb-3">
                        {tour.offer}
                      </p>
                      <p className="text-xs text-gray-300 mb-6 leading-relaxed line-clamp-3">
                        Experience the best of {tour.title} with our curated adventure packages. Perfectly planned for your next getaway.
                      </p>

                      <BookNowButton
                        variant="yellow"
                        className="px-8 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-yellow-300 transition-colors"
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

      {/* Booking Modal */}
      <BookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
