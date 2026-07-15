import { useEffect, useRef, useState } from "react";

export const useScrollReveal = ({
  threshold = 0.2,
  rootMargin = "0px 0px -80px 0px",
  triggerOnce = false,
} = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (triggerOnce) {
            observer.unobserve(currentElement);
          }

          return;
        }

        if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    elementRef,
    isVisible,
  };
};
