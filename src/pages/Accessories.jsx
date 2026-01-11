import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { accessoriesProducts } from "../data/accessoriesData";
import "./Accessories.css";
import { convertPrice, getCurrency } from "../utils";

function Accessories() {
  const { t, i18n } = useTranslation();
  return (
    <section className="accessories-section">
      <h2 className="section-title">აქსესუარები</h2>

      <div className="products-grid">
        {accessoriesProducts.map((product) => (
          <Link key={product.id} to={`/products/accessories/${product.id}`} className="product-card">
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">{convertPrice(product.price, i18n.language)}{getCurrency(i18n.language)}</p>
          </Link>
        ))}
      </div>

      <div className="link-wrapper">
        <Link to="/products/accessories" className="view-more-link">
          {i18n.language === "ka" ? "მეტის ნახვა" : "View More"}
        </Link>
      </div>
    </section>
  );
}

export default Accessories;
