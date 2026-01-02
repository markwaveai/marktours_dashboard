import NavBar from "./NavBar";
import heroVideo from "/assets/travel.mp4";

export default function Hero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-fill"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <NavBar />
    </section>
  );
}