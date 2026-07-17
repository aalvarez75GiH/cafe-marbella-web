import { useScrollReveal } from "../../../hooks/use_scroll_reveal";

import { TestimonialCarousel } from "./testimonial_carousel";
import { SocialGallery } from "./social_gallery";

import {
  Section,
  SectionContainer,
  ContentGrid,
  Column,
  ColumnHeader,
  SectionEyebrow,
  SectionTitle,
  DecorativeDivider,
  DividerLine,
  DividerDot,
  ColumnContent,
  CommunitySectionHeader,
  CommunitySectionEyebrow,
  CommunitySectionTitle,
  CommunitySectionDescription,
} from "./community_social_section.styles";

export const CommunitySocialSection = () => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px",
    triggerOnce: true,
    revealOnlyWhenScrollingDown: false,
  });

  return (
    <Section ref={elementRef}>
      <SectionContainer>
        <CommunitySectionHeader>
          <CommunitySectionEyebrow>OUR COMMUNITY</CommunitySectionEyebrow>

          <CommunitySectionTitle>
            Shared moments. Meaningful connections.
          </CommunitySectionTitle>

          <CommunitySectionDescription>
            Discover what our customers are saying and follow the journey behind
            every cup.
          </CommunitySectionDescription>
        </CommunitySectionHeader>
        <ContentGrid>
          <Column $isVisible={isVisible} $delay={0}>
            <ColumnHeader>
              <SectionEyebrow>TESTIMONIALS</SectionEyebrow>

              <SectionTitle>Reviews by coffee lovers</SectionTitle>

              {/* <DecorativeDivider>
                <DividerLine />
                <DividerDot />
              </DecorativeDivider> */}
            </ColumnHeader>

            <ColumnContent>
              <TestimonialCarousel />
            </ColumnContent>
          </Column>

          <Column $isVisible={isVisible} $delay={120}>
            <ColumnHeader>
              <SectionEyebrow>SOCIAL</SectionEyebrow>

              <SectionTitle>Follow Our Journey</SectionTitle>

              <DecorativeDivider>
                <DividerLine />
                <DividerDot />
              </DecorativeDivider>
            </ColumnHeader>

            <ColumnContent>
              <SocialGallery />
            </ColumnContent>
          </Column>
        </ContentGrid>
      </SectionContainer>
    </Section>
  );
};
