import { BrandPillar } from "./brand_pillar.component";
import { brandPillarsData } from "./brand_pillars.data";

import {
  Section,
  SectionContainer,
  SectionHeading,
  Eyebrow,
  Title,
  DecorativeDivider,
  PillarsGrid,
} from "./brand_pillars_styles";

export const BrandPillarsSection = () => {
  return (
    <Section>
      <SectionContainer>
        <SectionHeading>
          <Eyebrow>From our mountains...</Eyebrow>

          <DecorativeDivider aria-hidden="true">
            <span />
          </DecorativeDivider>

          <Title>to your morning ritual.</Title>
        </SectionHeading>

        <PillarsGrid>
          {brandPillarsData.map((pillar) => (
            <BrandPillar
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
              Icon={pillar.Icon}
            />
          ))}
        </PillarsGrid>
      </SectionContainer>
    </Section>
  );
};
