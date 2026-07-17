import { Button } from "../../ctas/button";
import { BundleFeatures } from "./bundle_features";
import { WholeBeanIcon } from "../../../assets/icons/bundles/whole-bean.icon";
import { GiftIcon } from "../../../assets/icons/bundles/gift.icon";
import { LeafIcon } from "../../../assets/icons/bundles/leaf.icon";

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
              <WholeBeanIcon />
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

        {/* <SceneImage src={bundle.sceneImage || bundle.image} alt={bundle.name} /> */}
        <SceneImage
          src={bundle.sceneImage || bundle.image}
          alt={bundle.name}
          $objectPosition={bundle.imagePosition}
          $imageFit={bundle.imageFit}
        />
      </SlideImageArea>
    </Slide>
  );
};
