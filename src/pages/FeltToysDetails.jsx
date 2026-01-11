import React from "react";
import { useParams, Link } from "react-router-dom";
import { feltToysProducts } from "../data/feltToysData";
import { useTranslation } from "react-i18next";
import AddToCart from "../components/AddToCart";
import "../pages/FeltToysDetails.css";
import { convertPrice, getCurrency } from "../utils";

export default function FeltToysDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const product = feltToysProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-detail not-found">
        <p>{t("productDetail.notFound")}</p>
        <Link to="/products/felt-toys" className="back-link">
          {t("productDetail.backToFeltToys")}
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
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p className="price">{convertPrice(product.price, i18n.language)}{getCurrency(i18n.language)}</p>
        <AddToCart product={product} />
        <Link to="/products/felt-toys" className="back-link">
          {t("productDetail.backToFeltToys")}
        </Link>
      </div>
    </section>
  );
}
