// src/components/AccessibilityWidget.jsx
import { useContext, useState } from "react";
import { AccessibilityContext } from "../contexts/AccessibilityContext";
import "./styles/style.css";

export default function AccessibilityWidget() {
  const { textSize, setTextSize, highContrast, setHighContrast, disableAccessibility } =
    useContext(AccessibilityContext);

  const [open, setOpen] = useState(false);

  const increaseText = () => setTextSize(prev => Math.min(prev + 10, 200));
  const decreaseText = () => setTextSize(prev => Math.max(prev - 10, 50));

  return (
    <div className={`accessibility-widget`} style={{ position: "relative" }}>
     
      <div className="accessibility-bar" role="toolbar" aria-label="Accessibility toolbar">
        <button className="bar-btn" onClick={decreaseText} aria-label="Decrease text size">A-</button>
        <button className="bar-btn" onClick={increaseText} aria-label="Increase text size">A+</button>
        <button className="bar-btn" onClick={() => setHighContrast(v => !v)} aria-pressed={highContrast} aria-label="Toggle high contrast">
          {highContrast ? "Normal" : "Contrast"}
        </button>
        <button className="bar-btn" onClick={disableAccessibility} aria-label="Reset accessibility">Reset</button>

        
        <button className="bar-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open}>
          {open ? "▲" : "▼"}
        </button>
      </div>

      
      {open && (
        <div className="access-panel" role="dialog" aria-label="Accessibility tools">
          <p>Accessibility settings</p>
          <div className="control-row">
            <button onClick={decreaseText}>A-</button>
            <button onClick={increaseText}>A+</button>
          </div>
          <label>
            <input type="checkbox" checked={highContrast} onChange={() => setHighContrast(v => !v)} /> High contrast
          </label>
          <button className="disable-btn" onClick={disableAccessibility}>Reset</button>
        </div>
      )}
    </div>
  );
}
