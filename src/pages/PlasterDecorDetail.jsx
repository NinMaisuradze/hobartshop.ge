import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { plasterDecorProducts } from '../data/plasterDecorData';
import { generateProductJsonLd } from '../utils/structuredData';
import './PlasterDecor.css';

export default function PlasterDecorDetail() {
  const { id } = useParams();
  const product = plasterDecorProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {

    if (product) {
      document.title = `${product.name} | HobArt თაბაშირის დეკორი`;
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        `${product.description} | HobArt-ის ხელნაკეთი თაბაშირის დეკორი.`
      );

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(generateProductJsonLd(product));
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product]);

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>პროდუქტი ვერ მოიძებნა</p>
        <Link to="/products/plaster-decor" className="back-link">უკან თაბაშირის დეკორზე</Link>
      </div>
    );
  }

  return (
    <article className="product-detail" itemScope itemType="https://schema.org/Product">
      <div className="product-detail-img">
        <img src={product.image} alt={product.name} itemProp="image" />
      </div>
      <div className="product-detail-info">
        <h1 itemProp="name">{product.name}</h1>
        <p className="description" itemProp="description">{product.description}</p>
        <p className="price">
          <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="GEL" />
            <span itemProp="price" content={product.price?.replace('₾', '').trim()}>
              {product.price}
            </span>
          </span>
        </p>
        <Link to="/products/plaster-decor" className="back-link" aria-label="უკან თაბაშირის დეკორის გვერდზე">
          უკან თაბაშირის დეკორზე
        </Link>
      </div>
    </article>
  );
}
