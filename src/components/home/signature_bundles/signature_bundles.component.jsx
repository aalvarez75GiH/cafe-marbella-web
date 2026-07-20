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
  // const handleToggleBundles = () => {
  //   setAreBundlesExpanded((previous) => !previous);
  // };

  return (
    <SignatureBundlesSection>
      <BundlesHeaderContent>
        <BundlesSectionHeader>
          <BundlesSectionEyebrow>SHOP BY BUNDLES</BundlesSectionEyebrow>

          <BundlesSectionTitle>
            Discover our amazing Stacks &amp; Combos
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

// import { useState } from "react";

// import { redesignedBundleItems } from "./bundles_data";
// import { BundleSlide } from "./bundle_slide";
// import { BundleNavigation } from "./bundle_navigation";
// import { MobileBundleCarousel } from "./mobile_bundle_carousel";

// import {
//   SignatureBundlesSection,
//   SectionHeader,
//   SectionEyebrow,
//   HeaderDivider,
//   DividerLine,
//   DividerDiamond,
//   DesktopHeaderContent,
//   MobileHeaderContent,
//   SectionTitle,
//   SectionDescription,
//   MobileSectionTitle,
//   SectionContainer,
//   PreviousButton,
//   NextButton,
//   ArrowIcon,
//   BundlesSectionHeader,
//   BundlesSectionEyebrow,
//   BundlesSectionTitle,
//   BundlesSectionDescription,
//   BundlesHeaderContent,
// } from "./signature_bundles.styles";

// export const SignatureBundles = () => {
//   const [currentBundle, setCurrentBundle] = useState(0);

//   const activeBundle = redesignedBundleItems[currentBundle];

//   const handleNext = () => {
//     setCurrentBundle((previous) =>
//       previous === redesignedBundleItems.length - 1 ? 0 : previous + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentBundle((previous) =>
//       previous === 0 ? redesignedBundleItems.length - 1 : previous - 1
//     );
//   };

//   return (
//     <SignatureBundlesSection>
//       <BundlesHeaderContent>
//         <BundlesSectionHeader>
//           <BundlesSectionEyebrow>SHOP BY BUNDLES</BundlesSectionEyebrow>

//           <BundlesSectionTitle>
//             Discover our amazing Stacks & Combos
//           </BundlesSectionTitle>

//           <BundlesSectionDescription>
//             Great coffee &amp; great merch mixed
//           </BundlesSectionDescription>
//         </BundlesSectionHeader>
//       </BundlesHeaderContent>
//       <SectionHeader>
//         <SectionEyebrow>Our Signature Bundles</SectionEyebrow>

//         <HeaderDivider aria-hidden="true">
//           <DividerLine />
//           <DividerDiamond />
//           <DividerLine />
//         </HeaderDivider>

//         <DesktopHeaderContent>
//           <SectionTitle>
//             Curated combinations.
//             <span>Extraordinary experiences.</span>
//           </SectionTitle>

//           <SectionDescription>
//             Premium Venezuelan coffee paired with exclusive Marbella
//             merchandise. Perfect for gifting. Perfect for you.
//           </SectionDescription>
//         </DesktopHeaderContent>

//         <MobileHeaderContent>
//           <MobileSectionTitle>
//             Premium Venezuelan coffee paired with exclusive Marbella
//             merchandise.
//             <span>Perfect for gifting. Perfect for you.</span>
//           </MobileSectionTitle>
//         </MobileHeaderContent>
//       </SectionHeader>

//       <SectionContainer>
//         <PreviousButton
//           type="button"
//           aria-label="Previous bundle"
//           onClick={handlePrevious}
//         >
//           <ArrowIcon aria-hidden="true">‹</ArrowIcon>
//         </PreviousButton>

//         <BundleSlide
//           bundle={activeBundle}
//           totalBundles={redesignedBundleItems.length}
//         />

//         <MobileBundleCarousel
//           bundles={redesignedBundleItems}
//           currentBundle={currentBundle}
//           onBundleChange={setCurrentBundle}
//         />

//         <NextButton type="button" aria-label="Next bundle" onClick={handleNext}>
//           <ArrowIcon aria-hidden="true">›</ArrowIcon>
//         </NextButton>
//       </SectionContainer>

//       <BundleNavigation
//         bundles={redesignedBundleItems}
//         currentBundle={currentBundle}
//         onBundleChange={setCurrentBundle}
//       />
//     </SignatureBundlesSection>
//   );
// };
