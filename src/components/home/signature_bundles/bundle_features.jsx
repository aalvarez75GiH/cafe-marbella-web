// import { CapIcon, CoffeeIcon, MugIcon, TShirtIcon } from "./icons/bundle_icons";
import { WholeBeanIcon } from "../../../assets/icons/bundles/whole-bean.icon";
import { GroundCoffeeIcon } from "../../../assets/icons/bundles/ground-bean.icon";
import { MugIcon } from "../../../assets/icons/bundles/mug.icon";
import { CapIcon } from "../../../assets/icons/bundles/cap.icon";
import { TShirtIcon } from "../../../assets/icons/bundles/t-shirt.icon";

import {
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureLabel,
  FeatureSeparator,
} from "./bundle_features.styles";

// const icons = {
//   //   coffee: CoffeeIcon,
//   coffee: WholeBeanIcon,
//   mug: MugIcon,
//   cap: CapIcon,
//   tshirt: TShirtIcon,
// };

const icons = {
  "Whole Bean Coffee": WholeBeanIcon,
  "Ground Coffee": GroundCoffeeIcon,
  "Marbella Mug": MugIcon,
  "Marbella Cap": CapIcon,
  "T-Shirt": TShirtIcon,
};

export const BundleFeatures = ({ items = [] }) => {
  return (
    <FeaturesList>
      {items.map((item, index) => {
        const Icon = icons[item.label] || WholeBeanIcon;
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
