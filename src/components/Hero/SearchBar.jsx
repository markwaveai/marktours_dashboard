import { useState } from "react";

export default function SearchBar() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: only letters and spaces
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    // Phone: only numbers + max 10 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    if (!form.destination) {
      alert("Please select a destination");
      return;
    }

    console.log("FORM DATA 👉", form);
  };

  return (
    <div className="w-full px-4 sm:px-6 2xl:px-20 mt-8">
      {/* ✅ Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-black mb-6">
       PLAN YOUR TRIP
      </h2>

      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="
            w-full max-w-7xl
            bg-[#DBEE61]
            rounded-[32px] md:rounded-full
            px-5 py-6
            sm:px-8
            md:px-10 md:py-6
            2xl:px-14 2xl:py-8
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-6
            gap-5 md:gap-6
            items-end
            shadow-lg
          "
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input
              name="name"
              placeholder="Enter Name Here"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Phone Number</label>
            <input
              name="phone"
              placeholder="Enter 10-digit Phone"
              value={form.phone}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={10}
              className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 outline-none"
            />
          </div>

          {/* Destination */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Destination</label>
            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
              className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 outline-none"
            >
              <option value="">Select Destination</option>
              <option value="Dubai">Dubai</option>
              <option value="Bali">Bali</option>
              <option value="Thailand">Thailand</option>
              <option value="Kerala">Kerala</option>
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>

          {/* Pincode */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Pincode</label>
            <input
              name="pincode"
              placeholder="Enter Pincode"
              value={form.pincode}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={6}
              className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 outline-none"
            />
          </div>

          {/* Submit */}
          <div className="flex w-full">
            <button
              type="submit"
              className="w-full bg-[#6A2CF3] hover:bg-purple-700 text-white rounded-lg font-semibold py-3"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
