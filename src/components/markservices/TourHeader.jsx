const tabs = [
  { label: "Holiday Packages", id: "packages" },
  { label: "Air Ticketing", id: "air" },
  { label: "Visas", id: "visa" },
  { label: "Cruise Holidays", id: "cruise" },
  { label: "Hotels & Resort Planning", id: "hotels" },
];

export default function TourHeader({ activeTab, setActiveTab }) {
  return (
    <>
      <div className="text-center mb-6 md:mb-8 px-4">
        <p className="text-sm text-gray-500">Modern & Beautiful</p>
        <h2 className="text-2xl md:text-3xl font-bold">
          MARK TOURS SERVICES
        </h2>
      </div>

      <div className="flex flex-wrap justify-start items-end gap-0 px-4 md:px-8 w-full max-w-7xl mx-auto -mb-[1px]">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-6 md:px-8 py-3 md:py-4 rounded-t-[30px] text-sm md:text-base transition-all duration-200
                ${isActive
                  ? "bg-white text-black font-bold border-t border-l border-r border-gray-300 z-20"
                  : "bg-transparent text-gray-500 font-medium hover:text-black hover:bg-gray-50 mb-1"
                }
              `}
              style={{
                // Hide bottom border for active tab by overlapping
                marginBottom: isActive ? "-1px" : "0",
              }}
            >
              {tab.label}

              {/* Inverted Border Curves for Active Tab (The "Folder" look) */}
              {isActive && (
                <>
                  {/* Left Curve */}
                  <svg
                    className="absolute bottom-[-1px] -left-[20px] pointer-events-none"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 20H0C11.0457 20 20 11.0457 20 0V20Z" fill="white" />
                    <path d="M0 20C11.0457 20 20 11.0457 20 0" stroke="#d1d5db" />
                  </svg>

                  {/* Right Curve */}
                  <svg
                    className="absolute bottom-[-1px] -right-[20px] pointer-events-none"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 20H20C8.9543 20 0 11.0457 0 0V20Z" fill="white" />
                    <path d="M20 20C8.9543 20 0 11.0457 0 0" stroke="#d1d5db" />
                  </svg>
                </>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
