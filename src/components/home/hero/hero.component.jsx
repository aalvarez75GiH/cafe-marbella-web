import {
  HeroSection,
  HeroBackground,
  HeroOverlay,
  HeroContentWrapper,
  HeroContent,
  Eyebrow,
  TitleContainer,
  DecorativeDivider,
  DecorativeLine,
  DecorativeSymbol,
  Description,
  ActionsContainer,
} from "./hero_styles";

import { Text } from "../../../infrastructure/typography/text.component";
import { Button } from "../../../components/ctas/button";
import { theme } from "../../../infrastructure/theme/index";

export const Hero_Component = () => {
  const handleShopCoffee = () => {
    console.log("Navigate to coffee");
  };

  const handleExploreBundles = () => {
    console.log("Navigate to bundles");
  };

  return (
    <HeroSection>
      <HeroBackground />

      <HeroOverlay />

      <HeroContentWrapper>
        <HeroContent>
          <Eyebrow>
            <Text variant="label" color={theme.colors.text.gold_light}>
              PREMIUM VENEZUELAN COFFEE
            </Text>
          </Eyebrow>

          <TitleContainer>
            <Text as="h1" variant="heroTitle">
              Born in Venezuela.
              <br />
              Shared with the world.
            </Text>
          </TitleContainer>

          <DecorativeDivider aria-hidden="true">
            <DecorativeLine />
            <DecorativeSymbol>❧</DecorativeSymbol>
            <DecorativeLine />
          </DecorativeDivider>

          <Description>
            <Text as="p" variant="body">
              Experience premium single-origin coffee inspired by
              Venezuela&apos;s rich landscapes and family traditions. Every cup
              is an invitation to slow down, connect, and enjoy the warmth of
              great coffee.
            </Text>
          </Description>

          <ActionsContainer>
            <Button variant="primary" size="large" onClick={handleShopCoffee}>
              SHOP COFFEE
              <span aria-hidden="true">→</span>
            </Button>

            <Button
              variant="white_transparent"
              size="large"
              onClick={handleExploreBundles}
            >
              EXPLORE BUNDLES
              <span aria-hidden="true">→</span>
            </Button>
          </ActionsContainer>
        </HeroContent>
      </HeroContentWrapper>
    </HeroSection>
  );
};
