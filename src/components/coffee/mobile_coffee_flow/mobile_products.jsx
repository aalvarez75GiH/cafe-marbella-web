import { CoffeeProductCard } from "../coffee_product_card/coffee_product_card";
import { MobileCoffeeHeader } from "./mobile_coffee_header";

import { Screen, ProductsList, EmptyMessage } from "./mobile_products.styles";

export const MobileProducts = ({ products, selectedGrind, onBack }) => {
  const title =
    selectedGrind === "ground" ? "Ground beans coffee" : "Whole bean coffee";

  return (
    <Screen>
      <MobileCoffeeHeader title={title} onBack={onBack} />

      {products.length > 0 ? (
        <ProductsList>
          {products.map((product) => (
            <CoffeeProductCard key={product.id} product={product} />
          ))}
        </ProductsList>
      ) : (
        <EmptyMessage>
          No coffee is currently available for this selection.
        </EmptyMessage>
      )}
    </Screen>
  );
};
