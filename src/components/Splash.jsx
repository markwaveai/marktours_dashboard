import { useEffect, useState } from "react";
const marktours = "/assets/images/Flash_Screen.png";
const rotatingLogo = "/assets/images/rotating_logo.png";
const travelVideo = "/assets/Travel-Video.mp4";
const toursBg = "/assets/images/tours_bg.png";
const splashbrand = "/assets/images/splash_brand.png";

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



  // Close splash
  useEffect(() => {
    const t = setTimeout(() => onFinish(), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-10">
          <div className="flex items-center justify-center">
            <img src={splashbrand} alt="" className="absolute mb-2 z-40 h-[110px] w-[110px] sm:w-[200px] sm:h-[200px]"/>
            <img 
              src={rotatingLogo} 
              alt="Logo" 
              className="w-72 h-72 sm:w-[500px] sm:h-[500px] object-contain animate-[spin_40s_linear_infinite]"
            />
          </div>

        </div>
     </div>
  );
}
