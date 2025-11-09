import { useContext } from "react";
import { AccessibilityContext } from "../contexts/AccessibilityContext";

export default function AccessibilityWidget() {
  const { textSize, setTextSize, highContrast, setHighContrast, disableAccessibility } =
    useContext(AccessibilityContext);

  const increaseText = () => setTextSize(prev => Math.min(prev + 10, 200));
  const decreaseText = () => setTextSize(prev => Math.max(prev - 10, 50));

  return (
    <div className="accessibility-widget" role="region" aria-label="Accessibility controls">
      <button onClick={increaseText} aria-label="Increase text size">A+</button>
      <button onClick={decreaseText} aria-label="Decrease text size">A-</button>
      <button
        onClick={() => setHighContrast(!highContrast)}
        aria-pressed={highContrast}
        aria-label="Toggle high contrast mode"
      >
        {highContrast ? "Normal" : "Contrast"}
      </button>
      <button onClick={disableAccessibility} aria-label="Reset accessibility">Reset</button>
    </div>
  );
}
