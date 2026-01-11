import React from "react";
import { useParams, Link } from "react-router-dom";
import { accessoriesProducts } from "../data/accessoriesData";
import { useTranslation } from "react-i18next";
import AddToCart from "../components/AddToCart";
import "./AccessoriesDetail.css";

export default function AccessoriesDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const product = accessoriesProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail not-found">
          <p>{t("productDetail.notFound")}</p>
          <Link to="/products/accessories" className="back-link">
            {t("productDetail.backToAccessories")}
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
        <p className="price">{product.price}</p>
        <AddToCart product={product} />
        <Link to="/products/accessories" className="back-link">
          {t("productDetail.backToAccessories")}
        </Link>
      </div>
    </section>
  );
}
