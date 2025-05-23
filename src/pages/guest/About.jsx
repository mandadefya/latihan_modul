import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-8 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-heading mb-4">Tentang Kami</h2>
      <p className="max-w-xl mx-auto text-gray-700 font-sans mb-6">
       Bumi Rasa, restoran nyaman di Pekanbaru dengan hidangan lezat dan harga terjangkau. Nikmati cita rasa lokal terbaik dalam suasana hangat dan ramah.
      </p>
      <Link 
        to="/cek-ketersediaan-produk" 
        className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
      >
        Cek Ketersediaan Produk
      </Link>
    </section>
  );
}
