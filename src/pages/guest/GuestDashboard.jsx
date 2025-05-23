import React from "react";
import About from "./About";
import TopProducts from "./Product";
import Testi from "./Testi";
import ProductDetail from "./ProductDetail";

export default function GuestDashboard() {
  return (
    <div className="bg-white min-h-screen font-sans">
    

      {/* About Section */}
      <About />
      <ProductDetail/>
      <TopProducts />

      {/* Testimonial */}
      <Testi />
    </div>
  );
}
