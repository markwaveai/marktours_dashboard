

import React from "react";

const cards = [
  { title: "Hi Everyone!", img: "/assets/images/test/test1.jpeg" },
  { title: "Hey This is Siddhu", img: "/assets/images/test/test2.jpeg" },
  { title: "Sanjay Verma", img: "/assets/images/test/test3.jpeg" },
  { title: "We are Happy to", img: "/assets/images/test/test4.jpeg" },
];

export default function Testimonials() {
  return (
    <div className="bg-[#F2FF46] min-h-screen w-full">
      
      {/* HEADER */}
      <div className="text-center pt-16">
        <p className="text-sm text-gray-700">Real Travelers, Real Stories</p>
        <h1 className="text-3xl font-bold mt-2">TESTIMONIALS</h1>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto mt-14 px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative h-[460px] overflow-hidden rounded-t-[200px] rounded-b-[40px] group"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition duration-500" />
              <div className="absolute bottom-8 left-6 right-6 text-white">
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
