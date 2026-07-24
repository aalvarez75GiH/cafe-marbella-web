import { useMemo, useRef, useState } from "react";

import {
  buildProductsHeroSlides,
  formatHeroPrice,
} from "./products_hero.utils";

import {
  ProductsHeroSection,
  BackgroundImage,
  ProductsHeroContainer,
  HeroContent,
  HeroEyebrow,
  HeroTitle,
  BenefitsContainer,
  BenefitItem,
  BenefitDivider,
  BenefitIcon,
  BenefitLabel,
  ProductCarousel,
  ProductViewport,
  ProductTrack,
  ProductSlide,
  ProductImage,
  ProductInformation,
  ProductType,
  ProductRoast,
  ProductPriceLabel,
  ProductPrice,
  OrderButton,
  PreviousButton,
  NextButton,
  DotsContainer,
  DotButton,
  EmptyHero,
} from "./products_hero.styles";

import heroBackground from "../../../assets/images/products_hero/hero_8.png";
// import heroBackground from "../../../assets/images/hero/hero_5.png";

const LeafIcon = () => (
  <BenefitIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.5 4.5C13.5 4.5 7.5 7.5 6 14.5c4.5 1 10.5-1 13.5-10Z" />
    <path d="M6 14.5C7.5 16 8 18 8 20" />
    <path d="M6 14.5c3-2.5 6-4 9.5-5" />
  </BenefitIcon>
);

const MountainIcon = () => (
  <BenefitIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="m3 19 6.2-10 3.1 4.5L15.5 9 21 19H3Z" />
    <path d="m7.2 12.2 2 1.4 1.4-1" />
  </BenefitIcon>
);

const CoffeeBeanIcon = () => (
  <BenefitIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16.8 4.2c3.1 3.1 2.6 8.7-1 12.3s-9.2 4.1-12.3 1-2.6-8.7 1-12.3 9.2-4.1 12.3-1Z" />
    <path d="M16.8 4.2c-1 4.4-4.2 8.5-8.2 10.4-1.7.8-3.4 1.1-5.1.9" />
  </BenefitIcon>
);

export const ProductsHero = ({
  products = [],
  isLoading = false,
  error = null,
  onOrderNow,
}) => {
  const heroProducts = useMemo(
    () => buildProductsHeroSlides(products),
    [products]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const productViewportRef = useRef(null);

  const isFirstProduct = activeIndex === 0;
  const isLastProduct = activeIndex === heroProducts.length - 1;

  const scrollToProduct = (index) => {
    const viewport = productViewportRef.current;

    if (!viewport) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, heroProducts.length - 1));

    viewport.scrollTo({
      left: viewport.clientWidth * nextIndex,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    scrollToProduct(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToProduct(activeIndex + 1);
  };

  const handleDotSelect = (index) => {
    scrollToProduct(index);
  };

  const handleProductScroll = (event) => {
    const viewport = event.currentTarget;
    const slideWidth = viewport.clientWidth;

    if (!slideWidth) {
      return;
    }

    const nextIndex = Math.round(viewport.scrollLeft / slideWidth);

    if (
      nextIndex >= 0 &&
      nextIndex < heroProducts.length &&
      nextIndex !== activeIndex
    ) {
      setActiveIndex(nextIndex);
    }
  };

  if (isLoading) {
    return (
      <EmptyHero>
        <p>Loading featured coffees...</p>
      </EmptyHero>
    );
  }

  if (error) {
    return (
      <EmptyHero>
        <p>We could not load the featured coffees.</p>
      </EmptyHero>
    );
  }

  if (!heroProducts.length) {
    return (
      <EmptyHero>
        <p>No featured coffees are available.</p>
      </EmptyHero>
    );
  }

  const activeProduct = heroProducts[activeIndex];

  return (
    <ProductsHeroSection id="main-hero">
      <BackgroundImage $image={heroBackground} />

      <ProductsHeroContainer>
        <HeroContent>
          <HeroEyebrow>Premium Venezuelan Coffee</HeroEyebrow>

          <HeroTitle>Buying our coffee is just one swipe away.</HeroTitle>

          <BenefitsContainer>
            <BenefitItem>
              <LeafIcon />

              <BenefitLabel>
                100% Organic
                <br />
                Coffee
              </BenefitLabel>
            </BenefitItem>

            <BenefitDivider />

            <BenefitItem>
              <MountainIcon />

              <BenefitLabel>
                Sourced from
                <br />
                Family Farms
              </BenefitLabel>
            </BenefitItem>

            <BenefitDivider />

            <BenefitItem>
              <CoffeeBeanIcon />

              <BenefitLabel>
                Roasted with
                <br />
                Care
              </BenefitLabel>
            </BenefitItem>
          </BenefitsContainer>
        </HeroContent>

        <ProductCarousel>
          <PreviousButton
            type="button"
            aria-label="Show previous coffee"
            onClick={handlePrevious}
            disabled={isFirstProduct}
          >
            ←
          </PreviousButton>

          <ProductViewport
            ref={productViewportRef}
            onScroll={handleProductScroll}
          >
            <ProductTrack>
              {heroProducts.map((product) => (
                <ProductSlide key={product.id}>
                  <ProductImage
                    src={product.image}
                    alt={`${product.originLabel} ${product.grindLabel} ${product.roastLabel}`}
                    draggable="false"
                  />
                </ProductSlide>
              ))}
            </ProductTrack>
          </ProductViewport>

          <ProductInformation>
            <ProductType>
              {activeProduct.originLabel} · {activeProduct.grindLabel}
            </ProductType>

            <ProductRoast>{activeProduct.roastLabel}</ProductRoast>

            <ProductPriceLabel>Starting at</ProductPriceLabel>

            <ProductPrice>
              {formatHeroPrice(activeProduct.startingPrice)}
            </ProductPrice>

            <OrderButton
              type="button"
              onClick={() => onOrderNow?.(activeProduct)}
            >
              Order Now
            </OrderButton>
            <NextButton
              type="button"
              aria-label="Show next coffee"
              onClick={handleNext}
              disabled={isLastProduct}
            >
              →
            </NextButton>
          </ProductInformation>

          <DotsContainer aria-label="Featured coffee progress">
            {heroProducts.map((product, index) => (
              <DotButton
                key={product.id}
                type="button"
                $active={index === activeIndex}
                aria-label={`Show ${product.originLabel} ${product.grindLabel} ${product.roastLabel}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => handleDotSelect(index)}
              />
            ))}
          </DotsContainer>
        </ProductCarousel>
      </ProductsHeroContainer>
    </ProductsHeroSection>
  );
};
