import {
  FlyerSlide,
  FlyerImage,
  FlyerButtonWrapper,
  FlyerButton,
  FlyerButtonArrow,
} from "./mobile_flyer_slide.styles";

export const MobileFlyerSlide = ({ bundle, onShopBundle }) => {
  const handleShopBundle = () => {
    onShopBundle?.(bundle);
  };

  return (
    <FlyerSlide>
      <FlyerImage
        src={bundle.mobileFlyerImage}
        alt={`${bundle.name} bundle`}
        draggable="false"
      />

      <FlyerButtonWrapper>
        <FlyerButton type="button" onClick={handleShopBundle}>
          Shop Bundle
          <FlyerButtonArrow aria-hidden="true">→</FlyerButtonArrow>
        </FlyerButton>
      </FlyerButtonWrapper>
    </FlyerSlide>
  );
};
