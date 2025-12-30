import NavBar from "./NavBar";
import heroVideo from "/assets/Travel-Video.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline 
      />

      {/* Optional dark overlay for better navbar visibility */}
      <div className="absolute inset-0" />

      {/* Navbar stays on top */}
      <div className="relative z-10">
        <NavBar />
      </div>

    </section>
  );
}
