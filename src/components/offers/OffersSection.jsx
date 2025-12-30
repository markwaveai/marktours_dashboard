export default function OffersSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-[1200px] mx-auto px-6 space-y-6">

        {/* 🔹 TOP 3 HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 (Logo on top-left) */}
          <div className="relative rounded-2xl overflow-hidden h-[300px]">
            <img
              src="/assets/images/offers/offer4.png"
              className="w-full h-full"
            />
            <img
              src="/assets/images/logo1.png"
              className="absolute top-4 left-5 w-10 h-12 z-10"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="font-semibold text-lg">
                South Indian Delights <br /> & Elegant
              </h3>
            </div>
          </div>

          {/* Card 2 (NO logo) */}
          <div className="relative rounded-2xl overflow-hidden h-[300px]">
            <img
              src="/assets/images/offers/offer6.png"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-5 left-12 text-white text-sm leading-tight">
              Where every moment is a <br />
              celebration of South Indian <br />
              culture and heritage
            </div>
            <div className="absolute bottom-5 left-6 text-white text-xs">
              Bangalore <br />
              Coorg Village <br />
              Sakleshpur <br />
              Hampi Badami
            </div>
          </div>

          {/* Card 3 (Logo inline with text) */}
          <div className="relative rounded-2xl overflow-hidden h-[300px]">
            <img
              src="/assets/images/offers/offer5.png"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-5 left-5 text-white flex items-center gap-2">
              <img
                src="/assets/images/logo1.png"
                className="w-10 h-12 mt-1"
              />
              <h3 className="font-semibold text-lg leading-tight">
                Culinary <br /> Authenticity
              </h3>
            </div>
          </div>

        </div>

        {/* 🔹 OFFERS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT BIG CARD */}
          <div className="relative rounded-2xl overflow-hidden h-[520px]">
            <img
              src="/assets/images/offers/offer1.png"
              className="w-full h-full"
            />
            <span className="absolute top-4 left-4 bg-[#EDF957] text-black text-xs font-bold px-3 py-1 rounded-md">
              GET 50% OFF
            </span>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold leading-tight">
                The Montcalm At Brewery <br /> London City
              </h3>
              <p className="text-sm mt-1">
                Starting from <span className="text-[#EDF957] font-bold">₹29,999</span>
              </p>
            </div>
            <div className="absolute inset-0" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-6">

            {/* TOP RIGHT */}
            <div className="relative rounded-2xl overflow-hidden h-[250px]">
              <img
                src="/assets/images/offers/offer2.png"
                className="w-full h-full "
              />
              <span className="absolute top-4 left-4 bg-[#EDF957] text-black text-xs font-bold px-3 py-1 rounded-md">
                GET 50% OFF
              </span>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <h3 className="text-xl font-semibold leading-tight">
                  The Montcalm At Brewery <br /> London City
                </h3>
                <p className="text-sm">
                  Starting from{" "}
                  <span className="text-[#EDF957] font-bold">₹19,999</span>
                </p>
              </div>
              <div className="absolute inset-0" />
            </div>

            {/* BOTTOM RIGHT */}
            <div className="relative rounded-2xl overflow-hidden h-[250px]">
              <img
                src="/assets/images/offers/offer3.png"
                className="w-full h-full"
              />
              <span className="absolute top-4 left-4 bg-[#EDF957] text-black text-xs font-bold px-3 py-1 rounded-md">
                GET 50% OFF
              </span>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <h3 className="text-xl font-semibold leading-tight">
                  The Montcalm At Brewery <br /> London City
                </h3>
                <p className="text-sm">
                  Starting from{" "}
                  <span className="text-[#EDF957] font-bold">₹24,999</span>
                </p>
              </div>
              <div className="absolute inset-0" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
