import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { holidayCandleProducts } from "../data/holidayCandleData";
import ErrorBoundary from "../components/ErrorBoundary";
import "./HolidayCandle.css";

function HolidayCandlePage() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  // დავჯგუფოთ სანთლები კატეგორიების მიხედვით
  const groupedProducts = useMemo(() => {
    const grouped = {};
    holidayCandleProducts.forEach((product) => {
      const category = product.category;
      if (!grouped[category]) {
        grouped[category] = {
          name_ka: product.categoryName_ka,
          name_en: product.categoryName_en,
          products: [],
        };
      }
      grouped[category].products.push(product);
    });
    return grouped;
  }, []);

  return (
    <div className="holiday-candle-page">
      <div className="page-header">
        <h1 className="page-title">
          {currentLang === "ka" ? "სადღესასწაულო სანთლები" : "Holiday Candles"}
        </h1>
        <p className="page-subtitle">
          {currentLang === "ka"
            ? "თითოეული დღე აქვს საკუთარი სილამაზე და მისი სანთელი"
            : "Every occasion has its own beauty and candle"}
        </p>
      </div>

      <div className="categories-container">
        {Object.entries(groupedProducts).map(([categoryKey, categoryData]) => (
          <section key={categoryKey} className="category-section">
            <h2 className="category-title">
              {currentLang === "ka"
                ? categoryData.name_ka
                : categoryData.name_en}
            </h2>

            <div className="products-grid">
              {categoryData.products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/holiday-candle/${product.id}`}
                  className="product-card"
                >
                  <div className="img-wrapper">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <span className="view-details">
                        {currentLang === "ka" ? "დეტალები" : "View Details"}
                      </span>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="price">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default HolidayCandlePage;
