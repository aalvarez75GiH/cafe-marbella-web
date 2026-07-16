import starterPackImage from "../../../assets/images/bundles/redesigned/scenes/starter_pack_small.png";
import capCoffeeComboImage from "../../../assets/images/bundles/redesigned/scenes/cap_and_coffee_pack.png";
import tShirtCoffeeComboImage from "../../../assets/images/bundles/redesigned/scenes/t-shirt_and_coffee_combo_small.png";
import streetwearImage from "../../../assets/images/bundles/redesigned/scenes/streetware_coffee_pack.png";

import starterPackImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/starter_pack_transparent.png";
import capCoffeeComboImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/cap_and_coffee_pack_transparent.png";
import tShirtCoffeeComboImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/t-shirt_and_coffee_combo_transparent.png";
import streetwearImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/streetware_coffee_pack_transparent.png";

export const redesignedBundleItems = [
  {
    id: "starter_pack",
    number: "1",
    name: "Starter Pack",
    description: "Our complete Marbella coffee experience.",
    image: starterPackImage,
    image_transparent: starterPackImage_tr,
    badge: "Best Seller",
    price: 50.99,
    productUrl: "/bundles/starter_pack",
    backgroundTone: "cream",
    items: [
      {
        type: "coffee",
        label: "Whole Bean Coffee",
      },
      {
        type: "coffee",
        label: "Ground Coffee",
      },
      {
        type: "mug",
        label: "Marbella Mug",
      },
    ],
  },
  {
    id: "cap_and_coffee_combo",
    number: "2",
    name: "Cap & Coffee Combo",
    description: "Take Marbella with you, wherever the day takes you.",
    image: capCoffeeComboImage,
    image_transparent: capCoffeeComboImage_tr,
    price: 45.99,
    productUrl: "/bundles/cap_and_coffee_combo",
    backgroundTone: "warm",
    items: [
      {
        type: "cap",
        label: "Marbella Cap",
      },
      {
        type: "coffee",
        label: "Ground Coffee",
      },
      {
        type: "mug",
        label: "Marbella Mug",
      },
    ],
  },
  {
    id: "t-shirt_and_coffee_combo",
    number: "3",
    name: "T-Shirt & Coffee Combo",
    description: "Wear your love for great coffee. Anywhere. Anytime.",
    image: tShirtCoffeeComboImage,
    image_transparent: tShirtCoffeeComboImage_tr,
    price: 44.99,
    productUrl: "/bundles/t-shirt_and_coffee_combo",
    backgroundTone: "light",
    items: [
      {
        type: "tshirt",
        label: "Marbella T-Shirt",
      },
      {
        type: "coffee",
        label: "Ground Coffee",
      },
      {
        type: "mug",
        label: "Marbella Mug",
      },
    ],
  },
  {
    id: "streetwear_coffee_pack",
    number: "4",
    name: "Streetwear Coffee Pack",
    description: "Elevated coffee. Effortless style. Made for wherever you go.",
    image: streetwearImage,
    image_transparent: streetwearImage_tr,
    price: 51.99,
    productUrl: "/bundles/streetwear_pack",
    backgroundTone: "olive",
    items: [
      {
        type: "cap",
        label: "Marbella Cap",
      },
      {
        type: "coffee",
        label: "Ground Coffee",
      },
      {
        type: "tshirt",
        label: "T-Shirt",
      },
    ],
  },
];
