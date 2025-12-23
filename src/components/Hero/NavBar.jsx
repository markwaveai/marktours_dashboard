import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-4 flex items-center justify-between text-white">

      {/* Logo */}
      <div className="flex items-center gap-1">
        <span className="text-2xl">📍</span>
        <h2 className="font-bold">Mark Tours</h2>
      </div>

      {/* Menu */}
      <div className="flex gap-8 text-sm text-black font-medium">
        <span>National</span>
        <span>International</span>
        <span>Cruises</span>
        <span>Visa</span>
        <span>Flights</span>
        <span>Gallery</span>
      </div>

      {/* Buttons */}
      <div className=" ml-30 flex gap-3">
        <button className="bg-[#EEFB56] text-black px-4 py-2 rounded-xl text-sm font-semibold">
          Get in Touch
        </button>

        <Link to="/login" className="border border-white px-4 py-2 rounded-xl text-sm hover:bg-blue-500 hover:border-blue-500 transition text-center flex items-center">
          Login / Register
        </Link>
      </div>

    </nav>
  );
}
