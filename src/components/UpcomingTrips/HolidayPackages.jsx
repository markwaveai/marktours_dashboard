import { useRef, useState, useEffect } from "react";
import PackageCard from "../PackageCard.jsx";
import BookNowButton from "../BookNowButton.jsx";

const AutoScroller = ({ children }) => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!paused) {
        el.scrollLeft += 1;
        // Infinite loop: Reset to 0 when scrolled halfway (assuming content is duplicated)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto scrollbar-hide flex gap-6 py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {children}
    </div>
  );
};

const internationalPackages = [
  { video: "/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/bali.mp4", name: "Bali" },
  { video: "/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/Malaysia.mp4", name: "Malaysia" },
  { video: "/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/Thailand.mp4", name: "Thailand" },
  { video: "assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/dubai.mp4", name: "Dubai" },
  { video: "/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/Phuket.mp4", name: "Phuket" },
  { video: "assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/Srilanka.mp4", name: "Srilanka" },
  { video: "/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/vietnam.mp4", name: "Vietnam" },
];

const domesticPackages = [
  { video: "/assets/DOMASTIC_VIDEOS/Kerala.mp4", name: "Kerala Summer Spl Tour" },
  { video: "/assets/DOMASTIC_VIDEOS/Rajasthan.mp4", name: "Rajasthan Delights" },
  { video: "/assets/DOMASTIC_VIDEOS/gate.mp4", name: "Gate Way Of India" },
  { video: "/assets/DOMASTIC_VIDEOS/Andhaman.mp4", name: "Andhaman" },
  { video: "/assets/DOMASTIC_VIDEOS/chardham.mp4", name: "Chardham" },
  { video: "/assets/DOMASTIC_VIDEOS/darjeeling.mp4", name: "Darjeeling" },
  { video: "/assets/DOMASTIC_VIDEOS/Goa.mp4", name: "Goa" },
];

const HolidayPackages = () => {
  return (
    <div className="w-full px-4 md:px-10 2xl:px-24 space-y-10 py-10">

      {/* INTERNATIONAL */}
      <div>
        <div className="flex items-center justify-between pb-5 px-2">
          <h3 className="text-xl font-bold">International Destinations</h3>
          <BookNowButton
            variant="purple"
            onClick={() => window.dispatchEvent(new Event("open-booking"))}
          />
        </div>

        <AutoScroller>
          {[...internationalPackages, ...internationalPackages].map((pkg, index) => (
            <PackageCard
              key={index}
              video={pkg.video}
              name={pkg.name}
            />
          ))}
        </AutoScroller>
      </div>

      {/* DOMESTIC */}
      <div>
        <div className="flex items-center justify-between pb-5 px-2">
          <h3 className="text-xl font-bold">Domestic Destinations</h3>
          <BookNowButton
            variant="purple"
            onClick={() => window.dispatchEvent(new Event("open-booking"))}
          />
        </div>

        <AutoScroller>
          {/* First Set and Duplicate Set generated via loop */}
          {[...domesticPackages, ...domesticPackages].map((pkg, index) => (
            <PackageCard
              key={index}
              video={pkg.video}
              name={pkg.name}
            // Add other props if they exist in the array, currently domestic ones only have video and name
            />
          ))}
        </AutoScroller>
      </div>

    </div>
  );
};

export default HolidayPackages;
