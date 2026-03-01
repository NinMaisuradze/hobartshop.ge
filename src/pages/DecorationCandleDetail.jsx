import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useTranslation } from "react-i18next";
import AddToCart from "../components/AddToCart";
import "./DecorationCandleDetail.css";
import { generateProductJsonLd } from '../utils/structuredData';
import { useStore } from '../contexts/StoreContext';
import { convertPrice, getCurrency } from '../utils';

export default function DecorationCandleDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { toggleWishlist, wishlist } = useStore();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>{t("productDetail.notFound")}</p>
        <Link to="/products/decoration-candle" className="back-link">
          {t("productDetail.backToDecorationCandles")}
        </Link>
      </div>
    );
  }

  useEffect(() => {
    if (product) {
      document.title = `${product.title[lang] || product.title.en} | HobArt`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', `${t("productDetail.description")} ${product.title[lang] || product.title.en}`);

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      const jsonLd = generateProductJsonLd({
        name: product.title[lang] || product.title.en,
        image: product.img,
        description: t("productDetail.description"),
        price: String(product.price)
      });
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [product, lang, t]);

  const isInWishlist = wishlist?.some((p) => p.id === product?.id);

  return (
    <section className="product-detail" itemScope itemType="https://schema.org/Product">
      {/* Product Image */}
      <div className="product-detail-img">
        <img src={product.img} alt={product.title[lang]} itemProp="image" />
      </div>

      {/* Product Information */}
      <div className="product-detail-info">
        {/* Title */}
        <h1 itemProp="name">
          {product.id === 1
            ? t("productDetail.titleCoupleCandle") 
            : product.title[lang]}
        </h1>

        {/* Description and Price */}
        <p itemProp="description">{t("productDetail.description")}</p>
        <p className="price">
          <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="GEL" />
            <span itemProp="price" content={String(product.price)}>
              {convertPrice(product.price, i18n.language)}{getCurrency(i18n.language)}
            </span>
          </span>
        </p>

        {/* Add to Cart */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <AddToCart product={product} />
          <button
            aria-pressed={isInWishlist}
            onClick={() => toggleWishlist({ id: product.id, name: product.title[lang] || product.title.en })}
            className="wishlist-btn"
          >
            {isInWishlist ? '♥ შიგშია' : '♡ დაამატე სურვილების სიაში'}
          </button>
        </div>

        {/* Back Link */}
        <Link to="/products/decoration-candle" className="back-link">
          {t("productDetail.backToDecorationCandles")}
        </Link>
      </div>
    </section>
  );
}
