import { BundleThumbnail } from "./bundle_thumbnail";

import {
  NavigationSection,
  NavigationContainer,
  ThumbnailsTrack,
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
    </NavigationSection>
  );
};
