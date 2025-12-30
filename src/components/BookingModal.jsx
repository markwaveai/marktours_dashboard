import { useEffect, useState } from "react";

export default function BookingModal({ open, onClose }) {
  const [render, setRender] = useState(open);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setRender(true);
      setClosing(false);
    } else if (render) {
      setClosing(true);
      setTimeout(() => setRender(false), 250);
    }
  }, [open]);

  if (!render) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div
        className={`relative bg-[#E6F76A] w-full max-w-md rounded-3xl p-6 shadow-xl ${
          closing ? "popup-close" : "popup-open"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-12 h-12 bg-[#5B2EFF] text-white rounded-full text-xl flex items-center justify-center hover:scale-105 transition"
        >
          ✕
        </button>

        {/* FORM */}
        <div className="space-y-4 text-black">

          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter Name Here"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Email Here"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Destination</label>
            <input
              type="text"
              placeholder="Select your Destination"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <button
            onClick={onClose}
            className="w-full bg-[#5B2EFF] text-white py-2 rounded-xl font-semibold mt-3 hover:brightness-110 transition"
          >
            SUBMIT
          </button>

        </div>
      </div>
    </div>
  );
}
