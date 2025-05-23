import React from 'react';
import { FiUser } from 'react-icons/fi';
import testimonialsData from "../../data/testi.json";

export default function Testi() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-heading font-semibold text-center mb-8">
        Testimoni Pengguna
      </h2>
      <div className="space-y-10 max-w-3xl mx-auto">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="flex items-center space-x-6">
            {/* Ganti img dengan icon user */}
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
              <FiUser />
            </div>
            <div>
              <p className="font-heading font-semibold text-lg">{testimonial.name}</p>
              <p className="text-gray-600 font-sans italic mt-1">{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
