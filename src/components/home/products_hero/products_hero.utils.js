const normalizeValue = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const allowedOrigins = new Set(["venezuela", "mexico"]);
const allowedGrinds = new Set(["ground", "whole"]);
const allowedRoasts = new Set(["light", "medium", "dark"]);

const getOriginKey = (originCountry) => {
  const normalizedOrigin = normalizeValue(originCountry);

  if (normalizedOrigin.includes("mexico")) {
    return "mexico";
  }

  if (normalizedOrigin.includes("venezuela")) {
    return "venezuela";
  }

  return normalizedOrigin;
};

const getGrindKey = (grindType) => normalizeValue(grindType);

const getStartingPrice = (sizeVariants = []) => {
  const prices = sizeVariants
    .map((variant) => Number(variant.price))
    .filter(Number.isFinite);

  return prices.length ? Math.min(...prices) : null;
};

const getDefaultVariant = (sizeVariants = []) => {
  return (
    sizeVariants.find((variant) => variant.isDefault) ?? sizeVariants[0] ?? null
  );
};

const originOrder = {
  venezuela: 0,
  mexico: 1,
};

const grindOrder = {
  ground: 0,
  whole: 1,
};

const roastOrder = {
  light: 0,
  medium: 1,
  dark: 2,
};

export const buildProductsHeroSlides = (products = []) => {
  return products
    .filter((product) => {
      if (!product.active) {
        return false;
      }

      const origin = getOriginKey(product.originCountry);
      const grind = getGrindKey(product.grindType);
      const roast = normalizeValue(product.roast);

      if (origin === "mexico") {
        return false;
      }

      return (
        allowedOrigins.has(origin) &&
        allowedGrinds.has(grind) &&
        allowedRoasts.has(roast)
      );
    })
    .map((product) => {
      const origin = getOriginKey(product.originCountry);
      const grind = getGrindKey(product.grindType);
      const roast = normalizeValue(product.roast);

      const defaultVariant = getDefaultVariant(product.size_variants);

      return {
        id: product.id,

        // Keep a reference to the original DB object
        product,

        // Product classification
        origin,
        originLabel: product.originCountry,

        grind,
        grindLabel: grind === "whole" ? "Whole Bean" : "Ground Coffee",

        roast,
        roastLabel: product.product_name?.en ?? `${product.roast} Roast`,

        // Hero content
        title: product.product_name?.en ?? product.title,
        subtitle: product.product_subtitle?.en ?? "",
        description: product.description?.en ?? "",

        // UI
        rating: product.rating ?? 0,
        flagKey: product.flag_key,
        priority: Number(product.priority ?? 0),

        // Variants
        sizeVariants: product.size_variants ?? [],
        defaultVariant,

        // Hero price
        startingPrice: getStartingPrice(product.size_variants),

        // Hero image (250g by default)
        image: defaultVariant?.images?.[0] ?? "",
        // imagePath: defaultVariant?.images_path?.[0] ?? null,
        // imageKey: defaultVariant?.image_keys?.[0] ?? null,
      };
    })
    .sort((a, b) => {
      const originDifference =
        (originOrder[a.origin] ?? 99) - (originOrder[b.origin] ?? 99);

      if (originDifference !== 0) {
        return originDifference;
      }

      const grindDifference =
        (grindOrder[a.grind] ?? 99) - (grindOrder[b.grind] ?? 99);

      if (grindDifference !== 0) {
        return grindDifference;
      }

      const roastDifference =
        (roastOrder[a.roast] ?? 99) - (roastOrder[b.roast] ?? 99);

      if (roastDifference !== 0) {
        return roastDifference;
      }

      return a.priority - b.priority;
    });
  // .sort((a, b) => {
  //   const roastDifference =
  //     (roastOrder[a.roast] ?? 99) - (roastOrder[b.roast] ?? 99);

  //   if (roastDifference !== 0) {
  //     return roastDifference;
  //   }

  //   return a.priority - b.priority;
  // });
  // .sort((a, b) => a.priority - b.priority);
};

export const formatHeroPrice = (priceInCents) => {
  if (priceInCents == null) {
    return "";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceInCents / 100);
};
