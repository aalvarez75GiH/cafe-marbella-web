import { useEffect, useRef, useState } from "react";

export const useScrollReveal = ({
  threshold = 0.2,
  rootMargin = "0px",
  triggerOnce = false,
  revealOnlyWhenScrollingDown = false,
} = {}) => {
  const elementRef = useRef(null);
  const previousScrollYRef = useRef(0);
  const scrollDirectionRef = useRef("down");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    previousScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollYRef.current) {
        scrollDirectionRef.current = "down";
      } else if (currentScrollY < previousScrollYRef.current) {
        scrollDirectionRef.current = "up";
      }

      previousScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrollingDown = scrollDirectionRef.current === "down";

        if (entry.isIntersecting) {
          /*
           * When scrolling down, reveal the section.
           *
           * When scrolling up, we do nothing because the
           * section was intentionally kept visible after
           * the previous downward reveal.
           */
          if (!revealOnlyWhenScrollingDown || isScrollingDown) {
            setIsVisible(true);
          }

          if (triggerOnce) {
            observer.unobserve(element);
          }

          return;
        }

        if (triggerOnce) {
          return;
        }

        if (!revealOnlyWhenScrollingDown) {
          setIsVisible(false);
          return;
        }

        /*
         * The section has passed below the viewport while
         * scrolling upward. Hide it now so it is ready to
         * animate the next time the user scrolls downward.
         */
        if (!isScrollingDown) {
          setIsVisible(false);
        }

        /*
         * When scrolling down and the section exits through
         * the top, keep it visible. This prevents it from
         * animating when the user scrolls upward into it.
         */
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, rootMargin, triggerOnce, revealOnlyWhenScrollingDown]);

  return {
    elementRef,
    isVisible,
  };
};
