import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { plasterDecorProducts } from '../data/plasterDecorData';
import { useTranslation } from 'react-i18next';
import AddToCart from '../components/AddToCart';
import { generateProductJsonLd } from '../utils/structuredData';
import { convertPrice, getCurrency } from '../utils';
import './PlasterDecor.css';

export default function PlasterDecorDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const product = plasterDecorProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {

    if (product) {
      document.title = `${product.name} | HobArt ${t("PlasterDecor")}`;
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        `${product.description} | HobArt-ის ხელნაკეთი ${t("PlasterDecor").toLowerCase()}.`
      );

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(generateProductJsonLd(product));
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product, t]);

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>{t("productDetail.notFound")}</p>
        <Link to="/products/plaster-decor" className="back-link">
          {t("productDetail.backToPlasterDecor")}
        </Link>
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
            <span itemProp="price" content={String(product.price)}>
              {convertPrice(product.price, i18n.language)}{getCurrency(i18n.language)}
            </span>
          </span>
        </p>
        <AddToCart product={product} />
        <Link to="/products/plaster-decor" className="back-link" aria-label={t("productDetail.backToPlasterDecor")}>
          {t("productDetail.backToPlasterDecor")}
        </Link>
      </div>
    </article>
  );
}
