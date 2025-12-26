import usersData from "../../../data/users.json";

const tourImages = {
  dubai: "/assets/tours/dubai.jpg",
  thailand: "/assets/tours/thailand.jpg",
  singapore: "/assets/tours/singapore.jpg",
  malaysia: "/assets/tours/malaysia.jpg",
  lanka: "/assets/tours/srilanka.jpg",
  default: "/assets/tours/default.jpg",
};

export default function TourManagement() {
  const tourStats = usersData.reduce((acc, user) => {
    if (!acc[user.tour]) {
      acc[user.tour] = { count: 0, revenue: 0, users: [] };
    }

    acc[user.tour].count += 1;
    const paid =
      parseInt(user.totalPaid?.replace(/[^0-9]/g, "") || "0") || 0;
    acc[user.tour].revenue += paid;
    acc[user.tour].users.push(user);

    return acc;
  }, {});

  const tours = Object.keys(tourStats).map((tour) => ({
    name: tour,
    ...tourStats[tour],
  }));

  const getTourImage = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes("dubai")) return tourImages.dubai;
    if (lower.includes("thailand")) return tourImages.thailand;
    if (lower.includes("singapore")) return tourImages.singapore;
    if (lower.includes("malaysia")) return tourImages.malaysia;
    if (lower.includes("lanka")) return tourImages.lanka;
    return tourImages.default;
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">
          Tour Management
        </h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
          Create New Tour
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.name}
            className="bg-white rounded-2xl border border-gray-200 shadow p-4"
          >
            {/* Top */}
            <div className="flex gap-4">
              
              {/* Image */}
              <div className="w-[48%] h-[120px] rounded-xl overflow-hidden">
                <img
                  src={getTourImage(tour.name)}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <div className="flex-1 pt-2">
                <h2 className="text-xl font-bold tracking-wide">
                  {tour.name.toUpperCase()}
                </h2>
                <p className="mt-2 text-gray-700 text-sm">
                  TRIP CODE :
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl py-3 text-center">
                <p className="text-gray-700 text-xs tracking-wider">
                  TRAVELLERS
                </p>
                <p className="text-3xl font-bold mt-1">
                  {tour.count}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl py-3 text-center">
                <p className="text-gray-700 text-xs tracking-wider">
                  REVENUE
                </p>
                <p className="text-3xl font-bold mt-1">
                  {tour.revenue}
                </p>
              </div>
            </div>

            {/* Message Button */}
            <div className="mt-4">
              <button className="w-full py-3 rounded-xl bg-gray-700 text-white text-sm font-semibold hover:bg-gray-800 transition">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
