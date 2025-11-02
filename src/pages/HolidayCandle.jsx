import React from "react";
import { Link } from "react-router-dom";
import { holidayCandleProducts } from "../data/holidayCandleData";
import "./HolidayCandle.css";

export default function HolidayCandlePage() {
  return (
    <section className="holiday-candle-section">
      <h2 className="section-title">სადღესასწაულო სანთლები</h2>

      <div className="products-grid">
        {holidayCandleProducts.map((p) => (
          <Link
            key={p.id}
            to={`/products/holiday-candle/${p.id}`}
            className="product-card"
          >
            <div className="img-wrapper">
              <img src={p.image} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
