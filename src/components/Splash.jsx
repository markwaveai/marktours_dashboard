import { useEffect, useState } from "react";

const leftImages = [
  "/assets/splash-images/splash1.jpg",
  "/assets/splash-images/splash2.jpg",
  "/assets/splash-images/splash3.jpg",
];

const rightImages = [
  "/assets/splash-images/splash4.jpg",
  "/assets/splash-images/splash5.jpg",
  "/assets/splash-images/splash6.jpg",
];

export default function Splash({ onFinish }) {
  const [pairIndex, setPairIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  // Show left+right images together (fast)
  useEffect(() => {
    const interval = setInterval(() => {
      setPairIndex((prev) => {
        if (prev < 3) return prev + 1;
        return prev;
      });
    }, 350);
    return () => clearInterval(interval);
  }, []);

  // Pop-up text
  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // Close splash
  useEffect(() => {
    const t = setTimeout(() => onFinish(), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/assets/splash-images/bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">

        {/* LEFT */}
        <img src={leftImages[0]} className={`splashCard slow-float top-[12%] left-[10%] ${pairIndex > 0 && "show"}`} />
        <img src={leftImages[1]} className={`splashCard slow-float top-[40%] left-[5%] ${pairIndex > 1 && "show"}`} />
        <img src={leftImages[2]} className={`splashCard slow-float bottom-[12%] left-[18%] ${pairIndex > 2 && "show"}`} />

        {/* RIGHT */}
        <img src={rightImages[0]} className={`splashCard slow-float top-[12%] right-[10%] ${pairIndex > 0 && "show"}`} />
        <img src={rightImages[1]} className={`splashCard slow-float top-[40%] right-[5%] ${pairIndex > 1 && "show"}`} />
        <img src={rightImages[2]} className={`splashCard slow-float bottom-[12%] right-[18%] ${pairIndex > 2 && "show"}`} />

        {/* Brand */}
        <div
          className={`relative z-10 text-center transition-all duration-700 ${
            showText ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <h1 className="text-6xl font-extrabold text-white tracking-wide drop-shadow-xl font-brand">
            Mark Tours
          </h1>
          <p className="mt-3 text-xl text-gray-200">
            From Dreams to Destination
          </p>
        </div>

      </div>
    </div>
  );
}
