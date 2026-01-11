import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useTranslation } from "react-i18next";
import AddToCart from "../components/AddToCart";
import "./DecorationCandleDetail.css";

export default function DecorationCandleDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

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

  return (
    <section className="product-detail">
      {/* Product Image */}
      <div className="product-detail-img">
        <img src={product.img} alt={product.title[lang]} />
      </div>

      {/* Product Information */}
      <div className="product-detail-info">
        {/* Title */}
        <h1>
          {product.id === 1
            ? t("productDetail.titleCoupleCandle") 
            : product.title[lang]} 
        </h1>

        {/* Description and Price */}
        <p>{t("productDetail.description")}</p>
        <p className="price">{t("productDetail.price")}</p>

        {/* Add to Cart */}
        <AddToCart product={product} />

        {/* Back Link */}
        <Link to="/products/decoration-candle" className="back-link">
          {t("productDetail.backToDecorationCandles")}
        </Link>
      </div>
    </section>
  );
}
