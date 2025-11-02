import React from "react";
import { Link } from "react-router-dom";
import { epoxyDecorProducts } from "../data/epoxyDecorData";
import "./EpoxyDecor.css";

export default function EpoxyDecor() {
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
            <p className="price">{p.price}</p>
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
