import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default function PopularAdventures() {
  const adventures = [
    "/assets/images/adventures/adv1.png",
    "/assets/images/adventures/adv2.png",
    "/assets/images/adventures/adv3.png",
    "/assets/images/adventures/adv4.png",
    "/assets/images/adventures/adv5.png",
  ];

  return (
    <section className="w-full bg-[#551DEF] py-12 md:py-16">
      <div className="max-w-[95vw] mx-auto px-4">

        {/* Heading */}
        <div className="text-center text-white mb-10">
          <p className="text-sm">Modern & Beautiful</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-1">
            OUR MOST POPULAR ADVENTURES
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        ">
          {adventures.map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              {/* Image */}
              <div className="relative h-[200px] sm:h-[220px] md:h-[240px]">
                <img
                  src={img}
                  alt="Adventure"
                  className="w-full h-full object-cover"
                />

                {/* Discount */}
                <span className="absolute top-3 left-0 bg-[#EDF957] text-black text-[11px] font-semibold px-3 py-1">
                  50% OFF
                </span>

                {/* Wishlist */}
                <span className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow cursor-pointer">
                  <FontAwesomeIcon
                    icon={faHeartRegular}
                    className="text-gray-600 hover:text-red-500 transition"
                  />
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                  The Montcalm At Brewery London City
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Westminster Borough, London
                </p>

                {/* Rating */}
                <div className="flex items-start gap-3 mt-3 text-xs">
                  <span className="bg-[#5B27FF] text-white px-3 py-2 font-semibold rounded">
                    4.8
                  </span>

                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, idx) => (
                        <FontAwesomeIcon key={idx} icon={faStar} />
                      ))}
                    </div>

                    <span className="text-gray-600">
                      Exceptional · 3,014 reviews
                    </span>
                  </div>
                </div>

                {/* Price */}
                <p className="mt-3 text-sm text-gray-800">
                  Starting from{" "}
                  <span className="font-bold text-[#5B27FF] text-base">
                    ₹8999.00
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
