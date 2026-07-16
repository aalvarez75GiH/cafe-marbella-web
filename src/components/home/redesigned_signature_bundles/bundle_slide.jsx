import { Button } from "../../ctas/button";
import { BundleFeatures } from "./bundle_features";

import {
  Slide,
  IntroColumn,
  Eyebrow,
  IntroDecoration,
  IntroTitle,
  IntroDescription,
  BenefitsList,
  Benefit,
  BenefitIcon,
  BenefitContent,
  BenefitTitle,
  BenefitDescription,
  BundleColumn,
  SlideCounter,
  BundleName,
  TitleDecoration,
  BundleDescription,
  Price,
  SlideImageArea,
  SceneImage,
  Badge,
  ButtonWrapper,
} from "./bundle_slide.styles";

const CoffeeBeanIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path
      d="M21.5 5.5C14 6.5 8.5 12 9 18.5c.3 4.2 3.2 7.3 7.5 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path
      d="M10.5 26.5C18 25.5 23.5 20 23 13.5c-.3-4.2-3.2-7.3-7.5-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path
      d="M6 14h20v13H6V14Zm-2-5h24v5H4V9Zm12 0v18M16 9c-3.8 0-6-1.4-6-3.5C10 3.9 11.2 3 12.7 3 15 3 16 6 16 9Zm0 0c3.8 0 6-1.4 6-3.5C22 3.9 20.8 3 19.3 3 17 3 16 6 16 9Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path
      d="M25.5 5.5C15 6.2 8 11.5 7 20.5c-.3 2.6.3 4.7 1.7 6 9.2-.4 14.8-6.8 16.8-21Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    <path
      d="M8.7 26.5C12 20.3 16 15.8 22.5 10.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const BundleSlide = ({ bundle, totalBundles }) => {
  return (
    <Slide>
      <IntroColumn>
        <Eyebrow>Our Signature Bundles</Eyebrow>

        <IntroDecoration aria-hidden="true">
          <span />
          <i />
          <span />
        </IntroDecoration>

        <IntroTitle>
          <span>Curated combinations.</span>
          <em>Extraordinary experiences.</em>
        </IntroTitle>

        <IntroDescription>
          Premium Venezuelan coffee paired with exclusive Marbella merchandise.
          Perfect for gifting. Perfect for you.
        </IntroDescription>

        <BenefitsList>
          <Benefit>
            <BenefitIcon>
              <CoffeeBeanIcon />
            </BenefitIcon>

            <BenefitContent>
              <BenefitTitle>Premium Coffee</BenefitTitle>
              <BenefitDescription>
                100% Arabica from Venezuela
              </BenefitDescription>
            </BenefitContent>
          </Benefit>

          <Benefit>
            <BenefitIcon>
              <GiftIcon />
            </BenefitIcon>

            <BenefitContent>
              <BenefitTitle>Exclusive Merch</BenefitTitle>
              <BenefitDescription>
                Designed for everyday moments
              </BenefitDescription>
            </BenefitContent>
          </Benefit>

          <Benefit>
            <BenefitIcon>
              <LeafIcon />
            </BenefitIcon>

            <BenefitContent>
              <BenefitTitle>Perfectly Paired</BenefitTitle>
              <BenefitDescription>
                Curated with care and intention
              </BenefitDescription>
            </BenefitContent>
          </Benefit>
        </BenefitsList>
      </IntroColumn>

      <BundleColumn>
        <SlideCounter>
          <span>★</span>
          {bundle.number} / {totalBundles}
        </SlideCounter>

        <BundleName>{bundle.name}</BundleName>

        <TitleDecoration aria-hidden="true">
          <span />
          <i />
          <span />
        </TitleDecoration>

        <BundleDescription>{bundle.description}</BundleDescription>

        <BundleFeatures items={bundle.items} />

        <Price>${bundle.price.toFixed(2)}</Price>
        <ButtonWrapper>
          <Button
            variant="primary"
            size="medium"
            width="220px"
            tabletWidth="220px"
            mobileWidth="100%"
          >
            Shop Bundle
            <span aria-hidden="true">→</span>
          </Button>
        </ButtonWrapper>
      </BundleColumn>

      <SlideImageArea>
        {bundle.badge && <Badge>★ {bundle.badge}</Badge>}

        <SceneImage src={bundle.sceneImage || bundle.image} alt={bundle.name} />
      </SlideImageArea>
    </Slide>
  );
};
