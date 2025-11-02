import React from "react";
import { useParams, Link } from "react-router-dom";
import { holidayCandleProducts } from "../data/holidayCandleData";
import "./HolidayCandleDetail.css";

export default function HolidayCandleDetail() {
  const { id } = useParams();

  const product = holidayCandleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>პროდუქტი ვერ მოიძებნა</p>
        <Link to="/products/holiday-candle" className="back-link">
          უკან სანთლების სიაში
        </Link>
      </div>
    );
  }

  return (
    <section className="product-detail">
      {/* პროდუქტის სურათი */}
      <div className="product-detail-img">
        <img src={product.image} alt={product.name} />
      </div>

      {/* პროდუქტის ინფორმაცია */}
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>

        {/* უკან ბმული */}
        <Link to="/products/holiday-candle" className="back-link">
          უკან სანთლების სიაში
        </Link>

        {/* მეტის ნახვის ღილაკი */}
        <div className="link-wrapper">
          <Link to="/products/holiday-candle" className="view-more-link">
            მეტის ნახვა
          </Link>
        </div>
      </div>
    </section>
  );
}
