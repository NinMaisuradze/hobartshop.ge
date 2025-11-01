import { createContext, useState, useEffect } from "react";

export const AccessibilityContext = createContext(null);

export const AccessibilityProvider = ({ children }) => {
  const [textSize, setTextSize] = useState(100); // პროცენტებში
  const [highContrast, setHighContrast] = useState(false);

  // ტექსტის ზომა
  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", `${textSize}%`);
  }, [textSize]);

  // კონტრასტული რეჟიმი
  useEffect(() => {
    const className = "high-contrast";
    document.documentElement.classList.toggle(className, highContrast);
  }, [highContrast]);

  const disableAccessibility = () => {
    setTextSize(100);
    setHighContrast(false);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        textSize,
        setTextSize,
        highContrast,
        setHighContrast,
        disableAccessibility,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
