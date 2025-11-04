import React from "react";
import "./BestSellers.css";
import s1 from "./images/B1.jpg";
import s2 from "./images/B2.jpg";
import s3 from "./images/B3.jpg";
import s51 from './images/s51.jpg'; 
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function BestSellers() {
  const { t } = useTranslation();

  const items = [
    { id: 1, title: t("bestSeller1"), img: s1, link: "/products/decoration-candle" },
    { id: 2, title: t("bestSeller2"), img: s2, link: "/products/accessory" },
    { id: 3, title: t("bestSeller3"), img: s3, link: "/products/accessory" },
    { id: 4, title: t("bestSeller4"), img: s51, link: "/products/holiday-candle"},
  ];

  return (
    <section id="best-sellers" className="best-sellers">
      <div className="container">
        <h2>{t("bestSellersTitle")}</h2>
        <p>{t("bestSellersText")}</p>
        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="card">
              <Link to={item.link}>
                <img src={item.img} alt={item.title} />
                <div className="card-content">
                  <h3>{item.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
