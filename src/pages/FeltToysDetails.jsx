import React from "react";
import { useParams, Link } from "react-router-dom";
import { feltToysProducts } from "../data/feltToysData";
import "../pages/FeltToysDetails.css";

export default function FeltToysDetails() {
  const { id } = useParams();

  const product = feltToysProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>პროდუქტი ვერ მოიძებნა</h2>;
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
        <Link to="/products/felt-toys" className="back-link">უკან სათამაშოებში</Link>
      </div>
    </section>
  );
}
