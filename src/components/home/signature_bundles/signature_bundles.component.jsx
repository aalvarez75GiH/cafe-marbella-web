import { useCallback, useEffect, useRef, useState } from "react";

import { BundleCard } from "./bundle_card";
import { bundleItems } from "./ bundles_data";
import { Button } from "../../ctas/button";

import {
  SignatureBundlesSection,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  TitleDecoration,
  SectionDescription,
  CarouselArea,
  CarouselViewport,
  CarouselTrack,
  CarouselItem,
  CarouselButton,
  ViewAllContainer,
  //   ViewAllButton,
} from "./signature_bundles.styles";

const ArrowIcon = ({ direction = "right" }) => {
  const rotation = direction === "left" ? "rotate(180 12 12)" : undefined;

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g transform={rotation}>
        <path
          d="M9 5L16 12L9 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const SignatureBundles = () => {
  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateNavigationState = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const maximumScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const scrollTolerance = 4;

    setCanScrollLeft(carousel.scrollLeft > scrollTolerance);

    setCanScrollRight(
      carousel.scrollLeft < maximumScrollLeft - scrollTolerance
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return undefined;
    }

    updateNavigationState();

    carousel.addEventListener("scroll", updateNavigationState, {
      passive: true,
    });

    window.addEventListener("resize", updateNavigationState);

    return () => {
      carousel.removeEventListener("scroll", updateNavigationState);
      window.removeEventListener("resize", updateNavigationState);
    };
  }, [updateNavigationState]);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector("[data-carousel-item]");
    const carouselStyles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(carouselStyles.columnGap) || 0;

    const scrollDistance = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : carousel.clientWidth * 0.8;

    carousel.scrollBy({
      left: direction === "next" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <SignatureBundlesSection>
      <SectionHeader>
        <SectionEyebrow>Our Signature Bundles</SectionEyebrow>

        <SectionTitle>
          Curated combinations.
          <span>Extraordinary experiences.</span>
        </SectionTitle>

        <TitleDecoration aria-hidden="true">
          <span />
          <i />
          <span />
        </TitleDecoration>

        <SectionDescription>
          Premium Venezuelan coffee paired with exclusive merchandise.
          <span>Perfect for gifting. Perfect for you.</span>
        </SectionDescription>
      </SectionHeader>

      <CarouselArea>
        <CarouselButton
          type="button"
          $position="left"
          disabled={!canScrollLeft}
          aria-label="Show previous bundles"
          onClick={() => scrollCarousel("previous")}
        >
          <ArrowIcon direction="left" />
        </CarouselButton>

        <CarouselViewport
          ref={carouselRef}
          aria-label="Café Marbella signature bundles"
        >
          <CarouselTrack>
            {bundleItems.map((bundle) => (
              <CarouselItem key={bundle.id} data-carousel-item>
                <BundleCard
                  name={bundle.name}
                  image={bundle.image}
                  badge={bundle.badge}
                  items={bundle.items}
                  price={bundle.price}
                  productUrl={bundle.productUrl}
                  buttonLabel={bundle.buttonLabel}
                />
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselViewport>

        <CarouselButton
          type="button"
          $position="right"
          disabled={!canScrollRight}
          aria-label="Show next bundles"
          onClick={() => scrollCarousel("next")}
        >
          <ArrowIcon direction="right" />
        </CarouselButton>
      </CarouselArea>

      <ViewAllContainer>
        <Button
          width="205px"
          tabletWidth="205px"
          mobileWidth="calc(100% - 40px)"
          variant="secondary"
          size="medium"
        >
          View All Bundles
        </Button>
        {/* <ViewAllButton type="button">View All Bundles</ViewAllButton> */}
      </ViewAllContainer>
    </SignatureBundlesSection>
  );
};
