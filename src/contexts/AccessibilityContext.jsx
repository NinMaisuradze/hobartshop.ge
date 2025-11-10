import { createContext, useState, useEffect } from "react";

export const AccessibilityContext = createContext(null);

export const AccessibilityProvider = ({ children }) => {
  const [textSize, setTextSize] = useState(100); // %
  const [highContrast, setHighContrast] = useState(false);

 
  useEffect(() => {
    const savedSize = localStorage.getItem("textSize");
    const savedContrast = localStorage.getItem("highContrast");

    if (savedSize) setTextSize(Number(savedSize));
    if (savedContrast) setHighContrast(savedContrast === "true");
  }, []);

  // Update text size
  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", `${textSize}%`);
    localStorage.setItem("textSize", textSize.toString());
  }, [textSize]);

  // Update contrast
  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
    localStorage.setItem("highContrast", highContrast.toString());
  }, [highContrast]);

  const disableAccessibility = () => {
    setTextSize(100);
    setHighContrast(false);
    localStorage.clear();
  };

  return (
    <AccessibilityContext.Provider
      value={{ textSize, setTextSize, highContrast, setHighContrast, disableAccessibility }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
