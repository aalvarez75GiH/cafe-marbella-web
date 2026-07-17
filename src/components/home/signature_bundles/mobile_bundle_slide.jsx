import { Button } from "../../ctas/button";
import { BundleFeatures } from "./bundle_features";

import {
  MobileSlide,
  MobileImageArea,
  MobileSceneImage,
  MobileBadge,
  MobileContent,
  MobilePagination,
  MobilePaginationDot,
  MobileBundleName,
  MobileBundleDescription,
  MobilePrice,
  MobileButtonWrapper,
} from "./mobile_bundle_slide.styles";

export const MobileBundleSlide = ({ bundle, currentBundle, totalBundles }) => {
  return (
    <MobileSlide>
      <MobileImageArea>
        {bundle.badge && <MobileBadge>★ {bundle.badge}</MobileBadge>}

        <MobileSceneImage
          src={bundle.sceneImage || bundle.image}
          alt={bundle.name}
        />
      </MobileImageArea>

      <MobileContent>
        <MobilePagination aria-label="Current bundle">
          {Array.from({ length: totalBundles }).map((_, index) => (
            <MobilePaginationDot
              key={index}
              $isActive={index === currentBundle}
              aria-hidden="true"
            />
          ))}
        </MobilePagination>

        <MobileBundleName>{bundle.name}</MobileBundleName>

        <MobileBundleDescription>{bundle.description}</MobileBundleDescription>

        <BundleFeatures items={bundle.items} />

        <MobilePrice>${bundle.price.toFixed(2)}</MobilePrice>

        <MobileButtonWrapper>
          <Button
            variant="primary"
            size="medium"
            width="100%"
            tabletWidth="100%"
            mobileWidth="100%"
          >
            Shop Bundle
            <span aria-hidden="true">→</span>
          </Button>
        </MobileButtonWrapper>
      </MobileContent>
    </MobileSlide>
  );
};
