import { BundleThumbnail } from "./bundle_thumbnail";

import {
  NavigationSection,
  NavigationContainer,
  ThumbnailsTrack,
  ViewAllWrapper,
  ViewAllBundlesLink,
  ViewAllLabel,
  ArrowIcon,
} from "./bundle_navigation.styles";

export const BundleNavigation = ({
  bundles,
  currentBundle,
  onBundleChange,
}) => {
  return (
    <NavigationSection>
      <NavigationContainer>
        <ThumbnailsTrack>
          {bundles.map((bundle, index) => (
            <BundleThumbnail
              key={bundle.id}
              bundle={bundle}
              isActive={currentBundle === index}
              onClick={() => onBundleChange(index)}
            />
          ))}
        </ThumbnailsTrack>
      </NavigationContainer>

      <ViewAllWrapper>
        <ViewAllBundlesLink href="/bundles">
          <ViewAllLabel>View All Bundles</ViewAllLabel>

          <ArrowIcon viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M5 12H19" />
            <path d="M14 7L19 12L14 17" />
          </ArrowIcon>
        </ViewAllBundlesLink>
      </ViewAllWrapper>
    </NavigationSection>
  );
};
