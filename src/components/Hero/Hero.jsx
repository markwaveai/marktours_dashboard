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
  const slides = [
    hero1,
    hero2,
    hero3,
    hero4,
  ];

  const [current, setCurrent] = useState(0);

  // 🔁 Change slide + country every 4 seconds (REPEATED)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flags.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden bg-black">

      {/* 🎥 Background Images */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 animate-ken-burns" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Navbar */}
      <div className="relative z-30">
        <NavBar />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 text-white">

        <p className="text-[#EEFB56] text-3xl font-bold tracking-widest">
          WHERE DO
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          YOU WANT TO GO?
        </h1>

        {/* 🔁 Repeating Country + Moving Flags */}
        <div className="mt-6 flex items-center gap-8">

          {/* Country name (changes repeatedly) */}
          <div key={current} className="overflow-hidden h-10">
            <p className="text-2xl font-bold animate-country">
              {flags[current].label}
            </p>
          </div>

          {/* Infinite Moving Flags */}
          <div className="relative w-[260px] overflow-hidden">
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

        <p className="text-[#EEFB56] font-semibold mt-7 max-w-xl text-xl opacity-90">
          Get the best prices on 2,000,000+ properties, worldwide
        </p>
      </div>

      {/* Bottom Image */}
      <img
        src="./src/assets/herobott.png"
        alt="Travel"
        className="absolute bottom-0 left-1/3 -translate-x-1/2 z-20 w-[700px] h-[200px]"
      />
    </section>
  );
}
