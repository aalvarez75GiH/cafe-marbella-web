import {
  ThumbnailButton,
  ThumbnailImageWrapper,
  ThumbnailImage,
  ThumbnailContent,
  ThumbnailName,
  ThumbnailPrice,
} from "./bundle_thumbnail.styles";

export const BundleThumbnail = ({ bundle, isActive, onClick }) => {
  const formattedPrice = `$${bundle.price.toFixed(2)}`;

  return (
    <ThumbnailButton
      type="button"
      onClick={onClick}
      $isActive={isActive}
      aria-label={`Show ${bundle.name}`}
      aria-pressed={isActive}
    >
      <ThumbnailImageWrapper>
        <ThumbnailImage
          src={bundle.image_transparent}
          alt={bundle.name}
          draggable="false"
        />
      </ThumbnailImageWrapper>

      <ThumbnailContent>
        <ThumbnailName>{bundle.name}</ThumbnailName>

        <ThumbnailPrice>{formattedPrice}</ThumbnailPrice>
      </ThumbnailContent>
    </ThumbnailButton>
  );
};
