export default function BookNowButton({ onClick, variant = "yellow", className = "" }) {
  const styles = {
    yellow: "bg-[#F2FF46] text-black",
    purple: "bg-[#551DEF] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-xl text-sm font-semibold hover:brightness-110 transition whitespace-nowrap ${styles[variant]} ${className}`}
    >
      Book Now
    </button>
  );
}
