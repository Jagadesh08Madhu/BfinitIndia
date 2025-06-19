import { useEffect, useState } from "react";
import React from 'react';

export default function WebHosting() {
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(7);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const webHostingProducts = [
    {
      id: 7,
      title: "Small Business Web Hosting",
    },
    {
      id: 4,
      title: "Professional Web Hosting",
    },
    {
      id: 5,
      title: "Performance Web Hosting",
    },
  ];
useEffect(() => {
  setLoading(true);
  setError(null);

  fetch(`https://hpanel.bfinit.com/public/api/product/list/id/${productId}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP status ${res.status}`);
      return res.json();
    })
    .then(data => {
      if (data.success && Array.isArray(data.data)) {
        setProducts(data.data);
      } else {
        setProducts([]);
        setError("No data found.");
      }
      setLoading(false);
    })
    .catch(error => {
      console.error("Fetch error:", error.message);
      setError("Failed to load data");
      setProducts([]);
      setLoading(false);
    });
}, [productId]);


  return (
    <section className="py-32">
      {/* Category Buttons */}
      <div className="flex gap-5 justify-center mb-8">
        {webHostingProducts.map((product) => (
          <h1
            key={product.id}
            onClick={() => setProductId(product.id)}
            className={`cursor-pointer border py-2 px-4 rounded-xl border-black transition ${
              productId === product.id ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {product.title}
          </h1>
        ))}
      </div>

      {/* Loading / Error / Product Data */}
      <div className="text-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : products.length > 0 ? (
          products.map((prod) => (
            <div
              key={prod.id}
              className="border p-4 m-2 rounded-lg shadow w-full max-w-md mx-auto text-left"
            >
              <h2 className="text-xl font-bold">{prod.name}</h2>
              <p><strong>Price:</strong> ${prod.defaultStorage?.price ?? "N/A"}</p>
              <p><strong>Websites:</strong> {prod.processor}</p>
              <p><strong>Mailboxes:</strong> {prod.core}</p>
              <p><strong>Storage:</strong> {prod.defaultStorage?.storage ?? "N/A"}</p>
              <p><strong>Data Centers:</strong> {JSON.parse(prod.data_center || "[]").join(", ")}</p>
              <p><strong>Duration:</strong> {prod.server_subscription_periods?.map(p => p.period_time + " mo").join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}
