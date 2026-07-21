import { CoffeeProductCard } from "../coffee_product_card/coffee_product_card";

import {
  ProductsSection,
  ProductsHeader,
  ProductsSummary,
  ProductsCount,
  ProductsGrid,
} from "./coffee_products_grid.styles";

export const CoffeeProductsGrid = ({ products }) => {
  return (
    <ProductsSection>
      <ProductsHeader>
        <ProductsSummary>
          <strong>Showing selected coffee</strong>

          <ProductsCount>
            {products.length} {products.length === 1 ? "product" : "products"}
          </ProductsCount>
        </ProductsSummary>
      </ProductsHeader>

      <ProductsGrid>
        {products.map((product) => (
          <CoffeeProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ProductsSection>
  );
};
