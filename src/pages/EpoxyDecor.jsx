import React from "react";
import { Link } from "react-router-dom";
import { epoxyDecorProducts } from "../data/epoxyDecorData";
import "./EpoxyDecor.css";
import { useTranslation } from "react-i18next";
import { convertPrice, getCurrency } from "../utils";

export default function EpoxyDecor() {
  const { i18n } = useTranslation();
  return (
    <section className="epoxy-decor-section">
      <h2 className="section-title">Epoxy Decor</h2>

      <div className="products-grid">
        {epoxyDecorProducts.map((p) => (
          <Link key={p.id} to={`/products/epoxy-decor/${p.id}`} className="product-card">
            <div className="img-wrapper">
              <img src={p.image} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p className="description">{p.description}</p>
            <p className="price">{convertPrice(p.price, i18n.language)}{getCurrency(i18n.language)}</p>
          </Link>
        ))}
      </div>

      <div className="link-wrapper">
        <Link to="/products/epoxy-decor" className="view-more-link">
          მეტის ნახვა
        </Link>
      </div>
    </section>
  );
}
