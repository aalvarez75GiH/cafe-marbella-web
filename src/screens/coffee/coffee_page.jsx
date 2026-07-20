import { useMemo, useState } from "react";

import { coffeeProducts } from "../../data/coffee/coffee_products.data";
import { buildCoffeeCatalog } from "../../utils/coffee/coffee_catalog.utils";

export const CoffeePage = () => {
  const [selectedGrind, setSelectedGrind] = useState("whole");
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

  console.log(filteredProducts);

  return (
    <main>
      <h1>Explore our coffee</h1>
    </main>
  );
};
