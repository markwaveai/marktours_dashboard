const PackageCard = ({ image, name, tours }) => {
  return (
    <div className="min-w-[200px] flex flex-col items-center text-center cursor-pointer group">

      {/* IMAGE AREA */}
      <div className="relative w-[200px] h-[240px] flex items-center justify-center pb-[7px]">

        {/* BACKGROUND OVAL PNG */}
        <img
          src="/assets/images/Oval-img.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* FOREGROUND IMAGE */}
        <div className="w-[158px] h-[194px] overflow-hidden z-10">
          <img
            src={image}
            alt={name}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* TEXT */}
      <h4 className="mt-2 text-sm font-semibold text-indigo-600">
        {name}
      </h4>
      <p className="text-xs text-gray-500">{tours}</p>
    </div>
  );
};

export default PackageCard;
