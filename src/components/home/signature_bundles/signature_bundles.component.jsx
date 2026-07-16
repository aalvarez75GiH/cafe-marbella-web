import { useCallback, useEffect, useRef, useState } from "react";

import { BundleCard } from "./bundle_card";
import { redesignedBundleItems } from "./bundles_data";
import { Button } from "../../ctas/button";

import {
  SignatureBundlesSection,
  SectionHeader,
  SectionEyebrow,
  HeaderDivider,
  DividerLine,
  DividerDiamond,
  DesktopHeaderContent,
  MobileHeaderContent,
  SectionTitle,
  SectionTitleAccent,
  SectionDescription,
  MobileSectionTitle,
  BundleFeatures,
  BundleFeature,
  FeatureIconWrapper,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  CarouselArea,
  CarouselButton,
  CarouselViewport,
  CarouselTrack,
  CarouselItem,
  ViewAllContainer,
} from "./signature_bundles.styles";

import {
  CoffeeFeatureIcon,
  GiftFeatureIcon,
  LeafFeatureIcon,
} from "./bundle_feature_icons";

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

        <HeaderDivider aria-hidden="true">
          <DividerLine />
          <DividerDiamond />
          <DividerLine />
        </HeaderDivider>

        <DesktopHeaderContent>
          <SectionTitle>
            Curated combinations.
            <SectionTitleAccent>Extraordinary experiences.</SectionTitleAccent>
          </SectionTitle>

          <SectionDescription>
            Premium Venezuelan coffee paired with exclusive Marbella
            merchandise. Perfect for gifting. Perfect for you.
          </SectionDescription>
        </DesktopHeaderContent>

        <MobileHeaderContent>
          <MobileSectionTitle>
            Premium Venezuelan coffee paired with exclusive Marbella
            merchandise.
            <em> Perfect for gifting. Perfect for you.</em>
          </MobileSectionTitle>
        </MobileHeaderContent>

        <BundleFeatures>
          <BundleFeature>
            <FeatureIconWrapper aria-hidden="true">
              <CoffeeFeatureIcon />
            </FeatureIconWrapper>

            <FeatureContent>
              <FeatureTitle>Premium Coffee</FeatureTitle>

              <FeatureDescription>
                100% Arabica from Venezuela
              </FeatureDescription>
            </FeatureContent>
          </BundleFeature>

          <BundleFeature>
            <FeatureIconWrapper aria-hidden="true">
              <GiftFeatureIcon />
            </FeatureIconWrapper>

            <FeatureContent>
              <FeatureTitle>Exclusive Merch</FeatureTitle>

              <FeatureDescription>
                Designed for everyday moments
              </FeatureDescription>
            </FeatureContent>
          </BundleFeature>

          <BundleFeature>
            <FeatureIconWrapper aria-hidden="true">
              <LeafFeatureIcon />
            </FeatureIconWrapper>

            <FeatureContent>
              <FeatureTitle>Perfectly Paired</FeatureTitle>

              <FeatureDescription>
                Curated with care and intention
              </FeatureDescription>
            </FeatureContent>
          </BundleFeature>
        </BundleFeatures>
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
            {redesignedBundleItems.map((bundle) => (
              <CarouselItem key={bundle.id} data-carousel-item>
                <BundleCard
                  name={bundle.name}
                  image={bundle.image}
                  badge={bundle.badge}
                  items={bundle.items}
                  price={bundle.price}
                  productUrl={bundle.productUrl}
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
