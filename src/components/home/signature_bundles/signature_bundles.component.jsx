import { useState, useRef } from "react";

import { redesignedBundleItems } from "./bundles_data";
import { BundleSlide } from "./bundle_slide";
import { MobileBundleCarousel } from "./mobile_bundle_carousel";
import { ChevronDownIcon } from "../../../assets/icons/ui/chevron_down.icon";

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
  SectionDescription,
  MobileSectionTitle,
  SectionContainer,
  BundlesSectionHeader,
  BundlesSectionEyebrow,
  BundlesSectionTitle,
  BundlesSectionDescription,
  BundlesHeaderContent,
  DesktopBundlesLayout,
  MobileBundlesLayout,
  BundlesToggleContainer,
  BundlesToggleButton,
  ToggleArrow,
  ExpandableBundles,
  ExpandableBundlesInner,
  AdditionalBundlesList,
} from "./signature_bundles.styles";

export const SignatureBundles = () => {
  const [currentBundle, setCurrentBundle] = useState(0);
  const [areBundlesExpanded, setAreBundlesExpanded] = useState(false);

  const featuredBundle = redesignedBundleItems[0];
  const additionalBundles = redesignedBundleItems.slice(1);

  const additionalBundlesRef = useRef(null);

  const handleToggleBundles = () => {
    const nextState = !areBundlesExpanded;

    setAreBundlesExpanded(nextState);

    if (nextState) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          additionalBundlesRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 80);
      });
    }
  };
  return (
    <SignatureBundlesSection id="signature-bundles">
      <BundlesHeaderContent>
        <BundlesSectionHeader>
          <BundlesSectionEyebrow>SHOP BY BUNDLES</BundlesSectionEyebrow>

          <BundlesSectionTitle>
            Discover our amazing Packs &amp; Combos
          </BundlesSectionTitle>

          <BundlesSectionDescription>
            Great coffee &amp; great merch mixed
          </BundlesSectionDescription>
        </BundlesSectionHeader>
      </BundlesHeaderContent>

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
            <span>Extraordinary experiences.</span>
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
            <span>Perfect for gifting. Perfect for you.</span>
          </MobileSectionTitle>
        </MobileHeaderContent>
      </SectionHeader>

      <SectionContainer>
        <DesktopBundlesLayout>
          <BundleSlide
            bundle={featuredBundle}
            totalBundles={redesignedBundleItems.length}
          />

          <BundlesToggleContainer>
            <BundlesToggleButton
              type="button"
              onClick={handleToggleBundles}
              aria-expanded={areBundlesExpanded}
              aria-controls="additional-bundles"
            >
              {areBundlesExpanded ? "Hide bundles" : "View all bundles"}

              <ToggleArrow $isOpen={areBundlesExpanded} aria-hidden="true">
                <ChevronDownIcon />
              </ToggleArrow>
            </BundlesToggleButton>
          </BundlesToggleContainer>

          <ExpandableBundles
            ref={additionalBundlesRef}
            id="additional-bundles"
            $isOpen={areBundlesExpanded}
            aria-hidden={!areBundlesExpanded}
          >
            <ExpandableBundlesInner>
              <AdditionalBundlesList>
                {additionalBundles.map((bundle) => (
                  <BundleSlide
                    key={bundle.id}
                    bundle={bundle}
                    totalBundles={redesignedBundleItems.length}
                  />
                ))}
              </AdditionalBundlesList>
            </ExpandableBundlesInner>
          </ExpandableBundles>
        </DesktopBundlesLayout>

        <MobileBundlesLayout>
          <MobileBundleCarousel
            bundles={redesignedBundleItems}
            currentBundle={currentBundle}
            onBundleChange={setCurrentBundle}
          />
        </MobileBundlesLayout>
      </SectionContainer>
    </SignatureBundlesSection>
  );
};
