import dream1 from "/assets/dreams-images/dream1.png";
import dream3 from "/assets/dreams-images/dreams3.png";
import dream4 from "/assets/dreams-images/dreams4.png";
import dream5 from "/assets/dreams-images/dream5.png";
export default function DreamsBanner() {
  return (
    <section className="w-full flex justify-center px-6 py-16">
      <div className="relative w-full max-w-[90rem] rounded-2xl overflow-hidden bg-gradient-to-r from-[#240D62] via-[#491BC8] to-[#240D62] text-white">

        {/* 🔥 Moving Main Heading */}
        <div className="overflow-hidden mt-2">
          <h1 className="whitespace-nowrap text-[10rem] md:text-10xl font-extrabold tracking-widest animate-main-move opacity-80">
            FROM DREAMS TO DESTINATION &nbsp; FROM DREAMS TO DESTINATION
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-6 px-6">
          <p className="mt-1 text-lg md:text-4xl opacity-90">
            World Best Travel Agency Company
          </p>

          <p className="mt-2 text-3xl opacity-80">
            Since 2023
          </p>

          <button className="mt-8 bg-[#EEFB56] text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-300 transition">
            READ MORE
          </button>
        </div>

        {/* ================= DECORATIVE IMAGES ================= */}

        {/* 1️⃣ Left – Eiffel Tower */}
        <img
          src={dream1}
          alt="Eiffel Tower"
          className="absolute left-10 bottom-24 w-20 opacity-40 animate-float"
        />

        {/* 2️⃣ Bottom Left – Pyramid */}
        <img
          src={dream5}
          alt="Pyramid"
          className="absolute left-64 bottom-0 w-40 opacity-40 animate-float-delay-1"
        />

        {/* 3️⃣ Center Bottom – Colosseum */}
        <img
          src={dream3}
          alt="Colosseum"
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-56 opacity-40 animate-float-delay-2"
        />

        {/* 4️⃣ Bottom Right – Statue */}
        <img
          src={dream4}
          alt="Statue"
          className="absolute right-28 bottom-0 w-44 opacity-40 animate-float-delay-1"
        />

        

      </div>
    </section>
  );
}
