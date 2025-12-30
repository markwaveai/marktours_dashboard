import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookNowButton from "../BookNowButton";
import BookingModal from "../BookingModal"; // 👈 ADD THIS

const tours = [
  {
    title: "Goa Long Weekend-",
    offer: "Flat 25% Off",
    image: "/assets/images/adventures/adv1.png",
  },
  {
    title: "Manali Snow Escape-",
    offer: "Flat 30% Off",
    image: "/assets/images/adventures/adv2.png",
  },
  {
    title: "Kerala Backwaters-",
    offer: "Flat 30% Off",
    image: "/assets/images/adventures/adv3.png",
  },
  {
    title: "Dubai Shopping-",
    offer: "Flat 30% Off",
    image: "/assets/images/adventures/adv4.png",
  },
  {
    title: "Bali Island Escape-",
    offer: "Flat 20% Off",
    image: "/assets/images/adventures/adv5.png",
  },
];

const VISIBLE_CARDS = 4;

export default function UpcomingTours() {
  const [startIndex, setStartIndex] = useState(0);

  // ✅ MODAL STATE
  const [openModal, setOpenModal] = useState(false);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + VISIBLE_CARDS < tours.length;

  const visibleTours = tours.slice(
    startIndex,
    startIndex + VISIBLE_CARDS
  );

  return (
    <>
      <section className="w-full px-4 md:px-10 2xl:px-24 py-10">
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
              onClick={() => canGoLeft && setStartIndex(startIndex - 1)}
              className={`text-2xl transition
                ${
                  canGoLeft
                    ? "text-blue-600 cursor-pointer"
                    : "text-black cursor-not-allowed"
                }
              `}
            />
            <ChevronRight
              onClick={() => canGoRight && setStartIndex(startIndex + 1)}
              className={`text-2xl transition
                ${
                  canGoRight
                    ? "text-blue-600 cursor-pointer"
                    : "text-black cursor-not-allowed"
                }
              `}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleTours.map((tour, i) => (
            <div
              key={i}
              className="
                h-[180px]
                md:h-[220px]
                2xl:h-[260px]
                rounded-xl
                overflow-hidden
                relative
                group
                shadow-lg
              "
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h3 className="text-lg md:text-xl font-bold">
                  {tour.title}
                </h3>
                <p className="text-lg font-bold mt-1">
                  {tour.offer}
                </p>

                {/* ✅ OPEN MODAL ON CLICK */}
                <BookNowButton
                  variant="yellow"
                  className="mt-3 p-2 rounded-full"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ BOOKING MODAL */}
      <BookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
