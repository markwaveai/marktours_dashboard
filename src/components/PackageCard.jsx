import { useRef } from "react";

const PackageCard = ({ image, name, tours, video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="min-w-[200px] flex flex-col items-center text-center cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* IMAGE / VIDEO AREA */}
      <div
        className="
          relative w-[200px] h-[240px]
          flex items-center justify-center pb-[7px]
          transition-transform duration-300 ease-out
          group-hover:scale-105
        "
      >
        {/* BACKGROUND OVAL */}
        <img
          src="/assets/images/Oval-img.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* FOREGROUND IMAGE / VIDEO */}
        <div className="w-[158px] h-[194px] overflow-hidden z-10 rounded-[40%] relative">
          {video ? (
            <video
              ref={videoRef}
              src={video}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster={image}
            />
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          )}

          {/* ✅ MOVED EXISTING TEXT HERE (CENTER OVERLAY) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30">
            <h4 className="text-sm font-bold uppercase tracking-wide">
              {name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
