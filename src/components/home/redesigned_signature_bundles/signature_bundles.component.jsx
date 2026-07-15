import { useState } from "react";

import { redesignedBundleItems } from "./ bundles_data";
import { BundleSlide } from "./bundle_slide";
import { BundleNavigation } from "./bundle_navigation";

import {
  SignatureBundlesSection,
  SectionContainer,
  PreviousButton,
  NextButton,
  ArrowIcon,
} from "./signature_bundles.styles";

export const RedesignedSignatureBundles = () => {
  const [currentBundle, setCurrentBundle] = useState(0);

  const activeBundle = redesignedBundleItems[currentBundle];

  const handleNext = () => {
    setCurrentBundle((previous) =>
      previous === redesignedBundleItems.length - 1 ? 0 : previous + 1
    );
  };

  const handlePrevious = () => {
    setCurrentBundle((previous) =>
      previous === 0 ? redesignedBundleItems.length - 1 : previous - 1
    );
  };

  return (
    <SignatureBundlesSection>
      <SectionContainer>
        <PreviousButton
          type="button"
          aria-label="Previous bundle"
          onClick={handlePrevious}
        >
          <ArrowIcon aria-hidden="true">‹</ArrowIcon>
        </PreviousButton>

        <BundleSlide
          bundle={activeBundle}
          totalBundles={redesignedBundleItems.length}
        />

        <NextButton type="button" aria-label="Next bundle" onClick={handleNext}>
          <ArrowIcon aria-hidden="true">›</ArrowIcon>
        </NextButton>
      </SectionContainer>
      <BundleNavigation
        bundles={redesignedBundleItems}
        currentBundle={currentBundle}
        onBundleChange={setCurrentBundle}
      />
    </SignatureBundlesSection>
  );
};
