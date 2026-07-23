import { useContext, useEffect, useMemo, useState } from "react";

import { CoffeeHero } from "../../components/coffee/coffee_hero/coffee_hero";
import { CoffeeFilters } from "../../components/coffee/coffee_filters/coffee_filters";
import { CoffeeProductsGrid } from "../../components/coffee/coffee_products_grid/coffee_products_grid";

// import { coffeeProducts } from "../../data/coffee/coffee_products.data";
// import { buildCoffeeCatalog } from "../../utils/coffee/coffee_catalog.utils";
import { useMobileBreakpoint } from "../../hooks/use_mobile_breakpoint";

import { MobileCoffeeFlow } from "../../components/coffee/mobile_coffee_flow/mobile_coffee_flow";

import { CoffeePageContent } from "./coffee_page.styles";

import { GlobalContext } from "../../infrastructure/services/global/global.context";
import { GeolocationContext } from "../../infrastructure/services/geolocation/geolocation.context";
import { WarehouseContext } from "../../infrastructure/services/warehouse/warehouse.context";

export const CoffeePage = () => {
  console.log("CoffeePage rendered");
  const [selectedGrind, setSelectedGrind] = useState("ground");
  const [selectedRoast, setSelectedRoast] = useState("light");

  const isMobile = useMobileBreakpoint();
  const { productsCatalog, activeProducts, isProductsLoading, productsError } =
    useContext(GlobalContext);

  const { deviceLat, deviceLng, locationError, locationStatus } =
    useContext(GeolocationContext);

  const { myWarehouse, inventoryProducts, isWarehouseLoading, warehouseError } =
    useContext(WarehouseContext);

  useEffect(() => {
    console.log("WAREHOUSE:", myWarehouse);
    console.log("WAREHOUSE PRODUCTS:", inventoryProducts);
    console.log("WAREHOUSE LOADING:", isWarehouseLoading);
    console.log("WAREHOUSE ERROR:", warehouseError);
  }, [myWarehouse, inventoryProducts, isWarehouseLoading, warehouseError]);

  useEffect(() => {
    console.log("PRODUCTS LOADING:", isProductsLoading);
    console.log("PRODUCTS ERROR:", productsError);
    console.log("CATALOG:", productsCatalog);
    console.log("ACTIVE PRODUCTS:", activeProducts);
    console.log("LOCATION STATUS:", locationStatus);
    console.log("LAT:", deviceLat);
    console.log("LNG:", deviceLng);
    console.log("LOCATION ERROR:", locationError);
  }, [isProductsLoading, productsError, productsCatalog, activeProducts]);

  const catalog = productsCatalog;

  const filteredProducts = useMemo(() => {
    return catalog.filter(
      (product) =>
        product.grindType === selectedGrind && product.roast === selectedRoast
    );
  }, [catalog, selectedGrind, selectedRoast]);

  if (isMobile) {
    return <MobileCoffeeFlow products={catalog} />;
  }
  return (
    <>
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
