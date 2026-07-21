import { useMemo, useState } from "react";

import { CoffeeHero } from "../../components/coffee/coffee_hero/coffee_hero";
import { CoffeeFilters } from "../../components/coffee/coffee_filters/coffee_filters";
import { CoffeeProductsGrid } from "../../components/coffee/coffee_products_grid/coffee_products_grid";

import { coffeeProducts } from "../../data/coffee/coffee_products.data";
import { buildCoffeeCatalog } from "../../utils/coffee/coffee_catalog.utils";

import { CoffeePageContent } from "./coffee_page.styles";

export const CoffeePage = () => {
  const [selectedGrind, setSelectedGrind] = useState("ground");
  const [selectedRoast, setSelectedRoast] = useState("light");

  const catalog = useMemo(() => {
    return buildCoffeeCatalog(coffeeProducts);
  }, []);

  const filteredProducts = useMemo(() => {
    return catalog.filter(
      (product) =>
        product.active &&
        product.grindType === selectedGrind &&
        product.roast === selectedRoast
    );
  }, [catalog, selectedGrind, selectedRoast]);

  return (
    <>
      <CoffeeHero
      // selectedGrind={selectedGrind}
      // onGrindChange={setSelectedGrind}
      />

      <CoffeePageContent>
        <CoffeeFilters
          selectedGrind={selectedGrind}
          selectedRoast={selectedRoast}
          onGrindChange={setSelectedGrind}
          onRoastChange={setSelectedRoast}
        />

        <CoffeeProductsGrid products={filteredProducts} />
      </CoffeePageContent>
    </>
  );
};
