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

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (item) => {
    setOpen(false); // Close mobile menu if open

    if (item === "NATIONAL") {
      handleScroll("domestic-packages");
    } else if (item === "INTERNATIONAL") {
      handleScroll("international-packages");
    } else if (item === "CRUISES") {
      window.dispatchEvent(new CustomEvent("switch-tour-tab", { detail: { tab: "cruise" } }));
      setTimeout(() => handleScroll("tour-services"), 100);
    } else if (item === "VISA") {
      window.dispatchEvent(new CustomEvent("switch-tour-tab", { detail: { tab: "visa" } }));
      setTimeout(() => handleScroll("tour-services"), 100);
    } else if (item === "FLIGHTS") {
      window.dispatchEvent(new CustomEvent("switch-tour-tab", { detail: { tab: "air" } }));
      setTimeout(() => handleScroll("tour-services"), 100);
    } else if (item === "GALLERY") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-5 flex items-center justify-between">
        <img src="/assets/images/logo.png" className="w-[70px] md:w-[90px]" />

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex bg-black/40 backdrop-blur-md px-10 py-3 rounded-full gap-10 text-xs font-bold text-white tracking-wider">
            {menuItems.map((item) => (
              <span
                key={item}
                onClick={() => handleNavigation(item)}
                className="cursor-pointer hover:text-[#EEFB56] transition-colors"
              >
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

        {/* BACKDROP TO CLOSE MENU ON CLICK OUTSIDE */}
        {open && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {open && (
          <div className="fixed top-0 right-0 h-full w-[280px] bg-[#0b1c2d]/95 backdrop-blur-md z-50 p-6 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-end mb-8">
              <button onClick={() => setOpen(false)} className="text-white text-2xl font-bold">✕</button>
            </div>

            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <span
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="text-lg font-medium text-white active:text-yellow-400 border-b border-white/10 pb-2 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <BookNowButton
                variant="yellow"
                onClick={() => {
                  setOpen(false);
                  setShowBooking(true);
                }}
              />
              <Link to="/login" className="border border-white/30 py-3 rounded-xl text-center text-white hover:bg-white/10">
                Login / Register
              </Link>
            </div>
          </div>
        )}
      </nav>

      <BookingModal open={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
}