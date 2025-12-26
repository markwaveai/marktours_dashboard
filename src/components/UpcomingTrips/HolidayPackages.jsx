import PackageCard from "../PackageCard.jsx";

const HolidayPackages = () => {
  return (
    <div className="border border-gray-200 px-6 py-6 space-y-14 max-w-[94vw] mx-auto rounded-xl shadow-sm ">

      {/* INTERNATIONAL */}
      <div>
        <h3 className="text-indigo-500 text-md font-medium pb-6 pl-4">
          International Packages
        </h3>

        <div className="overflow-x-hidden overflow-y-visible">
          <div className="flex gap-5 animate-loop">
            {/* duplicated once */}
            <PackageCard image="/assets/images/Maldives.png" name="Maldives" tours="18 Tours" />
            <PackageCard image="/assets/images/Seychellas.png" name="Seychellas" tours="18 Tours" />
            <PackageCard image="/assets/images/Malaysia.png" name="Malaysia" tours="18 Tours" />
            <PackageCard image="/assets/images/Thailand.png" name="Thailand" tours="18 Tours" />
            <PackageCard image="/assets/images/Singapore.png" name="Singapore" tours="18 Tours" />

            <PackageCard image="/assets/images/Maldives.png" name="Maldives" tours="18 Tours" />
            <PackageCard image="/assets/images/Seychellas.png" name="Seychellas" tours="18 Tours" />
            <PackageCard image="/assets/images/Malaysia.png" name="Malaysia" tours="18 Tours" />
            <PackageCard image="/assets/images/Thailand.png" name="Thailand" tours="18 Tours" />
            <PackageCard image="/assets/images/Singapore.png" name="Singapore" tours="18 Tours" />
          </div>
        </div>
      </div>

      {/* NATIONAL */}
      <div>
        <h3 className="text-indigo-600 text-md font-medium pb-6 pl-4">
          National Packages
        </h3>

        <div className="relative overflow-x-hidden overflow-y-visible">
          <div className="flex gap-5 animate-loop-reverse">
            <PackageCard image="/assets/images/Gwalior.png" name="Gwalior" tours="18 Tours" />
            <PackageCard image="/assets/images/Rajasthan.png" name="Rajasthan Delights" tours="18 Tours" />
            <PackageCard image="/assets/images/Kerala.png" name="Kerala Summer Spl Tour" tours="18 Tours" />
            <PackageCard image="/assets/images/Chardham.png" name="Chardham" tours="18 Tours" />
            <PackageCard image="/assets/images/BestOfRajathan.png" name="Best Of Rajasthan" tours="18 Tours" />

            <PackageCard image="/assets/images/Gwalior.png" name="Gwalior" tours="18 Tours" />
            <PackageCard image="/assets/images/Rajasthan.png" name="Rajasthan Delights" tours="18 Tours" />
            <PackageCard image="/assets/images/Kerala.png" name="Kerala Summer Spl Tour" tours="18 Tours" />
            <PackageCard image="/assets/images/Chardham.png" name="Chardham" tours="18 Tours" />
            <PackageCard image="/assets/images/BestOfRajathan.png" name="Best Of Rajasthan" tours="18 Tours" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayPackages;
