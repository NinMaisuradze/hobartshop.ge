import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../../data/products";
import { useTranslation } from "react-i18next";
import "./DecorationCandleDetail.css";

export default function DecorationCandleDetail({ lang }) {
  const { id } = useParams();
  const { t } = useTranslation();

  // მოძებნეთ პროდუქტი products მასივში
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>{t("productDetail.notFound")}</p>
        <Link to="/products/decoration-candle" className="back-link">
          {t("productDetail.backToList")}
        </Link>
      </div>
    );
  }

  return (
    <section className="product-detail">
      {/* პროდუქტის ფოტო */}
      <div className="product-detail-img">
        <img src={product.img} alt={product.title[lang]} />
      </div>

      {/* პროდუქტის ინფორმაცია */}
      <div className="product-detail-info">
        {/* ორენოვანი სათაური */}
        <h1>
          {product.id === 1
            ? t("productDetail.titleCoupleCandle") // წყვილის სანთელი
            : product.title[lang]} 
        </h1>

        {/* აღწერა და ფასი თარგმანით */}
        <p>{t("productDetail.description")}</p>
        <p className="price">{t("productDetail.price")}</p>

        {/* უკან ბმული */}
        <Link to="/products/decoration-candle" className="back-link">
          {t("productDetail.back")}
        </Link>
      </div>
    </section>
  );
}
