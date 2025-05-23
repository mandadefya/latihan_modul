// src/pages/Orders.jsx
import React, { useState } from "react";
import ordersData from "../data/orders.json";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [showAddOrderForm, setShowAddOrderForm] = useState(false);
  const [newOrder, setNewOrder] = useState({
    orderId: "",
    customerName: "",
    status: "",
    totalPrice: "",
    orderDate: "",
  });

  const handleAddOrderClick = () => {
    setShowAddOrderForm(!showAddOrderForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Order:", newOrder);
    setNewOrder({
      orderId: "",
      customerName: "",
      status: "",
      totalPrice: "",
      orderDate: "",
    });
    setShowAddOrderForm(false);
  };

  return (
    <div>
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
        <button
          className="bg-hijau text-white px-4 py-2 rounded-lg"
          onClick={handleAddOrderClick}
        >
          {showAddOrderForm ? "Cancel" : "Add Order"}
        </button>
      </PageHeader>

      {showAddOrderForm && (
        <form
          className="p-4 bg-white shadow-md rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-lg mb-4">Add New Order</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={newOrder.customerName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              value={newOrder.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Total Price</label>
            <input
              type="number"
              name="totalPrice"
              value={newOrder.totalPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Order Date</label>
            <input
              type="date"
              name="orderDate"
              value={newOrder.orderDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-hijau text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      )}

<div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {ordersData.map((order) => (
    <div key={order.orderId} className="bg-white shadow p-4 rounded-lg">
      <h2 className="font-bold text-lg">Order ID: {order.orderId}</h2>
      <p>Customer: {order.customerName}</p>
      <p>Status: {order.status}</p>
      <p>Total: {order.totalPrice}</p>
      <p>Date: {order.orderDate}</p>
    </div>
  ))}
</div>

    </div>
  );
}
