import { storyImpactItems } from "./story_impact_data";
import { StoryImpactCard } from "./story_impact_card";
import { useScrollReveal } from "../../../hooks/use_scroll_reveal";

import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionEyebrow,
  HeaderDivider,
  DividerLine,
  DividerDiamond,
  CardsGrid,
  SectionReveal,
  CardReveal,
} from "./story_impact_section.styles";

export const StoryImpactSection = () => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px",
    triggerOnce: false,
    revealOnlyWhenScrollingDown: true,
  });

  return (
    <Section ref={elementRef}>
      <SectionContainer>
        <SectionHeader>
          <SectionEyebrow>Our Story &amp; Impact</SectionEyebrow>

          <HeaderDivider aria-hidden="true">
            <DividerLine />
            <DividerDiamond />
            <DividerLine />
          </HeaderDivider>
        </SectionHeader>

        <SectionReveal $isVisible={isVisible}>
          <CardsGrid>
            {storyImpactItems.map((item, index) => (
              <CardReveal key={item.id} $isVisible={isVisible} $index={index}>
                <StoryImpactCard item={item} />
              </CardReveal>
            ))}
          </CardsGrid>
        </SectionReveal>
      </SectionContainer>
    </Section>
  );
};
