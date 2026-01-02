import { useEffect, useState } from "react";

const API_URL =
  "https://marktours-services-jn6cma3vvq-el.a.run.app/customer-interested";

export default function BookingModal({ open, onClose }) {
  const [render, setRender] = useState(open);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

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
    const { name, value } = e.target;

    // Name → letters, numbers & underscore
    if (name === "name") {
      if (!/^[a-zA-Z0-9_\s]*$/.test(value)) return;
    }

    // Phone → digits only
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    // Pincode → digits only
    if (name === "pincode") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 6) return;
    }

    // Email → lowercase only
    if (name === "email") {
      setForm({ ...form, email: value.toLowerCase() });
      setErrors({ ...errors, email: "" });
      return;
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.destination) newErrors.destination = "Destination is required";

    if (form.phone && form.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (form.pincode && form.pincode.length !== 6) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }

    if (
      form.email &&
      !/^[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,}$/.test(form.email)
    ) {
      newErrors.email =
        "Email must contain lowercase letters, numbers and dots only";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      name: form.name,
      mobile: form.phone,
      email: form.email,
      pincode: form.pincode,
      destination: form.destination,
      status: "Interested",
    };

    try {
      setLoading(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setForm({
        name: "",
        phone: "",
        email: "",
        pincode: "",
        destination: "",
      });

      setErrors({});
      alert("Submitted successfully!");
      onClose();
    } catch {
      alert("Failed to submit. Please try again.");
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
          {/* Name */}
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name Here"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter Phone Number"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Email ID"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Pincode */}
          <div>
            <label className="text-sm font-semibold">PinCode</label>
            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter PIN Number"
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm"
            />
            {errors.pincode && (
              <p className="text-red-600 text-xs mt-1">{errors.pincode}</p>
            )}
          </div>

          {/* Destination */}
          <div>
            <label className="text-sm font-semibold">Destination</label>
            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg border outline-none text-sm bg-white"
            >
              <option value="">Select Destination</option>
              <option value="Kerala">Kerala</option>
              <option value="Dubai">Dubai</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Bali">Bali</option>
              <option value="Thailand">Thailand</option>
            </select>
            {errors.destination && (
              <p className="text-red-600 text-xs mt-1">
                {errors.destination}
              </p>
            )}
          </div>

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
