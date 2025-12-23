import { useState } from "react";

export default function SearchBar() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM DATA 👉", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl p-6 shadow-xl grid grid-cols-1 md:grid-cols-5 gap-6 w-full mx-auto"
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semiboldbold text-black">
          Name
        </label>
        <input
          name="name"
          placeholder="Enter Name Here"
          value={form.name}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 outline-none"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-black">
          Phone Number
        </label>
        <input
          name="phone"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 outline-none"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-black">
          Email
        </label>
        <input
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 outline-none"
        />
      </div>

      {/* Destination */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-black">
          Destination
        </label>
        <select
          name="destination"
          value={form.destination}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 outline-none"
        >
          <option value="">Select your destination</option>
          <option>France</option>
          <option>Spain</option>
          <option>USA</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full bg-[#EEFB56] hover:bg-lime-300 transition rounded-full font-semibold py-2"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
