export const getFilteredCoffeeProducts = ({
  products = [],
  selectedGrind,
  selectedRoast,
  activeOnly = true,
}) => {
  return products
    .filter((product) => {
      const matchesActive = activeOnly ? product.active : true;

      return (
        matchesActive &&
        product.grindType === selectedGrind &&
        product.roast === selectedRoast
      );
    })
    .sort((productA, productB) => {
      const priorityA = Number(productA.priority ?? 999);
      const priorityB = Number(productB.priority ?? 999);

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      return (productA.originCountry ?? "").localeCompare(
        productB.originCountry ?? ""
      );
    });
};
