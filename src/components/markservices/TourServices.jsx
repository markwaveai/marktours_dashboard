import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPlane,
  faStar,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

import singapore from "/assets/packages/singpoor.png";
import malaysia from "/assets/packages/malasiyaaa.png";
import bali from "/assets/packages/bali.png";
import thailand from "/assets/packages/thailand.png";
import srilanka from "/assets/packages/srilanka.png";
import dubai from "/assets/packages/dubhai.png";

const tabs = [
  { label: "Holiday Packages", path: "/" },
  { label: "Air Ticketing", path: "/air-ticketing" },
  { label: "Visas", path: "/visas" },
  { label: "Cruise Holidays", path: "/cruise" },
  { label: "Hotels & Resort Planning", path: "/hotels" },
];

const packages = [
  { name: "Singapore", image: singapore },
  { name: "Malaysia", image: malaysia },
  { name: "Bali", image: bali },
  { name: "Thailand", image: thailand },
  { name: "Srilanka", image: srilanka },
  { name: "Dubai", image: dubai },
];

export default function TourServices() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 md:px-10 py-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500">Modern & Beautiful</p>
        <h2 className="text-2xl md:text-3xl font-bold">
          TOUR SERVICES
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => navigate(tab.path)}
            className={`px-6 py-2 rounded-full border text-sm transition
              ${
                tab.label === "Holiday Packages"
                  ? "bg-white shadow font-semibold"
                  : "bg-gray-100 hover:bg-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Curved Container */}
      <div className="relative bg-white rounded-[32px] px-6 md:px-10 py-12 shadow-xl border">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {packages.map((item, i) => (
            <div
              key={i}
              className="
                relative
                h-[340px]
                rounded-[28px]
                overflow-hidden
                shadow-xl
                group
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">
                  {item.name}
                </h3>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-0 right-0 px-4">
                <div className="flex justify-between text-white text-[11px]">
                  <div className="flex flex-col items-center gap-1">
                    <FontAwesomeIcon icon={faClock} />
                    <span>2N / 3D</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <FontAwesomeIcon icon={faStar} />
                    <span>Hotels</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Transport</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Now */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#EEFB56] hover:bg-lime-300 px-12 py-3 rounded-full font-semibold">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
