import "./About.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* 🎥 ვიდეო */}
        <div className="about-video">
          {!videoError ? (
            <video
              src="/videos/about.mp4"
              controls
              autoPlay
              muted
              loop
              className="about-video-element"
              onError={() => {
                console.warn("About video failed to load: /videos/about.mp4");
                setVideoError(true);
              }}
            />
          ) : (
            <div className="about-video-fallback">
          
              <img
                src="/assets/images/products/soy-troubleshoot-guide-header.jpg"
                alt={t("about.title")}
                className="about-video-poster"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <p className="video-missing">{t("about.videoMissing", "Video not available")}</p>
              <p className="video-instruction">{t("about.videoInstruction", "Place your about.mp4 into /public/videos/about.mp4 to enable the video.")}</p>
            </div>
          )}
        </div>

    
        <h2>{t("about.title")}</h2>
        <p>{t("about.text1")}</p>
        <p>
          {t("about.text2")} {" "}
          <span className="font-medium">{t("about.textHighlight")}</span>{" "}
          {t("about.text3")}
        </p>
      </div>
    </section>
  );
};

export default About;
