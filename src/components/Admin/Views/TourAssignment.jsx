import { useState } from "react";
import usersDataRaw from "../../../data/users.json";
import { format, addMonths } from "date-fns";
import { Users, Calendar, ArrowRight, UserPlus } from "lucide-react";

export default function TourAssignment() {
    const [users, setUsers] = useState(usersDataRaw);
    const [selectedTour, setSelectedTour] = useState("All");

    const BATCH_LIMIT = 100;

    // Extract unique tours
    const tours = ["All", ...new Set(users.map(u => u.tour))].filter(Boolean);

    // Helper to get users by tour and batch
    const getUsersByBatch = (tour, batch) => {
        return users.filter(u => u.tour === tour && u.batch === batch);
    };

    // Helper to move user to next month's batch
    const moveToNextBatch = (userId, currentBatch) => {
        try {
            // Parse current batch (e.g., "Jan 2024")
            const [monthStr, yearStr] = currentBatch.split(' ');
            const date = new Date(`${monthStr} 1, ${yearStr}`);
            const nextDate = addMonths(date, 1);
            const nextBatch = format(nextDate, "MMM yyyy");

            setUsers(prevUsers => prevUsers.map(u => {
                if (u.id === userId) {
                    return { ...u, batch: nextBatch };
                }
                return u;
            }));

            alert(`User moved to ${nextBatch} batch successfully!`);
        } catch (e) {
            console.error("Error moving batch", e);
            alert("Could not calculate next batch date.");
        }
    };

    // Group data for display
    const tourBatches = tours.filter(t => t !== "All").map(tourName => {
        const tourUsers = users.filter(u => u.tour === tourName);
        const uniqueBatches = [...new Set(tourUsers.map(u => u.batch))].sort(); // simplistic sort

        return {
            tourName,
            batches: uniqueBatches.map(batch => ({
                batchName: batch,
                users: getUsersByBatch(tourName, batch)
            }))
        };
    }).filter(t => selectedTour === "All" || t.tourName === selectedTour);


    return (
        <div className="space-y-6">

            {/* Header & Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Tour Assignment & Batching</h2>
                    <p className="text-sm text-gray-500">Manage traveler batches, capped at 100 per group.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Filter by Tour:</span>
                    <select
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={selectedTour}
                        onChange={(e) => setSelectedTour(e.target.value)}
                    >
                        {tours.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
            </div>

            {/* Tour Batches List */}
            <div className="grid grid-cols-1 gap-8">
                {tourBatches.map((tour) => (
                    <div key={tour.tourName} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <PlaneIcon /> {tour.tourName}
                            </h3>
                            <button className="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1">
                                View All Batches <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tour.batches.map((batch) => {
                                const count = batch.users.length;
                                const progress = (count / BATCH_LIMIT) * 100;
                                const isFull = count >= BATCH_LIMIT;

                                return (
                                    <div key={batch.batchName} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition bg-white relative overflow-hidden group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Batch Date</p>
                                                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-indigo-500" /> {batch.batchName}
                                                </h4>
                                            </div>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${isFull ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                                {isFull ? 'FULL' : 'OPEN'}
                                            </span>
                                        </div>

                                        {/* Capacity Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="font-medium text-gray-600">Capacity</span>
                                                <span className={`${isFull ? 'text-red-500' : 'text-gray-500'}`}>{count} / {BATCH_LIMIT}</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-500 ${isFull ? 'bg-red-500' : 'bg-indigo-500'}`}
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Users Preview */}
                                        <div className="space-y-3 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                                            {batch.users.length === 0 ? (
                                                <div className="text-center py-4 text-gray-400 text-sm italic">
                                                    No travelers assigned yet.
                                                </div>
                                            ) : (
                                                batch.users.map(u => (
                                                    <div key={u.id} className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded border border-gray-100">
                                                        <div className="flex items-center gap-2 truncate">
                                                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600 flex-shrink-0">
                                                                {u.name.charAt(0)}
                                                            </div>
                                                            <span className="truncate max-w-[100px]" title={u.name}>{u.name}</span>
                                                        </div>
                                                        <button
                                                            onClick={() => moveToNextBatch(u.id, batch.batchName)}
                                                            className="text-xs text-orange-600 hover:text-orange-800 font-medium hover:bg-orange-50 px-2 py-1 rounded transition"
                                                            title="Move to next month"
                                                        >
                                                            Move ➔
                                                        </button>
                                                    </div>
                                                ))
                                            )}
                                        </div>

                                        {/* Footer Action */}
                                        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                                            <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-indigo-500 hover:text-indigo-600 font-medium transition flex items-center justify-center gap-2">
                                                <UserPlus className="w-4 h-4" /> Add Traveler
                                            </button>
                                        </div>

                                    </div>
                                );
                            })}

                            {/* New Batch Card Placeholder */}
                            <div className="border border-dashed border-gray-300 rounded-lg p-5 flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 hover:bg-gray-50 transition cursor-pointer min-h-[250px]">
                                <Calendar className="w-8 h-8 mb-2 opacity-50" />
                                <span className="font-medium text-sm">Create Next Batch</span>
                            </div>
                        </div>
                    </div>
                ))}

                {tourBatches.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
                        <p className="text-gray-500">No tours matching the filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Simple Plane Icon Component since lucide Plane might be different or for custom styling
function PlaneIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-indigo-600"
        >
            <path d="M2 12h20" />
            <path d="M13 2l9 10-9 10" />
        </svg>
       
    );
}
