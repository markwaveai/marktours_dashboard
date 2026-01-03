import { useRef } from "react";

const PackageCard = ({ image, name, tours, video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Video play interrupted", err));
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

      {/* IMAGE AREA */}
      <div
        className="
          relative w-[200px] h-[240px]
          flex items-center justify-center pb-[7px]
          transition-transform duration-300 ease-out
          group-hover:scale-105
        "
      >
        {/* BACKGROUND OVAL PNG */}
        <img
          src="/assets/images/Oval-img.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* FOREGROUND IMAGE/VIDEO */}
        <div className="w-[158px] h-[194px] overflow-hidden z-10 rounded-[45%]">
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
        </div>
      </div>

      {/* TEXT */}
      <h4 className="mt-3 text-sm font-bold text-[#6A2CF3] uppercase tracking-wide">
        {name}
      </h4>
      {tours && <p className="text-xs font-bold text-black mt-1">{tours}</p>}
    </div>
  );
};

export default PackageCard;
