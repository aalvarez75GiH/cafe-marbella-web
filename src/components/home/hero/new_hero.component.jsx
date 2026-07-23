import heroBackground from "../../../assets/images/hero/hero_5.png";
import mexicoGroundBag from "../../../assets/images/hero/mex_gb_for_hero-preview.png";
import venezuelaGroundBag from "../../../assets/images/hero/vzla_gb_for_hero-removebg.png";
import venezuelaWholeBag from "../../../assets/images/hero/vzla_wb_for_hero-preview.png";

import {
  //   ActionsContainer,
  BackgroundImage,
  BenefitsContainer,
  BenefitDivider,
  BenefitIcon,
  BenefitItem,
  BenefitLabel,
  ContentContainer,
  Description,
  Divider,
  DividerBean,
  DividerLine,
  Eyebrow,
  Hero,
  HeroContent,
  LearnMoreButton,
  ProductBag,
  ProductBagImage,
  ProductsContainer,
  ShopButton,
  Title,
  DesktopActionsContainer,
  MobileActionsContainer,
} from "./new_hero.styles";

const LeafIcon = () => (
  <BenefitIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.5 4.5C13.5 4.5 7.5 7.5 6 14.5c4.5 1 10.5-1 13.5-10Z" />
    <path d="M6 14.5C7.5 16 8 18 8 20" />
    <path d="M6 14.5c3-2.5 6-4 9.5-5" />
  </BenefitIcon>
);

const MountainIcon = () => (
  <BenefitIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="m3 19 6.2-10 3.1 4.5L15.5 9 21 19H3Z" />
    <path d="m7.2 12.2 2 1.4 1.4-1" />
  </BenefitIcon>
);

const CoffeeBeanIcon = () => (
  <BenefitIcon viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16.8 4.2c3.1 3.1 2.6 8.7-1 12.3s-9.2 4.1-12.3 1-2.6-8.7 1-12.3 9.2-4.1 12.3-1Z" />
    <path d="M16.8 4.2c-1 4.4-4.2 8.5-8.2 10.4-1.7.8-3.4 1.1-5.1.9" />
  </BenefitIcon>
);

export const NewHero_Component = () => {
  return (
    <Hero id="main-hero">
      <BackgroundImage $image={heroBackground} />

      <ContentContainer>
        <HeroContent>
          <Eyebrow>Premium Venezuelan Coffee</Eyebrow>

          <Title>
            Born in Venezuela.
            <br />
            Shared with the world.
          </Title>

          <Divider aria-hidden="true">
            <DividerLine />
            <DividerBean />
            <DividerLine />
          </Divider>

          <Description>
            From our family farms to your cup.
            <br />
            100% organic. 100% Latin America.
          </Description>

          <DesktopActionsContainer>
            <ShopButton type="button">
              Shop Coffee
              <span aria-hidden="true">→</span>
            </ShopButton>

            <LearnMoreButton type="button">
              Learn More
              <span aria-hidden="true">→</span>
            </LearnMoreButton>
          </DesktopActionsContainer>

          <BenefitsContainer>
            <BenefitItem>
              <LeafIcon />
              <BenefitLabel>
                100% Organic
                <br />
                Coffee
              </BenefitLabel>
            </BenefitItem>

            <BenefitDivider />

            <BenefitItem>
              <MountainIcon />
              <BenefitLabel>
                Sourced from
                <br />
                Family Farms
              </BenefitLabel>
            </BenefitItem>

            <BenefitDivider />

            <BenefitItem>
              <CoffeeBeanIcon />
              <BenefitLabel>
                Roasted with
                <br />
                Care
              </BenefitLabel>
            </BenefitItem>
          </BenefitsContainer>
        </HeroContent>

        <ProductsContainer aria-label="Café Marbella coffee collection">
          <ProductBag $position="left" $delay="0.4s" $startX="-42px">
            <ProductBagImage
              src={venezuelaGroundBag}
              alt="Café Marbella Venezuela ground coffee"
            />
          </ProductBag>

          <ProductBag $position="center" $delay="0.62s" $startX="-34px">
            <ProductBagImage
              src={venezuelaWholeBag}
              alt="Café Marbella Venezuela whole-bean coffee"
            />
          </ProductBag>

          <ProductBag $position="right" $delay="0.84s" $startX="-26px">
            <ProductBagImage
              src={mexicoGroundBag}
              alt="Café Marbella México coffee"
            />
          </ProductBag>
        </ProductsContainer>
        <MobileActionsContainer>
          <ShopButton type="button">
            Shop Coffee
            <span aria-hidden="true">→</span>
          </ShopButton>

          <LearnMoreButton type="button">
            Learn More
            <span aria-hidden="true">→</span>
          </LearnMoreButton>
        </MobileActionsContainer>
      </ContentContainer>
    </Hero>
  );
};
