import { useRef } from "react";
import PackageCard from "../PackageCard.jsx";

const HolidayPackages = () => {
  const intlRef = useRef(null);
  const nationalRef = useRef(null);

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="border border-gray-200 px-6 py-6 space-y-14 mx-[4%] rounded-xl shadow-sm">
      
      {/* INTERNATIONAL PACKAGES */}
      <div>
        <h3 className="text-indigo-500 text-md font-medium mb-6 pl-4">
          International Packages
        </h3>

        <div className="relative">
          <div
            ref={intlRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pr-12"
          >
            <PackageCard image="/assets/images/Maldives.png" name="Maldives" tours="18 Tours" />
            <PackageCard image="/assets/images/Seychellas.png" name="Seychellas" tours="18 Tours" />
            <PackageCard image="/assets/images/Malaysia.png" name="Malaysia" tours="18 Tours" />
            <PackageCard image="/assets/images/Thailand.png" name="Thailand" tours="18 Tours" />
            <PackageCard image="/assets/images/Singapore.png" name="Singapore" tours="18 Tours" />
            <PackageCard image="/assets/images/Maldives.png" name="Maldives" tours="18 Tours" />
          </div>

          {/* RIGHT ARROW (BORDER STYLE) */}
          <button
            onClick={() => scrollRight(intlRef)}
            className="
              absolute -right-4 top-[40%] -translate-y-1/2
              bg-lime-400 text-white
              w-9 h-9 rounded-full
              flex items-center justify-center
              shadow-lg z-30
            "
          >
            ❯
          </button>
        </div>
      </div>

      {/* NATIONAL PACKAGES */}
      <div>
        <h3 className="text-indigo-600 text-md font-medium mb-6 pl-4">
          National Packages
        </h3>

        <div className="relative">
          <div
            ref={nationalRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pr-12"
          >
            <PackageCard image="/assets/images/Gwalior.png" name="Gwalior" tours="18 Tours" />
            <PackageCard image="/assets/images/Rajasthan.png" name="Rajasthan Delights" tours="18 Tours" />
            <PackageCard image="/assets/images/Kerala.png" name="Kerala Summer Spl Tour" tours="18 Tours" />
            <PackageCard image="/assets/images/Chardham.png" name="Chardham" tours="18 Tours" />
            <PackageCard image="/assets/images/BestOfRajathan.png" name="Best Of Rajasthan" tours="18 Tours" />
            <PackageCard image="/assets/images/Gwalior.png" name="Best Of Rajasthan" tours="18 Tours" />
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scrollRight(nationalRef)}
            className="
              absolute -right-4 top-[40%] -translate-y-1/2
              bg-lime-400 text-white
              w-9 h-9 rounded-full
              flex items-center justify-center
              shadow-lg z-30
            "
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;
