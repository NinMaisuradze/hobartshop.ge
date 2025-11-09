import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { feltToysProducts } from '../data/feltToysData';
import './FeltToys.css';

export default function FeltToysDetail() {
  const { id } = useParams();
  const product = feltToysProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>პროდუქტი ვერ მოიძებნა</p>
  <Link to="/products/felt-toys" className="back-link">უკან თექის სათამაშოებში</Link>
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
        <Link to="/products/felt-toys" className="back-link">უკან თექის სათამაშოებში</Link>
      </div>
    </section>
  );
}
