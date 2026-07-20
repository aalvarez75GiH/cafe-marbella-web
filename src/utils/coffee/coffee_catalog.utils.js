import { productImageMap, flagImageMap } from "../../data/coffee/coffee_assets";

export const buildCoffeeCatalog = (products) => {
  return products.map((product) => {
    const imageKey = `${product.flag_key}-${product.grindType}`;

    return {
      ...product,
      images: productImageMap[imageKey],
      flagImage: flagImageMap[product.flag_key],
    };
  });
};
