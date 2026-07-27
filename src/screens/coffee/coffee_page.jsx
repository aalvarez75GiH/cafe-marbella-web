import { useContext, useEffect, useMemo, useState } from "react";

import { CoffeeHero } from "../../components/coffee/coffee_hero/coffee_hero";
import { CoffeeFilters } from "../../components/coffee/coffee_filters/coffee_filters";
import { CoffeeProductsGrid } from "../../components/coffee/coffee_products_grid/coffee_products_grid";

import { useMobileBreakpoint } from "../../hooks/use_mobile_breakpoint";
import { MobileCoffeeFlow } from "../../components/coffee/mobile_coffee_flow/mobile_coffee_flow";
import {
  CoffeeCatalogContainer,
  CoffeeCatalogLayout,
  CoffeeTrustSidebar,
  TrustSidebarCard,
  TrustSidebarItem,
  TrustSidebarIcon,
  TrustSidebarCopy,
  ResultsToolbar,
  ResultsSummary,
  ResultsTitle,
  ResultsMeta,
  SortControl,
  SortLabel,
  SortSelect,
  CoffeeTrustStrip,
  TrustStripItem,
  TrustStripIcon,
  TrustStripCopy,
  CoffeeHelpCard,
  CoffeeHelpTitle,
  CoffeeHelpText,
  CoffeeHelpButton,
} from "./coffee_page.styles";

import { CoffeeTopBar } from "../../components/coffee/coffee_top_bar.component/coffee_top_bar.component";
import {
  ArabicaIcon,
  SingleOriginIcon,
  FreshRoastIcon,
  ShippingIcon,
  SecurePaymentIcon,
  GuaranteeIcon,
  SecureCheckoutIcon,
} from "../../assets/icons/coffee_app/coffe_page";

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

      <CoffeeCatalogContainer>
        <CoffeeFilters
          selectedGrind={selectedGrind}
          selectedRoast={selectedRoast}
          onGrindChange={setSelectedGrind}
          onRoastChange={setSelectedRoast}
        />

        <ResultsToolbar>
          <ResultsSummary>
            <ResultsTitle>
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </ResultsTitle>

            <ResultsMeta>
              {selectedRoast} roast · {selectedGrind}
            </ResultsMeta>
          </ResultsSummary>

          <SortControl>
            <SortLabel htmlFor="coffee-sort">Sort by</SortLabel>

            <SortSelect id="coffee-sort" defaultValue="featured">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="rating">Highest rated</option>
            </SortSelect>
          </SortControl>
        </ResultsToolbar>

        <CoffeeCatalogLayout>
          <CoffeeTrustSidebar>
            <TrustSidebarCard>
              <TrustSidebarItem>
                <TrustSidebarIcon aria-hidden="true">
                  <ArabicaIcon />
                </TrustSidebarIcon>

                <TrustSidebarCopy>
                  <strong>100% Arabica</strong>
                  <span>Premium quality</span>
                </TrustSidebarCopy>
              </TrustSidebarItem>

              <TrustSidebarItem>
                <TrustSidebarIcon aria-hidden="true">
                  <SingleOriginIcon />
                </TrustSidebarIcon>

                <TrustSidebarCopy>
                  <strong>Single Origin</strong>
                  <span>Ethically sourced</span>
                </TrustSidebarCopy>
              </TrustSidebarItem>

              <TrustSidebarItem>
                <TrustSidebarIcon aria-hidden="true">
                  <FreshRoastIcon />
                </TrustSidebarIcon>

                <TrustSidebarCopy>
                  <strong>Freshly Roasted</strong>
                  <span>Small batches</span>
                </TrustSidebarCopy>
              </TrustSidebarItem>

              <TrustSidebarItem>
                <TrustSidebarIcon aria-hidden="true">
                  <SecurePaymentIcon />
                </TrustSidebarIcon>

                <TrustSidebarCopy>
                  <strong>Secure Payment</strong>
                  <span>Safe and trusted</span>
                </TrustSidebarCopy>
              </TrustSidebarItem>
            </TrustSidebarCard>
            <CoffeeHelpCard>
              <CoffeeHelpTitle>Need help?</CoffeeHelpTitle>

              <CoffeeHelpText>
                We’re here to help you find the perfect coffee.
              </CoffeeHelpText>

              <CoffeeHelpButton
                type="button"
                onClick={() => console.log("Open coffee support")}
              >
                <span>Chat with us</span>
              </CoffeeHelpButton>
            </CoffeeHelpCard>
          </CoffeeTrustSidebar>

          <CoffeeProductsGrid products={filteredProducts} />
        </CoffeeCatalogLayout>

        <CoffeeTrustStrip>
          <TrustStripItem>
            <TrustStripIcon aria-hidden="true">
              <ShippingIcon />
            </TrustStripIcon>

            <TrustStripCopy>
              <strong>Free shipping</strong>
              <span>Some situations</span>
            </TrustStripCopy>
          </TrustStripItem>
          <TrustStripItem>
            <TrustStripIcon aria-hidden="true">
              <FreshRoastIcon />
            </TrustStripIcon>

            <TrustStripCopy>
              <strong>Roasted fresh</strong>
              <span>Small batches daily</span>
            </TrustStripCopy>
          </TrustStripItem>

          <TrustStripItem>
            <TrustStripIcon aria-hidden="true">
              <GuaranteeIcon />
            </TrustStripIcon>

            <TrustStripCopy>
              <strong>Satisfaction guaranteed</strong>
              <span>Love it or we make it right</span>
            </TrustStripCopy>
          </TrustStripItem>

          <TrustStripItem>
            <TrustStripIcon aria-hidden="true">
              <SecureCheckoutIcon />
            </TrustStripIcon>

            <TrustStripCopy>
              <strong>Secure checkout</strong>
              <span>Safe and encrypted payments</span>
            </TrustStripCopy>
          </TrustStripItem>
        </CoffeeTrustStrip>
      </CoffeeCatalogContainer>
    </>
  );
};
