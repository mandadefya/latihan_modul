import React, { useState } from "react";
import produkData from "../../data/tersedia.json";
import { FaShoppingCart, FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

export default function CekKetersediaan() {
  const [kodeProduk, setKodeProduk] = useState("");
  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);

    if (!kodeProduk.trim()) {
      setError("Kode produk tidak boleh kosong.");
      return;
    }
    // Karena kode sederhana, minimal 2 karakter (misal "P1")
    if (kodeProduk.trim().length < 2) {
      setError("Kode produk minimal 2 karakter.");
      return;
    }

    // Cari produk berdasarkan kode_produk (case insensitive)
    const produk = produkData.find(
      (p) => p.kode_produk.toLowerCase() === kodeProduk.trim().toLowerCase()
    );

    if (!produk) {
      setHasil({ status: "notfound" });
      return;
    }

    if (produk.stok > 0) {
      setHasil({ status: "available", produk });
    } else {
      setHasil({ status: "outofstock", produk });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Cek Ketersediaan Produk</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="kodeProduk" className="block mb-2 font-semibold">
          Kode Produk
        </label>
        <input
          id="kodeProduk"
          type="text"
          value={kodeProduk}
          onChange={(e) => setKodeProduk(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Masukkan kode produk (contoh: P1)"
        />
        {error && <p className="text-red-600 mt-1">{error}</p>}
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
        >
          Cek Produk
        </button>
      </form>

      {/* Tampilkan hasil */}
      {hasil && hasil.status === "available" && (
        <div className="p-4 border border-green-400 bg-green-50 rounded flex items-center space-x-4">
          <FaCheckCircle className="text-green-600 text-3xl" />
          <div>
            <p>
              ✅ Produk <strong>{hasil.produk.nama_produk}</strong> tersedia dengan harga{" "}
              <strong>Rp{hasil.produk.harga.toLocaleString()}</strong>.
            </p>
            <p>Stok tersedia: {hasil.produk.stok}</p>
            <FaShoppingCart className="text-green-600 mt-2" size={40} />
          </div>
        </div>
      )}

      {hasil && hasil.status === "outofstock" && (
        <div className="p-4 border border-yellow-400 bg-yellow-50 rounded flex items-center space-x-4">
          <FaExclamationTriangle className="text-yellow-600 text-3xl" />
          <div>
            <p>
              ⚠️ Produk <strong>{hasil.produk.nama_produk}</strong> saat ini sedang habis.
            </p>
            <div className="mt-2 text-center text-yellow-600 font-bold">
              OUT OF STOCK
            </div>
          </div>
        </div>
      )}

      {hasil && hasil.status === "notfound" && (
        <div className="p-4 border border-red-400 bg-red-50 rounded flex items-center space-x-4">
          <FaTimesCircle className="text-red-600 text-3xl" />
          <div>
            <p>❌ Kode produk tidak ditemukan.</p>
          </div>
        </div>
      )}
    </div>
  );
}
