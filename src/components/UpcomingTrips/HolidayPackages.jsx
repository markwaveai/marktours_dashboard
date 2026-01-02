import PackageCard from "../PackageCard.jsx";
import BookNowButton from "../BookNowButton.jsx";

const HolidayPackages = () => {
  return (
    <div className="max-w-[94vw] mx-auto space-y-10">

      {/* INTERNATIONAL */}
      <div>
        <div className="flex items-center justify-between pb-5 px-2">
          <h3 className="text-xl font-bold">International Destinations</h3>
          <BookNowButton
            variant="purple"
            onClick={() => window.dispatchEvent(new Event("open-booking"))}
          />
        </div>

        <div className="overflow-x-hidden">
          <div className="flex gap-6 animate-loop">
            <PackageCard 
            
              video="/assets/11.mp4"
              name="Bali" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Malaysia.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/malaysia video.mp4"
              name="Malaysia" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Singapore.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/singapore video.mp4"
              name="Singapore" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Dubai.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/dubai video-1.mp4"
              name="Dubai" 
              tours="18 Tours" 
            />
            <PackageCard 
             
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/phuket video.mp4"
              name="Phuket" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Srilanka.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/sri lanka video.mp4"
              name="Srilanka" 
              tours="18 Tours" 
            />

            <PackageCard  
              video="/assets/11.mp4"
              name="Bali" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Malaysia.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/malaysia video.mp4"
              name="Malaysia" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Singapore.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/singapore video.mp4"
              name="Singapore" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Dubai.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/dubai video-1.mp4"
              name="Dubai" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Phuket.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/phuket video.mp4"
              name="Phuket" 
              tours="18 Tours" 
            />
            <PackageCard 
              image="/assets/images/Srilanka.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/sri lanka video.mp4"
              name="Srilanka" 
              tours="18 Tours" 
            />
          </div>
        </div>
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

        <div className="overflow-x-hidden">
          <div className="flex gap-6 animate-loop-reverse">
            <PackageCard image="/assets/images/Gwalior.png" name="Gwalior" tours="18 Tours" />
            <PackageCard image="/assets/images/Rajasthan.png" name="Rajasthan Delights" tours="18 Tours" />
            <PackageCard image="/assets/images/Kerala.png" name="Kerala Summer Spl Tour" tours="18 Tours" />
            <PackageCard image="/assets/images/Chardham.png" name="Chardham" tours="18 Tours" />
            <PackageCard image="/assets/images/BestOfRajathan.png" name="Best Of Rajasthan" tours="18 Tours" />
            <PackageCard image="/assets/images/BestOfRajasthan2.png" name="BestOfRajathan" tours="18 Tours" />

            <PackageCard image="/assets/images/Gwalior.png" name="Gwalior" tours="18 Tours" />
            <PackageCard image="/assets/images/Rajasthan.png" name="Rajasthan Delights" tours="18 Tours" />
            <PackageCard image="/assets/images/Kerala.png" name="Kerala Summer Spl Tour" tours="18 Tours" />
            <PackageCard image="/assets/images/Chardham.png" name="Chardham" tours="18 Tours" />
            <PackageCard image="/assets/images/BestOfRajathan.png" name="Best Of Rajasthan" tours="18 Tours" />
            <PackageCard image="/assets/images/BestOfRajathan2.png" name="BestOfRajathan" tours="18 Tours" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HolidayPackages;
