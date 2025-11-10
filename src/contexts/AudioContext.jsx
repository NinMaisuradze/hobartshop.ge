import { createContext, useState, useEffect } from "react";

export const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  // წამოვიღოთ localStorage-დან
  useEffect(() => {
    try {
      const stored = localStorage.getItem("isMuted");
      if (stored !== null) {
        setIsMuted(stored === "true");
      }
    } catch (e) {
      console.warn("AudioContext load error:", e);
    }
  }, []);

  // შევინახოთ localStorage-ში
  useEffect(() => {
    try {
      localStorage.setItem("isMuted", isMuted.toString());
    } catch (e) {
      console.warn("AudioContext save error:", e);
    }
  }, [isMuted]);

  return (
    <AudioContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </AudioContext.Provider>
  );
};
