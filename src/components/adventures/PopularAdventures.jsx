export default function PopularAdventures() {
  return (
    <section className="w-full bg-[#5B27FF] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center text-white mb-10">
          <p className="text-sm opacity-80">Modern & Beautiful</p>
          <h2 className="text-3xl font-extrabold mt-2">
            OUR MOST POPULAR ADVENTURES
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {[
            "/assets/images/adventures/adv1.png",
            "/assets/images/adventures/adv2.png",
            "/assets/images/adventures/adv3.png",
            "/assets/images/adventures/adv4.png",
            "/assets/images/adventures/adv5.png",
          ].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[190px]">
                <img
                  src={img}
                  alt="Adventure"
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                
               <span className="absolute top-3  bg-[#EDF957] text-black text-[10px] font-semibold px-3 py-1 badge-off">
  50% OFF
</span>


                {/* Wishlist */}
                <span className="absolute top-3 right-3 bg-white/80 rounded-full p-1 text-xs">
                  ❤️
                </span>
              </div>

              {/* Content */}
              <div className="p-4 text-sm">
                <h3 className="font-semibold leading-snug">
                  The Montcalm At Brewery London City
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Westminster Borough, London
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-[#5B27FF] text-white text-xs px-2 py-1 rounded">
                    4.8
                  </span>
                  <p className="text-xs text-gray-600">
                    Exceptional · 3,014 reviews
                  </p>
                </div>

                {/* Price */}
                <p className="mt-3 text-xs text-gray-600">
                  Starting from{" "}
                  <span className="font-bold text-[#5B27FF] text-xl">$89.00</span>
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
