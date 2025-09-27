'use client';
import { useEffect, useState } from "react";

const REFERENCE_WIDTH = 1990;
const MOBILE_THRESHOLD = 800; // if you change the threshold here, change it in the files too => src/app/components/ButtonMenu/button.module.css and src/app/components/Navbar/index.css

export const useMobile = () => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth;
      setScaleFactor(width / REFERENCE_WIDTH);
      setIsMobile(width <= MOBILE_THRESHOLD);
    };

    updateState();
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return {
    scaleFactor,
    isMobile,
  };
};
