export default function DreamsBanner() {
  return (
    <section className="w-full flex justify-center px-6 py-16">
      <div className="relative w-full max-w-7xl rounded-2xl overflow-hidden bg-gradient-to-r from-[#240a82] via-[#5b27ff] to-[#240a82] text-white">

        {/* 🔥 Moving Main Heading */}
        <div className="overflow-hidden mt-20">
          <h1 className="whitespace-nowrap text-5xl md:text-6xl font-extrabold tracking-widest animate-main-move opacity-80">
            FROM DREAMS TO DESTINATION &nbsp; FROM DREAMS TO DESTINATION
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-20 px-6">
          <p className="mt-6 text-lg md:text-xl opacity-90">
            World Best Travel Agency Company
          </p>

          <p className="mt-2 text-base opacity-80">
            Since 2023
          </p>

          <button className="mt-8 bg-[#EEFB56] text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-300 transition">
            READ MORE
          </button>
        </div>

        {/* ================= DECORATIVE IMAGES ================= */}

        {/* 1️⃣ Left – Eiffel Tower */}
        <img
          src="/img/eiffel.png"
          alt="Eiffel Tower"
          className="absolute left-10 bottom-24 w-20 opacity-40 animate-float"
        />

        {/* 2️⃣ Bottom Left – Pyramid */}
        <img
          src="/img/pyramid.png"
          alt="Pyramid"
          className="absolute left-28 bottom-0 w-40 opacity-40 animate-float-delay-1"
        />

        {/* 3️⃣ Center Bottom – Colosseum */}
        <img
          src="/img/colosseum.png"
          alt="Colosseum"
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-56 opacity-40 animate-float-delay-2"
        />

        {/* 4️⃣ Bottom Right – Statue */}
        <img
          src="/img/statue.png"
          alt="Statue"
          className="absolute right-28 bottom-0 w-44 opacity-40 animate-float-delay-1"
        />

        {/* 5️⃣ Right – Temple */}
        <img
          src="/img/temple.png"
          alt="Temple"
          className="absolute right-10 bottom-24 w-24 opacity-40 animate-float"
        />

      </div>
    </section>
  );
}
