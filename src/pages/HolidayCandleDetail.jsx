import React from "react";
import { useParams, Link } from "react-router-dom";
import { holidayCandleProducts } from "../data/holidayCandleData";
import { useTranslation } from "react-i18next";
import AddToCart from "../components/AddToCart";
import "./HolidayCandleDetail.css";
import { convertPrice, getCurrency } from "../utils";

export default function HolidayCandleDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const product = holidayCandleProducts.find((p) => p.id === parseInt(id));

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

  return (
    <section className="product-detail">
      <div className="product-detail-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <div className="product-header">
          <h1>{product.name}</h1>
          <span className="category-badge">{lang === "ka" ? product.categoryName_ka : product.categoryName_en}</span>
        </div>
        
        <p className="description">{product.description}</p>
        
        <p className="price">{convertPrice(product.price, i18n.language)}{getCurrency(i18n.language)}</p>

        <AddToCart product={product} />

        <Link to="/products/holiday-candle" className="back-link">
          {t("productDetail.back")}
        </Link>
      </div>
    </section>
  );
}
