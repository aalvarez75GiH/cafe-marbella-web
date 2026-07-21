import {
  Card,
  CardHeader,
  Origin,
  ProductMeta,
  Rating,
  RatingStar,
  RatingValue,
  FlagImage,
  ProductImageArea,
  ProductImage,
  ProductContent,
  ProductDetails,
  RoastLevel,
  ProductName,
  SizesList,
  SizeItem,
  SizeDivider,
  ViewLink,
  GrindIdentificationLine,
} from "./coffee_product_card.styles";

export const CoffeeProductCard = ({ product }) => {
  const origin = product.originCountry;
  const roastLabel = product.product_name?.en;
  const productName = product.product_subtitle?.en;

  return (
    <Card>
      <CardHeader>
        <Origin>{origin}</Origin>

        <ProductMeta>
          <Rating>
            <RatingStar aria-hidden="true">★</RatingStar>
            <RatingValue>{product.rating}</RatingValue>
          </Rating>

          <FlagImage src={product.flagImage} alt={`${origin} flag`} />
        </ProductMeta>
      </CardHeader>

      <ProductImageArea>
        <ProductImage src={product.images?.front} alt={productName} />
        {/* <ProductImage src={product.images} alt={productName} /> */}
      </ProductImageArea>

      <ProductContent>
        <ProductDetails>
          <RoastLevel>{roastLabel}</RoastLevel>
          <ProductName>{productName}</ProductName>

          <SizesList aria-label="Available sizes">
            {product.size_variants.map((variant, index) => (
              <SizeItem key={variant.id}>
                {variant.sizeLabel}

                {index < product.size_variants.length - 1 && (
                  <SizeDivider aria-hidden="true" />
                )}
              </SizeItem>
            ))}
          </SizesList>
        </ProductDetails>

        <ViewLink href={`/coffee/${product.id}`}>View</ViewLink>
      </ProductContent>

      <GrindIdentificationLine $grindType={product.grindType} />
    </Card>
  );
};
