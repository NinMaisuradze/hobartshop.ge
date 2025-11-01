import { createContext, useState, useEffect } from "react";

export const AccessibilityContext = createContext(null);

export const AccessibilityProvider = ({ children }) => {
  const [textSize, setTextSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", `${textSize}%`);
  }, [textSize]);

  useEffect(() => {
    const className = "high-contrast";
    document.documentElement.classList.toggle(className, highContrast);
  }, [highContrast]);

  useEffect(() => {
    const mediaElements = document.querySelectorAll("audio, video");
    mediaElements.forEach((el) => (el.muted = isMuted));
  }, [isMuted]);

  const disableAccessibility = () => {
    setTextSize(100);
    setHighContrast(false);
    setIsMuted(true);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        textSize,
        setTextSize,
        highContrast,
        setHighContrast,
        isMuted,
        setIsMuted,
        disableAccessibility,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
