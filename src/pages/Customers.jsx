import { useState } from "react";
import customersData from "../data/customers.json";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [customers, setCustomers] = useState(customersData);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    loyalty: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      customerId: `CUST${customers.length + 1}`,
      ...formData,
    };
    setCustomers([newCustomer, ...customers]);
    setFormData({
      customerName: "",
      email: "",
      phone: "",
      loyalty: "",
    });
    setShowForm(false);
  };

  return (
    <div>
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
        <button
          className="bg-hijau text-white px-4 py-2 rounded-lg"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add Customer"}
        </button>
      </PageHeader>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow mb-4"
        >
          <h2 className="font-bold mb-2">Add New Customer</h2>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Customer Name"
            required
            className="mb-2 w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="mb-2 w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="mb-2 w-full p-2 border rounded"
          />
          <input
            type="text"
            name="loyalty"
            value={formData.loyalty}
            onChange={handleChange}
            placeholder="Loyalty Status"
            required
            className="mb-2 w-full p-2 border rounded"
          />
          <input
            type="date"
            name="joinedDate"
            value={formData.joinedDate}
            onChange={handleChange}
            required
            className="mb-2 w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-hijau text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((customer) => (
          <div
            key={customer.customerId}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="font-bold text-lg">{customer.customerName}</h2>
            <p>Customer ID: {customer.customerId}</p>{" "}
            {/* Menampilkan customerId */}
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Loyalty Status: {customer.loyalty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
