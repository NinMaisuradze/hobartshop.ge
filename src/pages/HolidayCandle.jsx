import React from "react";
import HolidayCandle from "../components/HolidayCandle";
import { holidayCandleProducts } from "../data/holidayCandleData";
import "../components/HolidayCandle.css";

const HolidayCandlePage = () => {
  return (
    <div className="holiday-candle-page">
      <h1>Holiday Candle</h1>
      <div className="holiday-candle-grid">
        {holidayCandleProducts.map((product) => (
          <HolidayCandle
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HolidayCandlePage;
