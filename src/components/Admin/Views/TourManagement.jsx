import { useEffect, useState } from "react";

const tourImages = {
  dubai: "/assets/tours/dubai.jpg",
  thailand: "/assets/tours/thailand.jpg",
  singapore: "/assets/tours/singapore.jpg",
  malaysia: "/assets/tours/malaysia.jpg",
  lanka: "/assets/tours/srilanka.jpg",
  default: "/assets/tours/default.jpg",
};

export default function TourManagement() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://marktours-services-jn6cma3vvq-el.a.run.app/tours-config")
      .then((res) => res.json())
      .then((data) => {
        const apiTours = data.tours || [];

        const formatted = apiTours.map((tour) => ({
          id: tour.id,
          name: tour.tour_name,
          code: tour.tour_code,
          count: tour.booked_slots,
          revenue: tour.package_price * tour.booked_slots,
        }));

        setTours(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  const getTourImage = (name = "") => {
    const lower = name.toLowerCase();

    if (lower.includes("dubai")) return tourImages.dubai;
    if (lower.includes("thailand")) return tourImages.thailand;
    if (lower.includes("singapore")) return tourImages.singapore;
    if (lower.includes("malaysia")) return tourImages.malaysia;
    if (lower.includes("lanka")) return tourImages.lanka;

    return tourImages.default;
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">Tour Management</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-indigo-700">
          Create New Tour
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-3"
          >
            <div className="flex gap-3">
              <div className="w-[60%] h-[80px] rounded-lg overflow-hidden">
                <img
                  src={getTourImage(tour.name)}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-lg font-bold leading-tight">
                  {tour.name.toUpperCase()}
                </h2>
                <p className="mt-1 text-gray-600 text-xs">
                  TRIP CODE : {tour.code}
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="border border-gray-300 bg-gray-50 rounded-lg py-1 text-center">
                <p className="text-black text-[10px] tracking-wider">
                  TRAVELLERS
                </p>
                <p className="text-md font-semibold">{tour.count}</p>
              </div>

              <div className="border border-gray-300 bg-gray-50 rounded-lg py-1 text-center">
                <p className="text-black text-[10px] tracking-wider">REVENUE</p>
                <p className="text-md font-semibold">
                  ₹{tour.revenue.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <button className="w-full py-2 rounded-lg bg-gray-700 text-white text-xs font-semibold hover:bg-gray-800 transition">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
