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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM DATA 👉", form);
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 2xl:px-20 mt-8">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-7xl
          3xl:max-w-[90vw]
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
          <label className="text-sm sm:text-base 2xl:text-lg font-semibold text-black">
            Name
          </label>
          <input
            name="name"
            placeholder="Enter Name Here"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 sm:py-2.5 2xl:px-5 2xl:py-3 2xl:text-lg outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base 2xl:text-lg font-semibold text-black">
            Phone Number
          </label>
          <input
            name="phone"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 sm:py-2.5 2xl:px-5 2xl:py-3 2xl:text-lg outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base 2xl:text-lg font-semibold text-black">
            Email
          </label>
          <input
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 sm:py-2.5 2xl:px-5 2xl:py-3 2xl:text-lg outline-none"
          />
        </div>

        {/* Destination */}
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base 2xl:text-lg font-semibold text-black">
            Destination
          </label>
          <input
            name="destination"
            placeholder="Enter Destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 sm:py-2.5 2xl:px-5 2xl:py-3 2xl:text-lg outline-none"
          />
        </div>

        {/* Pincode */}
        <div className="flex flex-col gap-2">
          <label className="text-sm sm:text-base 2xl:text-lg font-semibold text-black">
            Pincode
          </label>
          <input
            name="pincode"
            placeholder="Enter Pincode"
            value={form.pincode}
            onChange={handleChange}
            className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 sm:py-2.5 2xl:px-5 2xl:py-3 2xl:text-lg outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex w-full">
          <button
            type="submit"
            className="
              w-full
              bg-[#6A2CF3]
              hover:bg-purple-700
              text-white
              transition
              rounded-lg
              font-semibold
              py-2.5 sm:py-3 2xl:py-4
              2xl:text-lg
            "
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
