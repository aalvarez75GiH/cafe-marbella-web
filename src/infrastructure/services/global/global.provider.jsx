import { useCallback, useEffect, useMemo, useState } from "react";

import { gettingAllProductsCatalogRequest } from "./global.services";
import { normalizeProductFromBackend } from "../../local_data/images_mapping/normalize_product_from_backend";

import { GlobalContext } from "./global.context";

export const Global_Context_Provider = ({ children }) => {
  const [productsCatalog, setProductsCatalog] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(null);

  const loadProductsCatalog = useCallback(async () => {
    setIsProductsLoading(true);
    setProductsError(null);

    try {
      const products = await gettingAllProductsCatalogRequest();

      const activeBackendProducts = products.filter(
        (product) => product?.active !== false
      );

      const normalizedProducts = await Promise.all(
        activeBackendProducts.map((product) =>
          normalizeProductFromBackend(product)
        )
      );

      setProductsCatalog(normalizedProducts);
    } catch (error) {
      console.error("Could not load products catalog:", error);

      setProductsError(error?.message || "Could not load products catalog.");

      setProductsCatalog([]);
    } finally {
      setIsProductsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const initializeProductsCatalog = async () => {
      try {
        const products = await gettingAllProductsCatalogRequest();

        const activeBackendProducts = products.filter(
          (product) => product?.active !== false
        );

        const normalizedProducts = await Promise.all(
          activeBackendProducts.map((product) =>
            normalizeProductFromBackend(product)
          )
        );

        if (isCancelled) {
          return;
        }

        setProductsCatalog(normalizedProducts);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        console.error("Could not load products catalog:", error);

        setProductsError(error?.message || "Could not load products catalog.");

        setProductsCatalog([]);
      } finally {
        if (!isCancelled) {
          setIsProductsLoading(false);
        }
      }
    };

    initializeProductsCatalog();

    return () => {
      isCancelled = true;
    };
  }, []);

  const activeProducts = useMemo(() => {
    return productsCatalog.filter((product) => product?.active !== false);
  }, [productsCatalog]);

  const formatCentsToUSD = useCallback((cents = 0) => {
    const normalizedCents = Number(cents);

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number.isFinite(normalizedCents) ? normalizedCents / 100 : 0);
  }, []);

  const value = useMemo(
    () => ({
      productsCatalog,
      activeProducts,

      isProductsLoading,
      productsError,

      loadProductsCatalog,
      formatCentsToUSD,
    }),
    [
      productsCatalog,
      activeProducts,
      isProductsLoading,
      productsError,
      loadProductsCatalog,
      formatCentsToUSD,
    ]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
