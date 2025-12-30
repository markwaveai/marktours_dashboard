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
    <div className="w-full flex justify-center px-4 2xl:px-20">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-7xl 3xl:max-w-[90vw]
          bg-[#DBEE61]
          rounded-full
          px-6 py-6
          md:px-10 md:py-6
          2xl:px-14 2xl:py-8
          grid grid-cols-1
          md:grid-cols-5
          gap-6
          items-end
          shadow-lg
        "
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm 2xl:text-base font-semibold text-black">
            Name
          </label>
          <input
            name="name"
            placeholder="Enter Name Here"
            value={form.name}
            onChange={handleChange}
            className="
              bg-white border border-gray-300
              rounded-lg
              px-4 py-2
              2xl:px-5 2xl:py-3
              2xl:text-lg
              outline-none
            "
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm 2xl:text-base font-semibold text-black">
            Phone Number
          </label>
          <input
            name="phone"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="
              bg-white border border-gray-300
              rounded-lg
              px-4 py-2
              2xl:px-5 2xl:py-3
              2xl:text-lg
              outline-none
            "
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm 2xl:text-base font-semibold text-black">
            Email
          </label>
          <input
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="
              bg-white border border-gray-300
              rounded-lg
              px-4 py-2
              2xl:px-5 2xl:py-3
              2xl:text-lg
              outline-none
            "
          />
        </div>

        {/* Destination (Improved) */}
        <div className="flex flex-col gap-2 md:col-span-1 2xl:col-span-1">
          <label className="text-sm 2xl:text-base font-semibold text-black">
            Destination
          </label>
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="
              bg-white border border-gray-300
              rounded-lg
              px-4 py-2
              2xl:px-5 2xl:py-3
              2xl:text-lg
              outline-none
              cursor-pointer
            "
          >
            <option value="">Select your destination</option>
            <option>France</option>
            <option>Spain</option>
            <option>USA</option>
          </select>
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <button
            type="submit"
            className="
              w-full
              bg-[#6A2CF3]
              hover:bg-purple-700
              text-white
              transition
              rounded-full
              font-semibold
              py-2 px-6
              2xl:py-3 2xl:text-lg
            "
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
