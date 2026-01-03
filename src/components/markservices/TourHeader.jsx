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

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full border text-sm transition ${activeTab === tab.id
                ? "bg-white shadow font-semibold"
                : "bg-gray-100 hover:bg-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}
