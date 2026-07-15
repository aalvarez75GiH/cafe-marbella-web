import //   MountainIcon,
//   CoffeeBeanIcon,
//   LeafIcon,
//   HeartIcon,
"./brand_pillars.icons";

import { MountainOriginIcon } from "../../../assets/icons/brand_pillar/mountain-origin.icon";
import { CoffeeBeanIcon } from "../../../assets/icons/brand_pillar/coffee-bean.icon";
import { ArabicaLeafIcon } from "../../../assets/icons/brand_pillar/arabica-flower.icon";
import { PurposeHeartIcon } from "../../../assets/icons/brand_pillar/purpose-heart.icon";

export const brandPillarsData = [
  {
    id: "origin",
    title: "Grown in Venezuela",
    description:
      "From the high mountains of the Andes, our coffee boasts the best aroma",
    Icon: MountainOriginIcon,
  },
  {
    id: "roasting",
    title: "Carefully roasted",
    description:
      "Roasted in small batches to create superior quality and consistency.",
    Icon: CoffeeBeanIcon,
  },
  {
    id: "arabica",
    title: "100% Arabica",
    description:
      "Single-origin coffee with no blends. Pure and authentic flavor.",
    Icon: ArabicaLeafIcon,
  },
  {
    id: "purpose",
    title: "Made with purpose",
    description:
      "Every purchase supports communities and coffee traditions in Venezuela.",
    Icon: PurposeHeartIcon,
  },
  //   {
  //     id: "support",
  //     title: "60% for Venezuela",
  //     description: "We are donating 60% of our sales to Venezuela cause",
  //     Icon: PurposeHeartIcon,
  //   },
];
