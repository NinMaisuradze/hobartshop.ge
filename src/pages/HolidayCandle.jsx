import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { holidayCandleProducts } from "../data/holidayCandleData";
import ErrorBoundary from "../components/ErrorBoundary";
import "./HolidayCandle.css";

function HolidayCandlePage() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section className="holiday-candle-section">
      <h2 className="section-title">
        {currentLang === "ka" ? "სადღესასწაულო სანთლები" : "Holiday Candles"}
      </h2>

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

      <div className="link-wrapper">
        <Link to="/products/holiday-candle" className="view-more-link">
          {currentLang === "ka" ? "მეტის ნახვა" : "View More"}
        </Link>
      </div>
    </section>
  );
}

export default HolidayCandlePage;
