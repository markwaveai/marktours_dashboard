export default function OffersSection() {
  return (
    <section className="w-full flex justify-center px-6 py-14 bg-white">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT BIG CARD */}
        <div className="relative rounded-2xl overflow-hidden h-[500px]">
          <img
            src="/assets/images/offers/offer1.png"
            alt="London"
            className="w-full h-full"
          />

          <span className="absolute top-4  bg-[#EDF957] text-black text-xs font-bold px-3 py-1 ">
            GET 50% OFF
          </span>

          <div className="absolute bottom-6 left-6 text-white space-y-1">
            <h3 className="text-xl font-semibold">
              The Montcalm At Brewery <br /> London City
            </h3>
            <p className="text-md ">
              Starting from <span className="text-[#EDF957] font-bold">₹29,999</span>
            </p>
          </div>

          <div className="absolute inset-0"></div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 grid grid-rows-2 gap-6">

          {/* TOP RIGHT CARD */}
          <div className="relative rounded-2xl overflow-hidden h-[270px]">
            <img
              src="/assets/images/offers/offer2.png"
              alt="Mountains"
              className="w-full h-full "
            />

            <span className="absolute top-4  bg-[#EDF957] text-black text-xs font-bold px-3 py-1">
              GET 50% OFF
            </span>

            <div className="absolute bottom-5 px-3 text-white space-y-1 flex justify- items-center justify-between w-full">
              <h3 className="text-xl font-semibold">
                The Montcalm At Brewery <br/> London City
              </h3>
              
              <p className="text-base opacity-90  ">
                Starting from <span className="text-[#EDF957] font-bold">₹19,999</span>
              </p>
            </div>

            <div className="absolute inset-0 "></div>
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div className="relative rounded-2xl overflow-hidden h-[205px]">
            <img
              src="/assets/images/offers/offer3.png"
              alt="Village"
              className="w-full h-full"
            />

            <span className="absolute top-4 bg-[#EDF957] text-black text-xs font-bold px-3 py-1 ">
              GET 50% OFF
            </span>

            <div className="absolute bottom-4 px-3 text-white space-y-1 flex items-center justify-between w-full">
              <h3 className="text-xl font-semibold">
                The Montcalm At Brewery <br /> London City
              </h3>
              <p className="text-md">
                Starting from <span className="text-[#EDF957] font-bold">₹24,999</span>
              </p>
            </div>

            <div className="absolute inset-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
