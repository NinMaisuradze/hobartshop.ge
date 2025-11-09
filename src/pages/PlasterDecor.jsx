import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './PlasterDecor.css';
import { plasterDecorProducts } from '../data/plasterDecorData';

const PlasterDecor = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="plaster-decor-section">
      <div className="plaster-decor-container">
        <h1>{t('plaster Decor')}</h1>

        <div className="plaster-decor-grid">
        {plasterDecorProducts.map((p) => (
          <Link key={p.id} to={`/products/plaster-decor/${p.id}`} className="product-card">
            <div className="img-wrapper">
              <img src={p.image} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
          </Link>
        ))}
      </div>

      <div className="link-wrapper">
        <Link to="/products/plaster-decor" className="view-more-link">
          {i18n.language === 'ka' ? 'მეტის ნახვა' : 'View More'}
        </Link>
      </div>
      </div>
    </section>
  );
};

export default PlasterDecor;