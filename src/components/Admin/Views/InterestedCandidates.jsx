import React, { useState } from "react";

const InterestedCandidates = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 border-b border-gray-200">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Interested Candidates
          </h2>
          <p className="text-sm text-gray-500">
            Manage interested candidates details
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search candidates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">S.NO</th>
              <th className="px-6 py-4 text-left font-semibold">NAME</th>
              <th className="px-6 py-4 text-left font-semibold">
                PHONE NUMBER
              </th>
              <th className="px-6 py-4 text-left font-semibold">EMAIL</th>
              <th className="px-6 py-4 text-left font-semibold">
                DESTINATION
              </th>
              <th className="px-6 py-4 text-left font-semibold">PINCODE</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {/* Data rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterestedCandidates;
