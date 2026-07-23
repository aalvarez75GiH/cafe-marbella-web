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
  Divider,
  DividerLine,
  DividerBean,
  HeroDescription,
  DesktopActions,
  ShopButton,
  LearnMoreButton,
  BenefitsContainer,
  BenefitItem,
  BenefitDivider,
  BenefitIcon,
  BenefitLabel,
  ProductCarousel,
  ProductStage,
  ProductImage,
  ProductInformation,
  ProductType,
  ProductRoast,
  ProductPriceLabel,
  ProductPrice,
  OrderButton,
  //   NavigationButton,
  PreviousButton,
  NextButton,
  DotsContainer,
  DotButton,
  EmptyHero,
} from "./products_hero.styles";

import heroBackground from "../../../assets/images/hero/hero_5.png";

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

const getPreviousIndex = (currentIndex, total) =>
  currentIndex === 0 ? total - 1 : currentIndex - 1;

const getNextIndex = (currentIndex, total) =>
  currentIndex === total - 1 ? 0 : currentIndex + 1;

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
  const touchStartX = useRef(null);
  const touchCurrentX = useRef(null);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

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

  const changeProduct = (nextIndex, direction) => {
    if (isTransitioning || nextIndex === activeIndex) {
      return;
    }

    setTransitionDirection(direction);
    setIsTransitioning(true);

    window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsTransitioning(false);
    }, 220);
  };

  const handlePrevious = () => {
    const previousIndex = getPreviousIndex(activeIndex, heroProducts.length);

    changeProduct(previousIndex, "previous");
  };

  const handleNext = () => {
    const nextIndex = getNextIndex(activeIndex, heroProducts.length);

    changeProduct(nextIndex, "next");
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchCurrentX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;

    touchCurrentX.current = currentX;

    if (touchStartX.current !== null) {
      const offset = currentX - touchStartX.current;

      setDragOffset(Math.max(-90, Math.min(90, offset)));
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) {
      setDragOffset(0);
      return;
    }

    const swipeDistance = touchStartX.current - touchCurrentX.current;

    const minimumSwipeDistance = 50;

    if (swipeDistance > minimumSwipeDistance) {
      handleNext();
    } else if (swipeDistance < -minimumSwipeDistance) {
      handlePrevious();
    }

    setDragOffset(0);
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  const handleOrderNow = () => {
    onOrderNow?.(activeProduct);
  };

  return (
    <ProductsHeroSection id="main-hero">
      <BackgroundImage $image={heroBackground} />

      <ProductsHeroContainer>
        <HeroContent>
          <HeroEyebrow>Premium Venezuelan Coffee</HeroEyebrow>

          <HeroTitle>
            Born in Venezuela.
            <br />
            Shared with the world.
          </HeroTitle>

          <Divider aria-hidden="true">
            <DividerLine />
            <DividerBean />
            <DividerLine />
          </Divider>

          <HeroDescription>
            From our family farms to your cup.
            <br />
            100% organic. 100% Latin America.
          </HeroDescription>

          <DesktopActions>
            <ShopButton type="button">
              Shop Coffee
              <span aria-hidden="true">→</span>
            </ShopButton>

            <LearnMoreButton type="button">
              Learn More
              <span aria-hidden="true">→</span>
            </LearnMoreButton>
          </DesktopActions>

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

        <ProductCarousel
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <PreviousButton
            type="button"
            aria-label="Show previous coffee"
            onClick={handlePrevious}
          >
            ←
          </PreviousButton>

          <ProductStage
            // key={activeProduct.id}
            $isTransitioning={isTransitioning}
            $direction={transitionDirection}
            $dragOffset={dragOffset}
          >
            <ProductImage
              src={activeProduct.image}
              alt={`${activeProduct.originLabel} ${activeProduct.grindLabel} ${activeProduct.roastLabel}`}
            />

            <ProductInformation>
              <ProductType>
                {activeProduct.originLabel} · {activeProduct.grindLabel}
              </ProductType>

              <ProductRoast>{activeProduct.roastLabel}</ProductRoast>

              <ProductPriceLabel>Starting at</ProductPriceLabel>

              <ProductPrice>
                {formatHeroPrice(activeProduct.startingPrice)}
              </ProductPrice>

              <OrderButton type="button" onClick={handleOrderNow}>
                Order Now
                <span aria-hidden="true">→</span>
              </OrderButton>
            </ProductInformation>
          </ProductStage>

          <NextButton
            type="button"
            aria-label="Show next coffee"
            onClick={handleNext}
          >
            →
          </NextButton>

          <DotsContainer aria-label="Select a featured coffee">
            {heroProducts.map((product, index) => (
              <DotButton
                key={product.id}
                type="button"
                $active={index === activeIndex}
                aria-label={`Show ${product.originLabel} ${product.grindLabel} ${product.roastLabel}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => {
                  const direction = index > activeIndex ? "next" : "previous";
                  changeProduct(index, direction);
                }}
                // onClick={() => setActiveIndex(index)}
              />
            ))}
          </DotsContainer>
        </ProductCarousel>
      </ProductsHeroContainer>
    </ProductsHeroSection>
  );
};
