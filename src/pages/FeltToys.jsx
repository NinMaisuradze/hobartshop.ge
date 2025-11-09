import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './FeltToys.css';
import { feltToysProducts } from '../data/feltToysData';

const FeltToys = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="felt-toys-section">
      <div className="felt-toys-container">
        <h1>{t('felt Toys')}</h1>
        <div className="felt-toys-grid">
        {feltToysProducts.map((p) => (
          <Link key={p.id} to={`/products/felt-toys/${p.id}`} className="product-card">
            <div className="img-wrapper">
              <img src={p.image} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
          </Link>
        ))}
      </div>

      <div className="link-wrapper">
        <Link to="/products/felt-toys" className="view-more-link">
          {i18n.language === 'ka' ? 'მეტის ნახვა' : 'View More'}
        </Link>
      </div>
      </div>
    </section>
  );
};

export default FeltToys;