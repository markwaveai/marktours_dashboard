import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { label: "Holiday Packages", path: "holiday-packages" },
  { label: "Air Ticketing", path: "air-ticketing" },
  { label: "Visas", path: "visas" },
  { label: "Cruise Holidays", path: "cruise-holidays" },
  { label: "Hotels & Resort Planning", path: "hotels-and-resort-planning" },
];

const UpcomingTrips = () => {
  return (
    <section className="pt-12">
      <p className="text-center text-gray-600">
        The most popular tours of the week <br />
        <span className="text-center text-3xl font-bold text-blue-600">
            UPCOMING TRIPS
        </span>
      </p>

      <div className="flex justify-center gap-3 flex-wrap my-6">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `
              px-4 py-2 rounded-xl text-[14px] font-medium transition
              ${
                isActive
                  ? ""
                  : ""
              }
            `
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </section>
  );
};

export default UpcomingTrips;
