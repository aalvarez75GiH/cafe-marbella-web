import { CoffeeProductCard } from "../coffee_product_card/coffee_product_card";

import {
  ProductsSection,
  ProductsGrid,
  EmptyProducts,
} from "./coffee_products_grid.styles";

export const CoffeeProductsGrid = ({ products = [] }) => {
  if (!products.length) {
    return (
      <EmptyProducts>
        <strong>No coffees match these filters.</strong>
        <span>Try selecting another grind type or roast level.</span>
      </EmptyProducts>
    );
  }

  return (
    <ProductsSection>
      <ProductsGrid $productCount={products.length}>
        {products.map((product) => (
          <CoffeeProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ProductsSection>
  );
};
