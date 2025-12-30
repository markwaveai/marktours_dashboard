import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPlane,
  faStar,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

import singapore from "/assets/packages/singpoor.png";
import malaysia from "/assets/packages/malasiyaaa.png";
import bali from "/assets/packages/bali.png";
import thailand from "/assets/packages/thailand.png";
import srilanka from "/assets/packages/srilanka.png";
import dubai from "/assets/packages/dubhai.png";

import BookNowButton from "../BookNowButton";   // ✅ adjust path if needed
import BookingModal from "../BookingModal";     // ✅ same modal reused

const packages = [
  { name: "Singapore", image: singapore },
  { name: "Malaysia", image: malaysia },
  { name: "Bali", image: bali },
  { name: "Thailand", image: thailand },
  { name: "Srilanka", image: srilanka },
  { name: "Dubai", image: dubai },
];

export default function TourCards() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="relative bg-white rounded-[32px] px-6 md:px-10 py-12 border overflow-hidden">
        
        {/* CARDS */}
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {packages.map((item, i) => (
              <div
                key={i}
                className="relative h-[340px] rounded-[28px] overflow-hidden shadow-xl group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full  group-hover:scale-110 transition duration-700"
                />
             {/* overlay */}
                <div className="absolute inset-0 bg-black/2" />

                {/* TITLE */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {item.name}
                  </h3>
                </div>

                {/* ICON INFO */}
                <div className="absolute bottom-6 left-0 right-0 px-4">
                  <div className="flex justify-between text-white text-[11px]">
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon icon={faClock} />
                      <span>2N / 3D</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon icon={faPlane} />
                      <span>Flight</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon icon={faStar} />
                      <span>Hotels</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon icon={faCar} />
                      <span>Transport</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ BOOK NOW BUTTON (REPLACED) */}
        <div className="flex justify-center mt-12">
          <BookNowButton
            variant="yellow"
            className="px-12 py-3 text-base rounded-full"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>

      {/* ✅ BOOKING MODAL */}
      <BookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
