import { MobileBundleSlide } from "./mobile_bundle_slide";

import {
  MobileCarouselViewport,
  MobileCarouselItem,
  MobileCarouselWrapper,
  CarouselProgress,
  ProgressSegment,
  ProgressLabel,
  ProgressLine,
} from "./mobile_bundle_carousel.styles";

import { MobileFlyerSlide } from "./mobile_flyer_slide.component";

export const MobileBundleCarousel = ({
  bundles,
  currentBundle,
  onBundleChange,
  onShopBundle,
  variant = "flyer",
}) => {
  const handleScroll = (event) => {
    const viewport = event.currentTarget;
    const slideWidth = viewport.clientWidth;

    if (!slideWidth) {
      return;
    }

    const nextBundle = Math.round(viewport.scrollLeft / slideWidth);

    if (
      nextBundle >= 0 &&
      nextBundle < bundles.length &&
      nextBundle !== currentBundle
    ) {
      onBundleChange(nextBundle);
    }
  };

  return (
    <MobileCarouselWrapper>
      <CarouselProgress aria-label="Bundle progress">
        {bundles.map((bundle, index) => (
          <ProgressSegment key={bundle.id}>
            {index === currentBundle && (
              <ProgressLabel>
                {index + 1}/{bundles.length}
              </ProgressLabel>
            )}

            <ProgressLine $active={index === currentBundle} />
          </ProgressSegment>
        ))}
      </CarouselProgress>

      <MobileCarouselViewport onScroll={handleScroll}>
        {bundles.map((bundle) => (
          <MobileCarouselItem key={bundle.id}>
            {variant === "flyer" ? (
              <MobileFlyerSlide bundle={bundle} onShopBundle={onShopBundle} />
            ) : (
              <MobileBundleSlide bundle={bundle} onShopBundle={onShopBundle} />
            )}
          </MobileCarouselItem>
        ))}
      </MobileCarouselViewport>
    </MobileCarouselWrapper>
  );
};
