export default function OffersSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-[1200px] mx-auto px-6 space-y-6">

        {/* 🔹 TOP 3 HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden h-[300px] cursor-pointer">
            <img
              src="/assets/images/offers/offer4.png"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />



            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />

            <div className="absolute bottom-5 left-5 text-white transition-all duration-500 group-hover:-translate-y-2">
              <h3 className="font-semibold text-lg">
                South Indian Delights <br /> & Elegant
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden h-[300px] cursor-pointer">
            <img
              src="/assets/images/offers/offer6.jpeg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/45" />

            <div className="absolute top-5 left-12 text-white text-sm leading-tight transition-all duration-500 group-hover:-translate-y-2">
              Where every moment is a <br />
              celebration of South Indian <br />
              culture and heritage
            </div>

            <div className="absolute bottom-5 left-6 text-white text-xs transition-all duration-500 group-hover:-translate-y-2">
              Bangalore <br />
              Coorg Village <br />
              Sakleshpur <br />
              Hampi Badami
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl overflow-hidden h-[300px] cursor-pointer">
            <img
              src="/assets/images/offers/offer5.jpeg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/45" />

            <div className="absolute bottom-5 left-5 text-white flex items-center gap-2 transition-all duration-500 group-hover:-translate-y-2">

              <h3 className="font-semibold text-lg leading-tight">
                Culinary <br /> Authenticity
              </h3>
            </div>
          </div>

        </div>

        {/* 🔹 OFFERS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT BIG CARD */}
          <div className="group relative rounded-2xl overflow-hidden h-[520px] cursor-pointer">
            <img
              src="/assets/images/offers/offer1.png"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />



            <div className="absolute bottom-6 left-6 text-white transition-all duration-500 group-hover:-translate-y-2">
              <h3 className="text-xl font-semibold leading-tight">
                The Montcalm At Brewery <br /> London City
              </h3>
              <p className="text-sm mt-1">
                Starting from{" "}
                <span className="text-[#EDF957] font-bold">₹29,999</span>
              </p>
            </div>

            <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-6">

            {/* TOP RIGHT */}
            <div className="group relative rounded-2xl overflow-hidden h-[250px] cursor-pointer">
              <img
                src="/assets/images/offers/offer2.png"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />



              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white transition-all duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold leading-tight">
                  The Montcalm At Brewery <br /> London City
                </h3>
                <p className="text-sm">
                  Starting from{" "}
                  <span className="text-[#EDF957] font-bold">₹19,999</span>
                </p>
              </div>

              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />
            </div>

            {/* BOTTOM RIGHT */}
            <div className="group relative rounded-2xl overflow-hidden h-[250px] cursor-pointer">
              <img
                src="/assets/images/offers/offer3.png"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />



              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white transition-all duration-500 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold leading-tight">
                  The Montcalm At Brewery <br /> London City
                </h3>
                <p className="text-sm">
                  Starting from{" "}
                  <span className="text-[#EDF957] font-bold">₹24,999</span>
                </p>
              </div>

              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
