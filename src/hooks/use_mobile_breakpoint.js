import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 480px)";

const getInitialMobileState = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(MOBILE_QUERY).matches;
};

export const useMobileBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(getInitialMobileState);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
};
