export default function OffersSection() {
  return (
    <section className="w-full flex justify-center px-6 py-14 bg-white">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT BIG CARD */}
        <div className="relative rounded-2xl overflow-hidden h-[420px]">
          <img
            src="/assets/images/offers/offer1.png"
            alt="London"
            className="w-full h-full object-cover"
          />

          {/* Badge */}
          <span className="absolute top-4 left-4 bg-[#EDF957] text-black text-xs font-bold px-3 py-1 rounded-full">
            GET 50% OFF
          </span>

          {/* Text */}
          <div className="absolute bottom-6 left-6 text-white space-y-1">
            <h3 className="text-lg font-semibold">
              The Montcalm At Brewery London
            </h3>
            <p className="text-sm opacity-90">
              City London City
            </p>
             <p className="text-xs font-semibold ">
              Starting from <span className="text-[#EDF957] font-bold">$299</span>
            </p>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 grid grid-rows-2 gap-6">

          {/* TOP RIGHT CARD */}
          <div className="relative rounded-2xl overflow-hidden h-[200px]">
            <img
              src="/assets/images/offers/offer2.png"
              alt="Mountains"
              className="w-full h-full object-cover"
            />

            <span className="absolute top-4 left-4 bg-[#EDF957] text-black text-xs font-bold px-3 py-1 rounded-full">
              GET 50% OFF
            </span>

            <div className="absolute bottom-6 left-6 text-white space-y-1">
             
              <h3 className="text-lg font-semibold">
                The Montcalm At Brewery
              </h3>
              <p className="text-sm opacity-90">
                London City
              </p>
               <p className="text-xs font-semibold opacity-90">
                Starting from <span className="text-[#EDF957] font-bold">$199</span>
              </p>
            </div>

            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div className="relative rounded-2xl overflow-hidden h-[200px]">
            <img
              src="/assets/images/offers/offer3.png"
              alt="Village"
              className="w-full h-full object-cover"
            />

            <span className="absolute top-4 left-4 bg-[#EDF957] text-black text-xs font-bold px-3 py-1 rounded-full">
              GET 50% OFF
            </span>

            <div className="absolute bottom-6 left-6 text-white space-y-1">
            
              <h3 className="text-lg font-semibold">
                The Montcalm At Brewery
              </h3>
              <p className="text-sm opacity-90">
                London City
              </p>
               <p className="text-xs font-semibold opacity-90">
                Starting from  <span className="text-[#EDF957] font-bold">$249</span>
              </p>
            </div>

            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
