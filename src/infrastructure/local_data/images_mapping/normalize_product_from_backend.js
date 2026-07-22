import { FLAGS_BY_KEY } from "./flags.maps";
import { getImageUrlsFromPaths } from "./storage_images";

export const normalizeProductFromBackend = async (product) => {
  const normalizedFlagKey = String(product?.flag_key ?? "")
    .trim()
    .toLowerCase();

  const flagImage = FLAGS_BY_KEY[normalizedFlagKey] ?? null;

  const sizeVariants = Array.isArray(product?.size_variants)
    ? await Promise.all(
        product.size_variants.map(async (variant) => {
          let images = [];

          if (
            Array.isArray(variant?.images_urls) &&
            variant.images_urls.length > 0
          ) {
            images = variant.images_urls.filter(Boolean);
          }

          if (
            images.length === 0 &&
            Array.isArray(variant?.images_path) &&
            variant.images_path.length > 0
          ) {
            try {
              images = await getImageUrlsFromPaths(variant.images_path);
            } catch (error) {
              console.log(error);
              console.warn(
                `Could not normalize Firebase images for product ${product?.id}, size ${variant?.id}`
              );

              images = [];
            }
          }
          // if (
          //   images.length === 0 &&
          //   Array.isArray(variant?.images_path) &&
          //   variant.images_path.length > 0
          // ) {
          //   images = await getImageUrlsFromPaths(variant.images_path);
          // }

          return {
            ...variant,
            id: String(variant?.id ?? ""),
            price: Number(variant?.price ?? 0),
            sizeGrams: Number(variant?.sizeGrams ?? 0),
            images,
          };
        })
      )
    : [];

  return {
    ...product,

    id: String(product?.id ?? ""),
    active: product?.active !== false,
    priority: Number(product?.priority ?? 999),

    flag_key: normalizedFlagKey || product?.flag_key,
    flag_image: flagImage,

    grindType: String(product?.grindType ?? "")
      .trim()
      .toLowerCase(),

    roast: String(product?.roast ?? "")
      .trim()
      .toLowerCase(),

    size_variants: sizeVariants,
  };
};
