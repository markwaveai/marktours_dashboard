import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookNowButton from "../BookNowButton";
import BookingModal from "../BookingModal";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const menuItems = [
    "National",
    "International",
    "Cruises",
    "Visa",
    "Flights",
    "Gallery",
  ];

  useEffect(() => {
    const handler = () => setShowBooking(true);
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-30 px-4 md:px-10 py-5 flex items-center justify-between">

        <img src="/assets/images/logo.png" className="w-[70px] md:w-[90px]" />

        <div className="hidden lg:flex bg-[#EEFB56]/70 backdrop-blur-md px-8 py-2.5 rounded-xl gap-8 text-sm font-semibold">
          {menuItems.map((item) => (
            <span key={item} className="cursor-pointer">
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <BookNowButton variant="yellow" onClick={() => setShowBooking(true)} />
          </div>

          <button to="/login" className="hidden sm:flex border px-4 py-2 rounded-xl text-white">
            Login / Register
          </button>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white text-3xl">
            ☰
          </button>
        </div>

        {open && (
          <div className="absolute top-full left-0 w-full px-4 pt-4 lg:hidden">
            <div className="bg-[#0b1c2d]/90 p-5 rounded-2xl text-white">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <BookNowButton
                  variant="yellow"
                  onClick={() => {
                    setOpen(false);
                    setShowBooking(true);
                  }}
                />
                <Link to="/login" className="border py-2 rounded-full text-center">
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <BookingModal open={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
}
