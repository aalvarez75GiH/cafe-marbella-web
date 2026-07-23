import { useEffect, useMemo, useState, useContext } from "react";

import { WarehouseContext } from "./warehouse.context";
import { GlobalContext } from "../global/global.context";
import { GeolocationContext } from "../geolocation/geolocation.context";
import { gettingClosestWarehouseForDeviceRequest } from "./warehouse.services";

const makeSku = (productId, variantId) => `${productId}:${variantId}`;

const getStock = (warehouse, productId, variantId) => {
  const sku = makeSku(productId, variantId);

  return Number(warehouse?.inventory?.[sku] ?? 0);
};

const buildInventoryProducts = (catalogProducts, warehouse) => {
  return catalogProducts.map((product) => {
    const sizeVariants = (product.size_variants ?? []).map((variant) => {
      const stock = getStock(warehouse, product.id, variant.id);

      return {
        ...variant,
        stock,
        inStock: stock > 0,
      };
    });

    const totalStock = sizeVariants.reduce(
      (sum, variant) => sum + Number(variant.stock ?? 0),
      0
    );

    return {
      ...product,
      size_variants: sizeVariants,
      totalStock,
      inStock: totalStock > 0,
      soldOut: totalStock === 0,
    };
  });
};

export const Warehouse_Context_Provider = ({ children }) => {
  const { productsCatalog } = useContext(GlobalContext);

  const { deviceLat, deviceLng, locationStatus } =
    useContext(GeolocationContext);

  const [myWarehouse, setMyWarehouse] = useState(null);
  const [isWarehouseLoading, setIsWarehouseLoading] = useState(true);
  const [warehouseError, setWarehouseError] = useState(null);

  useEffect(() => {
    if (
      locationStatus !== "granted" ||
      !Number.isFinite(deviceLat) ||
      !Number.isFinite(deviceLng)
    ) {
      return;
    }

    let isCancelled = false;

    const loadClosestWarehouse = async () => {
      try {
        const warehouse = await gettingClosestWarehouseForDeviceRequest(
          deviceLat,
          deviceLng
        );

        if (isCancelled) {
          return;
        }

        setMyWarehouse(warehouse);
        setWarehouseError(null);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        setWarehouseError(
          error?.message || "Could not load the closest warehouse."
        );

        setMyWarehouse(null);
      } finally {
        if (!isCancelled) {
          setIsWarehouseLoading(false);
        }
      }
    };

    loadClosestWarehouse();

    return () => {
      isCancelled = true;
    };
  }, [deviceLat, deviceLng, locationStatus]);

  const inventoryProducts = useMemo(() => {
    if (!myWarehouse) {
      return [];
    }

    return buildInventoryProducts(productsCatalog, myWarehouse);
  }, [productsCatalog, myWarehouse]);

  const shopProductsGround = useMemo(
    () => inventoryProducts.filter((product) => product.grindType === "ground"),
    [inventoryProducts]
  );

  const shopProductsWhole = useMemo(
    () => inventoryProducts.filter((product) => product.grindType === "whole"),
    [inventoryProducts]
  );

  const value = useMemo(
    () => ({
      myWarehouse,

      isWarehouseLoading,
      warehouseError,

      inventoryProducts,
      shopProductsGround,
      shopProductsWhole,

      makeSku,
      getStock,
    }),
    [
      myWarehouse,
      isWarehouseLoading,
      warehouseError,
      inventoryProducts,
      shopProductsGround,
      shopProductsWhole,
    ]
  );

  return (
    <WarehouseContext.Provider value={value}>
      {children}
    </WarehouseContext.Provider>
  );
};
