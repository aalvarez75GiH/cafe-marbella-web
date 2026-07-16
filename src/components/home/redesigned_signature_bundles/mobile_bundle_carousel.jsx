import { MobileBundleSlide } from "./mobile_bundle_slide";

import {
  MobileCarouselViewport,
  MobileCarouselItem,
} from "./mobile_bundle_carousel.styles";

export const MobileBundleCarousel = ({
  bundles,
  currentBundle,
  onBundleChange,
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
    <MobileCarouselViewport onScroll={handleScroll}>
      {bundles.map((bundle, index) => (
        <MobileCarouselItem key={bundle.id}>
          <MobileBundleSlide
            bundle={bundle}
            currentBundle={currentBundle}
            totalBundles={bundles.length}
            slideIndex={index}
          />
        </MobileCarouselItem>
      ))}
    </MobileCarouselViewport>
  );
};
