import { useEffect, useState } from "react";
import NavBar from "./NavBar";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";


export default function Hero() {
  // 🎢 Configuration for each slide
  const slides = [
    {
      id: 1,
      image: hero1,
      label: "France",
      // 🍃 Nature: Wind, Leaves, Clouds (Only for Window 1)
      animations: ["leaves", "clouds", "ken-burns"]
    },
    {
      id: 2,
      image: hero2,
      label: "Spain",
      // ❄️ No extra animations
      animations: ["ken-burns"]
    },
    {
      id: 3,
      image: hero3,
      label: "USA",
      // 🕊️ No extra animations
      animations: ["ken-burns"]
    },
    {
      id: 4,
      image: hero4,
      label: "China",
      // ✨ No extra animations
      animations: ["ken-burns"]
    }
  ];

  const [current, setCurrent] = useState(0);

  // 🔁 Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[current];

  return (
    <section className="relative h-[90vh] overflow-hidden bg-black">

      {/* 🎥 Background Image */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100 animate-ken-burns" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* =========================================
             SCENE SPECIFIC ANIMATIONS
         ========================================= */}

      {/* 🍃 LEAVES (Slide 1 Only) */}
      {activeSlide.animations.includes("leaves") && (
        <>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
        </>
      )}

      {/* ❄️ SNOW (Slide 2 - Disabled per 'only window one') */}
      {/* If you want to enable, add "snow" to slide 2 animations */}
      {activeSlide.animations.includes("snow") && (
        <>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
        </>
      )}

      {/* 🕊️ BIRDS (Slide 3 - Disabled) */}
      {activeSlide.animations.includes("birds") && (
        <>
          <div className="bird"></div>
          <div className="bird"></div>
        </>
      )}

      {/* ✨ STARS (Slide 4 - Disabled) */}
      {activeSlide.animations.includes("stars") && (
        <>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </>
      )}

      {/* ☁️ CLOUDS (Shared) */}
      {activeSlide.animations.includes("clouds") && (
        <>
          <div className="cloud w-40 h-12 top-24 left-[-10%] opacity-50" style={{ animationDuration: '25s' }}></div>
          <div className="cloud w-56 h-16 top-12 left-[-20%] opacity-40" style={{ animationDuration: '35s', animationDelay: '5s' }}></div>
        </>
      )}

      {/* Overlay to darken background slightly for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Navbar */}
      <div className="relative z-30">
        <NavBar />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 text-white pointer-events-none">

        <p className="text-[#EEFB56] text-3xl font-bold tracking-widest pointer-events-auto">
          WHERE DO
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-2 pointer-events-auto">
          YOU WANT TO GO?
        </h1>

        <div className="mt-6 flex items-center gap-6 pointer-events-auto">
          <p className="mt-4 text-2xl font-bold transition-all duration-500">
            {activeSlide.label}
          </p>

          {/* Flags */}
          <div className="flex gap-4 mt-3">
            {/* Flags highlighted based on current slide */}
            <img src="https://flagcdn.com/w40/fr.png" alt="France" className={`transition-all duration-300 ${current === 0 ? "scale-125 ring-2 ring-white rounded-sm" : "opacity-70"}`} />
            <img src="https://flagcdn.com/w40/es.png" alt="Spain" className={`transition-all duration-300 ${current === 1 ? "scale-125 ring-2 ring-white rounded-sm" : "opacity-70"}`} />
            <img src="https://flagcdn.com/w40/us.png" alt="USA" className={`transition-all duration-300 ${current === 2 ? "scale-125 ring-2 ring-white rounded-sm" : "opacity-70"}`} />
            <img src="https://flagcdn.com/w40/cn.png" alt="China" className={`transition-all duration-300 ${current === 3 ? "scale-125 ring-2 ring-white rounded-sm" : "opacity-70"}`} />
          </div>
        </div>

        <p className="text-[#EEFB56] font-semibold mt-7 max-w-xl text-xl opacity-90 pointer-events-auto">
          Get the best prices on 2,000,000+ properties, worldwide
        </p>
      </div>

      {/* Travel image (unchanged position) */}
      <img
        src="./src/assets/herobott.png"
        alt="Travel"
        className="absolute bottom-0 left-1/3 -translate-x-1/2 z-20 w-[700px] h-[200px] pointer-events-none"
      />
    </section>
  );
}
