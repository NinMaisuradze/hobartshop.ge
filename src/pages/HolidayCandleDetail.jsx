import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { holidayCandleProducts } from "../data/holidayCandleData";
import { useTranslation } from "react-i18next";
import AddToCart from "../components/AddToCart";
import "./HolidayCandleDetail.css";
import { convertPrice, getCurrency } from "../utils";
import { generateProductJsonLd } from '../utils/structuredData';
import { useStore } from '../contexts/StoreContext';

export default function HolidayCandleDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const product = holidayCandleProducts.find((p) => p.id === parseInt(id));

  const { toggleWishlist, wishlist } = useStore();

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>{t("productDetail.notFound")}</p>
        <Link to="/products/holiday-candle" className="back-link">
          {t("productDetail.backToHolidayCandles")}
        </Link>
      </div>
    );
  }
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | HobArt`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', `${product.description} | HobArt-ის ხელნაკეთი სანთელი`);

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(generateProductJsonLd({
        name: product.name,
        image: product.image,
        description: product.description,
        price: String(product.price)
      }));
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product]);

  const isInWishlist = wishlist?.some((p) => p.id === product?.id);

  return (
    <section className="product-detail" itemScope itemType="https://schema.org/Product">
      <div className="product-detail-img">
        <img src={product.image} alt={product.name} itemProp="image" />
      </div>

      <div className="product-detail-info">
        <div className="product-header">
          <h1 itemProp="name">{product.name}</h1>
          <span className="category-badge">{lang === "ka" ? product.categoryName_ka : product.categoryName_en}</span>
        </div>
        
        <p className="description" itemProp="description">{product.description}</p>

        <p className="price">
          <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="GEL" />
            <span itemProp="price" content={String(product.price)}>
              {convertPrice(product.price, i18n.language)}{getCurrency(i18n.language)}
            </span>
          </span>
        </p>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <AddToCart product={product} />
          <button
            aria-pressed={isInWishlist}
            onClick={() => toggleWishlist({ id: product.id, name: product.name })}
            className="wishlist-btn"
          >
            {isInWishlist ? '♥ შიგშია' : '♡ დამატება სურვილების სიაში'}
          </button>
        </div>

        <Link to="/products/holiday-candle" className="back-link">
          {t("productDetail.back")}
        </Link>
      </div>
    </section>
  );
}
