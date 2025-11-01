import React, { useContext } from "react";
import { AccessibilityContext } from "../context/AccessibilityContext";

export default function AccessibilityWidget() {
  const { textSize, setTextSize, highContrast, setHighContrast, disableAccessibility } =
    useContext(AccessibilityContext);

  const increaseText = () => setTextSize(Math.min(textSize + 10, 200));
  const decreaseText = () => setTextSize(Math.max(textSize - 10, 50));

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
      <button onClick={increaseText} className="small-btn">A+</button>
      <button onClick={decreaseText} className="small-btn">A-</button>
      <button onClick={() => setHighContrast(!highContrast)} className="small-btn">Contrast</button>
      <button onClick={disableAccessibility} className="small-btn">Reset</button>
    </div>
  );
}
