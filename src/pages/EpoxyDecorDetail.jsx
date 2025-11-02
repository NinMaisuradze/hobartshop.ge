import React from "react";
import { useParams, Link } from "react-router-dom";
import { epoxyDecorProducts } from "../data/epoxyDecorData";
import "./EpoxyDecorDetail.css";

export default function EpoxyDecorDetail() {
  const { id } = useParams();

  const product = epoxyDecorProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>პროდუქტი ვერ მოიძებნა</p>
        <Link to="/products/epoxy-decor" className="back-link">
          უკან დეკორაციების სიაში
        </Link>
      </div>
    );
  }

  return (
    <section className="product-detail">
      <div className="product-detail-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>

        <Link to="/products/epoxy-decor" className="back-link">
          უკან დეკორაციების სიაში
        </Link>
      </div>
    </section>
  );
}
