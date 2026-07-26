import starterPackImage from "../../../assets/images/bundles/redesigned/scenes/starter_pack_small.png";
import capCoffeeComboImage from "../../../assets/images/bundles/redesigned/scenes/cap_and_coffee_pack.png";
import tShirtCoffeeComboImage from "../../../assets/images/bundles/redesigned/scenes/t-shirt_and_coffee_combo_small.png";
import streetwearImage from "../../../assets/images/bundles/redesigned/scenes/streetware_coffee_pack.png";

import starterPackImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/starter_pack_transparent.png";
import capCoffeeComboImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/cap_and_coffee_pack_transparent.png";
import tShirtCoffeeComboImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/t-shirt_and_coffee_combo_transparent.png";
import streetwearImage_tr from "../../../assets/images/bundles/redesigned/tumbnails/streetware_coffee_pack_transparent.png";

import starterPackFlyer from "../../../assets/images/bundles/flyers/IMG_7577.jpeg";
import capCoffeeComboFlyer from "../../../assets/images/bundles/flyers/cap_coffee_flyer_design.png";
import tShirtCoffeeComboFlyer from "../../../assets/images/bundles/flyers/t-shirt_and_coffee_flyer.png";
import streetwearFlyer from "../../../assets/images/bundles/flyers/streetwear_flyer_design.png";

export const redesignedBundleItems = [
  {
    id: "starter_pack",
    number: "1",
    name: "Starter Pack",
    description:
      "Start every morning with two handcrafted specialty coffees and the Café Marbella signature mug.",

    image: starterPackImage,
    image_transparent: starterPackImage_tr,
    mobileFlyerImage: starterPackFlyer,

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

    imagePosition: "64% center",
  },
  {
    id: "cap_and_coffee_combo",
    number: "2",
    name: "Cap & Coffee Combo",
    description:
      "Experience premium Venezuelan coffee with our signature embroidered Marbella cap.",

    image: capCoffeeComboImage,
    image_transparent: capCoffeeComboImage_tr,
    mobileFlyerImage: capCoffeeComboFlyer,

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

    imagePosition: "60% center",
  },
  {
    id: "t-shirt_and_coffee_combo",
    number: "3",
    name: "T-Shirt & Coffee Combo",
    description:
      "Enjoy premium Venezuelan coffee with our signature mug and exclusive Marbella T-shirt.",

    image: tShirtCoffeeComboImage,
    image_transparent: tShirtCoffeeComboImage_tr,
    mobileFlyerImage: tShirtCoffeeComboFlyer,

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

    imagePosition: "56% center",
  },
  {
    id: "streetwear_coffee_pack",
    number: "4",
    name: "Streetwear Coffee Pack",
    description:
      "Everything you need to enjoy Café Marbella, from specialty coffee to exclusive apparel.",

    image: streetwearImage,
    image_transparent: streetwearImage_tr,
    mobileFlyerImage: streetwearFlyer,

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

    imagePosition: "58% center",
  },
];
