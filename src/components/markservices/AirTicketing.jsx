import airplane from "/assets/packages/airplane.png";

export default function AirTicketing() {
  return (
    <section className="w-full px-4 md:px-10 py-16">
      <div
        className="
          bg-[#6E6664]
          rounded-[32px]
          px-8 md:px-16
          py-16
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-10
          border
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4B2EFF] leading-tight">
            FLY IN STYLE ARRIVE <br /> IN COMFORT
          </h1>

          <p className="mt-4 text-white/90 text-sm md:text-base">
            Discover Exclusive Deals On Premium And First-Class
            Flights For Your Ultimate Travel Experience
          </p>

          <button className="mt-6 bg-[#EEFB56] hover:bg-lime-300 px-10 py-3 rounded-full font-semibold text-black">
            BOOK NOW
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[45%] flex justify-center">
          <img
            src={airplane}
            alt="Airplane"
            className="w-[280px] md:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
