import { useEffect, useState } from "react";
import NavBar from "./NavBar";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const flags = [
  { label: "France", img: "https://flagcdn.com/w40/fr.png" },
  { label: "Spain", img: "https://flagcdn.com/w40/es.png" },
  { label: "USA", img: "https://flagcdn.com/w40/us.png" },
  { label: "China", img: "https://flagcdn.com/w40/cn.png" },
];

export default function Hero() {
  const slides = [hero1, hero2, hero3, hero4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flags.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND SLIDES */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 animate-ken-burns" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0" />

      {/* NAVBAR */}
      <NavBar />

      {/* HERO CONTENT */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 md:px-16 text-white text-center md:text-left">

        <p className="text-[#EEFB56] text-xl md:text-3xl font-bold tracking-widest">
          WHERE DO
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          YOU WANT TO GO?
        </h1>

        {/* COUNTRY + FLAGS */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">

          <div key={current} className="overflow-hidden h-10">
            <p className="text-xl md:text-2xl font-bold animate-country">
              {flags[current].label}
            </p>
          </div>

          <div className="relative w-[200px] sm:w-[240px] md:w-[260px] overflow-hidden">
            <div className="flex gap-6 animate-flags">
              {[...flags, ...flags].map((f, i) => (
                <img
                  key={i}
                  src={f.img}
                  alt={f.label}
                  className={`transition-transform duration-300 ${
                    i % flags.length === current
                      ? "scale-125 ring-2 ring-white rounded-sm"
                      : "opacity-70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-[#EEFB56] font-semibold mt-6 max-w-xl text-base md:text-xl opacity-90 mx-auto md:mx-0">
          Get the best prices on 2,000,000+ properties, worldwide
        </p>
      </div>

      {/* 🌍 RESPONSIVE TRAVEL IMAGE (LEFT OFFSET) */}
      <img
        src="./src/assets/herobott.png"
        alt="Travel"
        className="
          absolute bottom-0 z-20
          left-[4%]
          sm:left-[6%]
          md:left-[8%]
          w-[90%]
          sm:w-[80%]
          md:w-[700px]
          h-auto
          max-h-[140px]
          object-contain
          pointer-events-none
        "
      />
    </section>
  );
}
