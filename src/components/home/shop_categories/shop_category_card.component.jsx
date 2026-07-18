import {
  Card,
  CardBackground,
  CardContent,
  CardDescription,
  CardOverlay,
  CardTitle,
  ContentGroup,
  ArrowButton,
  ArrowIcon,
} from "./shop_category_card.styles";

export const ShopCategoryCard = ({ category }) => {
  const { title, description, image } = category;

  return (
    <Card type="button" aria-label={`Explore ${title}`}>
      <CardBackground $image={image} />

      <CardOverlay />

      <CardContent>
        <ContentGroup>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </ContentGroup>

        <ArrowButton aria-hidden="true">
          <ArrowIcon viewBox="0 0 24 24">
            <path d="M8.5 4.5L16 12L8.5 19.5" />
          </ArrowIcon>
        </ArrowButton>
      </CardContent>
    </Card>
  );
};
