import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookNowButton from "../BookNowButton";
import BookingModal from "../BookingModal";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const menuItems = [
    "NATIONAL",
    "INTERNATIONAL",
    "CRUISES",
    "VISA",
    "FLIGHTS",
    "GALLERY",
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

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex bg-black/40 backdrop-blur-md px-10 py-3 rounded-full gap-10 text-xs font-bold text-white tracking-wider">
            {menuItems.map((item) => (
              <span key={item} className="cursor-pointer hover:text-[#EEFB56] transition-colors">
                {item}
              </span>
            ))}
          </div>

          <div className="hidden sm:block">
            <BookNowButton variant="yellow" onClick={() => setShowBooking(true)} />
          </div>

          <button className="hidden sm:flex border border-white/60 px-6 py-2 rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-all">
            Login / Register
          </button>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white text-3xl">
            ☰
          </button>
        </div>

        {open && (
          <div className="absolute top-full left-0 w-full px-4 pt-4 lg:hidden">
            <div className="bg-[#0b1c2d]/95 backdrop-blur-lg p-6 rounded-3xl text-white shadow-2xl">
              <div className="flex flex-col gap-4 text-center">
                {menuItems.map((item) => (
                  <span key={item} className="text-sm font-bold tracking-widest">{item}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <BookNowButton
                  variant="yellow"
                  onClick={() => {
                    setOpen(false);
                    setShowBooking(true);
                  }}
                />
                <button className="border border-white/40 py-3 rounded-full text-center text-sm font-medium">
                  Login / Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <BookingModal open={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
}