import usersData from "../../../data/users.json";

export default function TourManagement() {

    // Aggregate data by tour
    const tourStats = usersData.reduce((acc, user) => {
        if (!acc[user.tour]) {
            acc[user.tour] = { count: 0, revenue: 0, users: [] };
        }
        acc[user.tour].count += 1;
        const paid = parseInt(user.totalPaid?.replace(/[^0-9]/g, '') || '0') || 0;
        acc[user.tour].revenue += paid;
        acc[user.tour].users.push(user);
        return acc;
    }, {});

    const tours = Object.keys(tourStats).map(tour => ({
        name: tour,
        ...tourStats[tour]
    }));

    // Improved icon mapping for new locations
    const getTourIcon = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes("dubai")) return "🏙️";
        if (lowerName.includes("lanka")) return "🏝️";
        if (lowerName.includes("malaysia")) return "🇲🇾";
        if (lowerName.includes("thailand")) return "🇹🇭";
        if (lowerName.includes("singapore")) return "🦁";
        if (lowerName.includes("europe") || lowerName.includes("rome") || lowerName.includes("paris") || lowerName.includes("swiss")) return "🇪🇺";
        return "✈️";
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Tour Management</h2>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">Create New Tour</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map(tour => (
                    <div key={tour.name} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
                        <div className="h-32 bg-gray-200 relative">
                            {/* Placeholder for Tour Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                {getTourIcon(tour.name)}
                            </div>
                            <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow-sm">
                                {tour.count} Travelers
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-lg text-gray-900">{tour.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">Total Revenue Generated</p>
                            <p className="text-xl font-bold text-indigo-600">₹{tour.revenue.toLocaleString()}</p>

                            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                <div className="flex -space-x-2">
                                    {tour.users.slice(0, 3).map((u, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600" title={u.name}>
                                            {u.name.charAt(0)}
                                        </div>
                                    ))}
                                    {tour.users.length > 3 && (
                                        <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center text-xs text-gray-400">
                                            +{tour.users.length - 3}
                                        </div>
                                    )}
                                </div>
                                <button className="text-sm text-indigo-600 font-medium hover:underline">Manage</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
