// src/pages/Accessories.jsx
import React from "react";
import { Link } from "react-router-dom";
import { accessoriesProducts } from "../data/accessoriesData";
import "./Accessories.css";

export default function Accessories() {
  return (
    <section className="accessories-section">
      <h2 className="section-title">აქსესუარები</h2>

      <div className="products-grid">
        {accessoriesProducts.map((product) => (
          <Link key={product.id} to={`/products/accessory/${product.id}`} className="product-card">
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
