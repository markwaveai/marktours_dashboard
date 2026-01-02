import NavBar from "./NavBar";
import heroVideo from "/assets/Travel-Video.mp4";

export default function Hero() {
  return (
    <section className="">

      <video
        className="w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline 
      />

      <div className="">
        <NavBar />
      </div>

    </section>
  );
}