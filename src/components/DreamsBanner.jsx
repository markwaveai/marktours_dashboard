import { useState } from "react";

import dream1 from "/assets/dreams-images/dream1.png";
import dream3 from "/assets/dreams-images/dreams3.png";
import dream4 from "/assets/dreams-images/dreams4.png";
import dream5 from "/assets/dreams-images/Clipart.png";
import dream6 from "/assets/dreams-images/dream6.png";

import BookNowButton from "./BookNowButton";     // ✅ adjust path if needed
import BookingModal from "./BookingModal";       // ✅ same modal used earlier

export default function DreamsBanner() {
  const [openModal, setOpenModal] = useState(false); // ✅ modal state

  return (
    <>
      <section className="w-full flex justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="relative w-full max-w-[94vw] rounded-2xl overflow-hidden bg-gradient-to-r from-[#240D62] via-[#491BC8] to-[#240D62] text-white">

          {/* 🔥 INNER SHADOW */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute left-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-r from-[#240D62] to-transparent" />
            <div className="absolute right-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-l from-[#240D62] to-transparent" />
          </div>

          {/* 🔥 MOVING MAIN HEADING */}
          <div className="overflow-hidden pt-6">
            <h1
              className="
                whitespace-nowrap
                font-black
                tracking-tight md:tracking-wide
                text-[2rem]
                md:text-[4rem]
                lg:text-[6rem]
                animate-main-move
              "
            >
              FROM DREAMS TO DESTINATION &nbsp; FROM DREAMS TO DESTINATION
            </h1>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative z-30 flex flex-col items-center text-center pb-[100px] px-4 sm:px-6">
            <p className="text-base sm:text-xl md:text-3xl">
              World Best Travel Agency Company
            </p>

            <p className="mt-2 text-xl sm:text-2xl md:text-3xl">
              Since 2023
            </p>

            {/* ✅ BOOK NOW BUTTON (REPLACED READ MORE) */}
            <BookNowButton
              variant="yellow"
              className="mt-3 sm:mt-5"
              onClick={() => setOpenModal(true)}
            />
          </div>

          {/* ================= DECORATIVE IMAGES ================= */}

          {/* Eiffel Tower */}
          <img
            src={dream1}
            alt="Eiffel Tower"
            className="absolute left-4 sm:left-10 bottom-28 w-14 sm:w-20"
          />

          {/* Pyramid */}
          <img
            src={dream3}
            alt="Pyramid"
            className="absolute left-24 sm:left-64 bottom-0 w-28 sm:w-40"
          />

          {/* Colosseum */}
          <img
            src={dream4}
            alt="Colosseum"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-40 sm:w-56"
          />

          {/* Statue */}
          <img
            src={dream6}
            alt="Statue"
            className="absolute right-6 sm:right-28 bottom-28 w-32 sm:w-44"
          />

          {/* Clipart */}
          <img
            src={dream5}
            alt="Clipart"
            className="absolute right-16 sm:right-60 bottom-5 w-28 sm:w-60"
          />
        </div>
      </section>

      {/* ✅ BOOKING MODAL (SAME FORM AS BEFORE) */}
      <BookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
