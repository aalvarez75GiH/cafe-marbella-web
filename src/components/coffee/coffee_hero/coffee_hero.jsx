import {
  Hero,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroBackground,
} from "./coffee_hero.styles";

export const CoffeeHero = () => {
  return (
    <Hero>
      <HeroBackground />

      <HeroContainer>
        <HeroContent>
          <HeroTitle>Explore our coffee</HeroTitle>

          <HeroSubtitle>
            Ground
            <span>•</span>
            Whole Bean
          </HeroSubtitle>
        </HeroContent>
      </HeroContainer>
    </Hero>
  );
};
