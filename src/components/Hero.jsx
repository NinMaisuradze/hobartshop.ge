import "./Hero.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; 
import s1 from "../components/images/s1.jpg";
import s2 from "../components/images/s2.jpg";
import s3 from "../components/images/s3.jpg";
import s4 from "../components/images/s4.jpg";
import s5 from "../components/images/S5.jpg"; 

export default function Hero() {
  const { t } = useTranslation(); 
  const images = [s1, s2, s3, s4, s5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
      <a href="#best-sellers" className="btn-primary">
        {t("hero.button")}
      </a>
    </section>
  );
}
