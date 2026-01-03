import React from "react";

const cards = [
  { title: "", img: "/assets/images/test/test1.webp" },
  { title: "", img: "/assets/images/test/test2.jpeg" },
  { title: "", img: "/assets/images/test/test3.jpg" },
  { title: "", img: "/assets/images/test/test4.jpeg" },
];

export default function Testimonials() {
  return (
    <div className="bg-[#F2FF46] w-full">

      {/* HEADER */}
      <div className="text-center pt-12 md:pt-16 px-4">
        <p className="text-sm">Real Travelers, Real Stories</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-1">
          TESTIMONIALS
        </h1>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-10 px-4 pb-16">
        <div
          className="
            grid gap-6 justify-items-center
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {cards.map((card, i) => {
            // 🔥 STAGGERED TEXT POSITIONS (LIKE FIGMA)
            const textPosition =
              i % 2 === 0
                ? "top-1/2 -translate-y-1/2" // center vertically
                : "bottom-8";               // near bottom

            return (
              <div
                key={i}
                className="
                  relative overflow-hidden group
                  w-full
                  max-w-[360px]
                  h-[540px]
                  sm:h-[480px]
                  md:h-[520px]
                  rounded-t-[180px]
                  rounded-b-[40px]
                "
              >
                {/* IMAGE */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition duration-500" />

                {/* TEXT (STAGGERED) */}
                <div
                  className={`
                    absolute left-5 right-5
                    text-white
                    ${textPosition}
                  `}
                >
                  <h3 className="text-base sm:text-xl opacity-90 font-bold text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
