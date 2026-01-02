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
            
             video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/bb.mp4"
              name="Bali" 
             
            />
            <PackageCard 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/ker.mp4"
              name="Malaysia" 
            />
            <PackageCard 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/sing.mp4"
              name="Singapore" 
            />
            <PackageCard  
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/dub.mp4"
              name="Dubai" 
             
            />
            <PackageCard 
             
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/kash.mp4"
              name="Phuket" 
             
            />
            <PackageCard 
              image="/assets/images/Srilanka.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/mal.mp4"
              name="Srilanka" 
             
            />

            <PackageCard  
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/bb.mp4"
              name="Bali" 
              
            />
            <PackageCard 
              
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/ker.mp4"
              name="Malaysia" 
              
            />
            <PackageCard 
              
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/sing.mp4"
              name="Singapore" 
              
            />
            <PackageCard 
            
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/dub.mp4"
              name="Dubai" 
              
            />
            <PackageCard 
              image="/assets/images/Phuket.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/kash.mp4"
              name="Phuket" 
              
            />
            <PackageCard 
              image="/assets/images/Srilanka.png" 
              video="/assets/INTERNATIONAL VIDEOS/INTERNATIONAL VIDEOS/bb.mp4"
              name="Srilanka" 
              
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
            <PackageCard video="/assets/DOMASTIC_VIDEOS/gate.mp4" name="Gate Way Of India" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Rajasthan Delights" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/kerala.mp4" name="Kerala Summer Spl Tour" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/ghar.mp4" name="Chardham" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Best Of Rajasthan" />
           
            <PackageCard video="/assets/DOMASTIC_VIDEOS/gate.mp4" name="Gate Way Of India" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Rajasthan Delights" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/kerala.mp4" name="Kerala Summer Spl Tour" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/ghar.mp4" name="Chardham" />
            <PackageCard video="/assets/DOMASTIC_VIDEOS/raj.mp4" name="Best Of Rajasthan"  />
          
          </div>
        </div>
      </div>

    </div>
  );
};

export default HolidayPackages;
