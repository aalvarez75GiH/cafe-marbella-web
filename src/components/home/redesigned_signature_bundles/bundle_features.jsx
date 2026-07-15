import { CapIcon, CoffeeIcon, MugIcon, TShirtIcon } from "./icons/bundle_icons";

import {
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureLabel,
  FeatureSeparator,
} from "./bundle_features.styles";

const icons = {
  coffee: CoffeeIcon,
  mug: MugIcon,
  cap: CapIcon,
  tshirt: TShirtIcon,
};

export const BundleFeatures = ({ items = [] }) => {
  return (
    <FeaturesList>
      {items.map((item, index) => {
        const Icon = icons[item.type] || CoffeeIcon;
        const isLastItem = index === items.length - 1;

        return (
          <FeatureItem key={`${item.type}_${item.label}`}>
            <FeatureIcon>
              <Icon />
            </FeatureIcon>

            <FeatureLabel>{item.label}</FeatureLabel>

            {!isLastItem && <FeatureSeparator aria-hidden="true" />}
          </FeatureItem>
        );
      })}
    </FeaturesList>
  );
};
