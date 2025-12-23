import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "National",
    "International",
    "Cruises",
    "Visa",
    "Flights",
    "Gallery",
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-30 px-4 md:px-10 py-4 flex items-center justify-between">

      {/* LOGO */}
      <img
        src="/assets/images/logo.png"
        alt="Mark Tours"
        className="w-[70px] md:w-[90px] shrink-0"
      />

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex gap-6 text-sm text-black font-medium whitespace-nowrap">
        {menuItems.map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:text-[#6C63FF] transition"
          >
            {item}
          </span>
        ))}
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3 shrink-0">

        {/* DESKTOP BUTTONS */}
        <button
          className="
            hidden sm:block
            bg-[#EEFB56] text-black
            px-4 py-2 rounded-xl
            text-sm font-semibold
            whitespace-nowrap
            hover:brightness-95 transition
          "
        >
          Get in Touch
        </button>

        <Link
          to="/login"
          className="
            hidden sm:flex
            border text-white
            px-4 py-2 rounded-xl
            text-sm font-medium
            whitespace-nowrap
            hover:bg-blue-500 hover:border-blue-500 hover:text-white
            transition
            items-center justify-center
          "
        >
          Login / Register
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-3xl leading-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full lg:hidden px-4 pt-4">
          <div className="bg-white rounded-2xl shadow-xl p-5 animate-fade-in">

            {/* MENU LINKS */}
            <div className="flex flex-col divide-y text-gray-800 font-medium">
              {menuItems.map((item) => (
                <span
                  key={item}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base cursor-pointer hover:text-[#6C63FF] transition"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-5 flex flex-col gap-3">
              <button className="bg-[#EEFB56] text-black py-3 rounded-xl font-semibold text-sm hover:brightness-95 transition">
                Get in Touch
              </button>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="border border-gray-300 py-3 rounded-xl text-sm text-center font-medium hover:bg-gray-100 transition"
              >
                Login / Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
