import { useContext, useEffect, useMemo, useState } from "react";

import { CoffeeHero } from "../../components/coffee/coffee_hero/coffee_hero";
import { CoffeeFilters } from "../../components/coffee/coffee_filters/coffee_filters";
import { CoffeeProductsGrid } from "../../components/coffee/coffee_products_grid/coffee_products_grid";

import { useMobileBreakpoint } from "../../hooks/use_mobile_breakpoint";
import { MobileCoffeeFlow } from "../../components/coffee/mobile_coffee_flow/mobile_coffee_flow";
import { CoffeePageContent } from "./coffee_page.styles";
import { CoffeeTopBar } from "../../components/coffee/coffee_top_bar.component/coffee_top_bar.component";

import { getFilteredCoffeeProducts } from "../../infrastructure/services/global/global.utils";
import { GlobalContext } from "../../infrastructure/services/global/global.context";
import { WarehouseContext } from "../../infrastructure/services/warehouse/warehouse.context";

export const CoffeePage = () => {
  console.log("CoffeePage rendered");
  const [selectedGrind, setSelectedGrind] = useState("ground");
  const [selectedRoast, setSelectedRoast] = useState("light");

  const isMobile = useMobileBreakpoint();
  const { productsCatalog } = useContext(GlobalContext);

  const { myWarehouse, inventoryProducts, isWarehouseLoading, warehouseError } =
    useContext(WarehouseContext);

  useEffect(() => {
    console.log("WAREHOUSE:", myWarehouse);
    console.log("WAREHOUSE PRODUCTS:", inventoryProducts);
    console.log("WAREHOUSE LOADING:", isWarehouseLoading);
    console.log("WAREHOUSE ERROR:", warehouseError);
  }, [myWarehouse, inventoryProducts, isWarehouseLoading, warehouseError]);

  const catalog = productsCatalog;

  const filteredProducts = useMemo(() => {
    return getFilteredCoffeeProducts({
      products: catalog,
      selectedGrind,
      selectedRoast,
      activeOnly: true,
    });
  }, [catalog, selectedGrind, selectedRoast]);

  if (isMobile) {
    return <MobileCoffeeFlow products={catalog} />;
  }
  return (
    <>
      <CoffeeTopBar />

      <CoffeeHero />

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
