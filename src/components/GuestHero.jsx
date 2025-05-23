import React from "react";
import heroImage from "../assets/hero.jpg";

export default function GuestHero() {
  return (
    <section
      className="relative h-[300px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-serif font-bold mb-4">Product</h1>
        <nav className="flex justify-center space-x-2 text-sm font-semibold text-white/80">
          <a href="/" className="hover:text-green-500">Home</a>
          <span>/</span>
          <span className="text-green-400">Product</span>
        </nav>
      </div>
    </section>
  );
}
