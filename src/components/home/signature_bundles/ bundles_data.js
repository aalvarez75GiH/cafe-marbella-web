import starterPackImage from "../../../assets/images/bundles/starter_pack.png";
import streetwearImage from "../../../assets/images/bundles/streetware_coffee_pack.png";
import capCoffeeComboImage from "../../../assets/images/bundles/cap_and_coffee_combo.png";
import TShirtCoffeeComboImage from "../../../assets/images/bundles/t-shirt_and_coffee_combo.png";

export const bundleItems = [
  {
    id: "starter_pack",
    name: "Starter Pack",
    image: starterPackImage,
    badge: "BEST SELLER",
    items: [
      "1 Whole Bean Coffee (12 oz)",
      "1 Ground Coffee (12 oz)",
      "Marbella Mug",
    ],
    price: 50.99,
    productUrl: "/bundles/starter_pack",
    buttonLabel: "SHOP NOW",
    type: "bundle",
  },
  {
    id: "cap_and_coffee_pack",
    name: "Cap & Coffee Combo",
    image: capCoffeeComboImage,
    items: ["Marbella cap", "1 Ground Coffee (12 oz)", "Marbella Mug"],
    price: 45.99,
    productUrl: "/bundles/cap_and_coffee_combo",
    buttonLabel: "SHOP NOW",
    type: "bundle",
  },
  {
    id: "t-shirt_and_coffee_combo",
    name: "T-Shirt & Coffee Combo",
    image: TShirtCoffeeComboImage,
    items: ["1 T-shirt", "1 Ground Coffee (12 oz)", "Marbella Mug"],
    price: 44.99,
    productUrl: "/bundles/streetwear_pack",
    buttonLabel: "SHOP NOW",
    type: "bundle",
  },
  {
    id: "streetwear_coffee_pack",
    name: "Streetwear Coffee Pack",
    image: streetwearImage,
    items: ["1 T-shirt", "1 Ground Coffee (12 oz)", "Marbella cap"],
    price: 51.99,
    productUrl: "/bundles/streetwear_pack",
    buttonLabel: "SHOP NOW",
    type: "bundle",
  },
];
