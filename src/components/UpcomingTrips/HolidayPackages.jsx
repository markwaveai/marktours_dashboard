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
    }, 20);

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
          <PackageCard
            video="/assets/11.mp4"
            name="Bali"
          />
          <PackageCard
            image="/assets/images/Malaysia.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/malaysia video.mp4"
            name="Malaysia"
          />
          <PackageCard
            image="/assets/images/Singapore.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/singapore video.mp4"
            name="Singapore"
          />
          <PackageCard
            image="/assets/images/Dubai.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/dubai video-1.mp4"
            name="Dubai"
          />
          <PackageCard
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/phuket video.mp4"
            name="Phuket"
          />
          <PackageCard
            image="/assets/images/Srilanka.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/sri lanka video.mp4"
            name="Srilanka"
          />

          <PackageCard
            video="/assets/11.mp4"
            name="Bali"
          />
          <PackageCard
            image="/assets/images/Malaysia.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/malaysia video.mp4"
            name="Malaysia"
          />
          <PackageCard
            image="/assets/images/Singapore.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/singapore video.mp4"
            name="Singapore"
          />
          <PackageCard
            image="/assets/images/Dubai.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/dubai video-1.mp4"
            name="Dubai"
          />
          <PackageCard
            image="/assets/images/Phuket.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/phuket video.mp4"
            name="Phuket"
          />
          <PackageCard
            image="/assets/images/Srilanka.png"
            video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/sri lanka video.mp4"
            name="Srilanka"
          />
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
          <PackageCard video="/assets/DOMASTIC_VIDEOS/gate.mp4" name="Gate Way Of India" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Rajasthan Delights" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/kerala.mp4" name="Kerala Summer Spl Tour" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/ghar.mp4" name="Chardham" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Best Of Rajasthan" />

          <PackageCard video="/assets/DOMASTIC_VIDEOS/gate.mp4" name="Gate Way Of India" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Rajasthan Delights" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/kerala.mp4" name="Kerala Summer Spl Tour" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/ghar.mp4" name="Chardham" />
          <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Best Of Rajasthan" />
        </AutoScroller>
      </div>

    </div>
  );
};

export default HolidayPackages;
