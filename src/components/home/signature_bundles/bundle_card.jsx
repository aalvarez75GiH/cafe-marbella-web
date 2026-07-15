import { Button } from "../../../components/ctas/button";
import { Text } from "../../../infrastructure/typography/text.component";

import {
  Card,
  Badge,
  ImageContainer,
  ProductImage,
  Content,
  ProductName,
  FeaturesList,
  FeatureItem,
  CheckIcon,
  Price,
  ButtonContainer,
} from "./bundle_card.styles";

export const BundleCard = ({
  name,
  image,
  badge,
  items,
  price,
  buttonLabel,
}) => {
  return (
    <Card>
      {badge && (
        <Badge>
          <Text variant="label" color="inherit">
            {badge}
          </Text>
        </Badge>
      )}

      <ImageContainer>
        <ProductImage src={image} alt={name} />
      </ImageContainer>

      <Content>
        <ProductName variant="cardTitle" color="inherit" as="h3">
          {name}
        </ProductName>

        <FeaturesList>
          {items.map((item) => (
            <FeatureItem key={item}>
              <CheckIcon aria-hidden="true">✓</CheckIcon>

              <Text variant="bodySmall" color="inherit" as="span">
                {item}
              </Text>
            </FeatureItem>
          ))}
        </FeaturesList>

        <Price variant="price" color="inherit" as="p">
          ${price.toFixed(2)}
        </Price>

        <ButtonContainer>
          <Button width="100%">{buttonLabel}</Button>
        </ButtonContainer>
      </Content>
    </Card>
  );
};
