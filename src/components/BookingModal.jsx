import { useEffect, useState } from "react";

const API_URL =
  "https://marktours-services-jn6cma3vvq-el.a.run.app/customer-interested";

export default function BookingModal({ open, onClose }) {
  const [render, setRender] = useState(open);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pincode: "",
    destination: "",
  });

  /* ================= MODAL ANIMATION ================= */
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

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill all required fields");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setError("Phone number must be 10 digits");
      return;
    }

    const payload = {
      name: form.name,
      mobile: form.phone,       // ✅ REQUIRED KEY
      email: form.email,
      pincode: form.pincode,
      destination: form.destination,
      status: "Interested",     // ✅ REQUIRED BY BACKEND
    };

    console.log("📦 PAYLOAD 👉", payload);

    try {
      setLoading(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("✅ RESPONSE 👉", data);

      if (!res.ok) {
        throw new Error("Failed to save data");
      }

      // Reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        pincode: "",
        destination: "",
      });

      alert("Submitted successfully!");
      onClose();
    } catch (err) {
      console.error("❌ ERROR:", err);
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Name Here"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              maxLength={10}
              placeholder="Enter Phone Number (10 digits)"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Email Here"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">PinCode</label>
            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              type="text"
              placeholder="Enter Pincode"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Destination</label>
            <input
              name="destination"
              value={form.destination}
              onChange={handleChange}
              type="text"
              placeholder="Select your Destination"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm font-medium">{error}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#5B2EFF] text-white py-2 rounded-xl font-semibold mt-3 hover:brightness-110 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>
      </div>
    </div>
  );
}
