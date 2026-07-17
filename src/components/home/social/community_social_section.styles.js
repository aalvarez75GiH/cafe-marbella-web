import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  padding: 36px 0 96px;

  background: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 32px 0 82px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 28px 0 68px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 0 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 20px 0 46px;
  }
`;
//export const Section = styled.section`
/* width: 100%;
  padding: 96px 0 120px;

  background: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 84px 0 104px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 72px 0 88px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 58px 0 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 50px 0 64px;
  }
`; */

// ************* COMMUNITY SECTION HEADER

export const CommunityHeaderContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: 48px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-inline: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-inline: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding-inline: 20px;
  }
`;

export const CommunitySectionHeader = styled.header`
  width: 100%;
  margin: 0 0 42px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 32px;
  }
`;

export const CommunitySectionEyebrow = styled.p`
  margin: 0 0 18px;

  color: ${({ theme }) => theme.colors.text.gold};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 15px;
    font-size: 0.86rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.76rem;
    letter-spacing: 0.17em;
  }
`;

export const CommunitySectionTitle = styled.h2`
  max-width: 820px;
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.25rem, 3.25vw, 3.35rem);
  font-weight: 650;
  line-height: 1.06;
  letter-spacing: -0.045em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 720px;
    font-size: clamp(2.1rem, 5.7vw, 3.05rem);
    line-height: 1.07;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    font-size: clamp(1.95rem, 8.5vw, 2.3rem);
    line-height: 1.08;
    letter-spacing: -0.035em;
  }
`;

export const CommunitySectionDescription = styled.p`
  max-width: 760px;
  margin: 18px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1rem, 1.25vw, 1.18rem);
  font-weight: 400;
  line-height: 1.55;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    margin-top: 14px;
    font-size: 0.94rem;
    line-height: 1.5;
  }
`;
export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: 48px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-inline: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-inline: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding-inline: 20px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(52px, 6vw, 88px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 76px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 62px;
  }
`;

export const Column = styled.div`
  min-width: 0;

  opacity: ${({ $isVisible }) => ($isVisible === false ? 0 : 1)};

  transform: ${({ $isVisible }) =>
    $isVisible === false ? "translateY(32px)" : "translateY(0)"};

  transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $delay = 0 }) => `${$delay}ms`},
    transform 700ms cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $delay = 0 }) => `${$delay}ms`};

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const ColumnHeader = styled.header`
  margin-bottom: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 24px;
  }
`;

export const SectionEyebrow = styled.p`
  margin: 0 0 12px;

  color: ${({ theme }) => theme.colors.text.gold};

  font-family: ${({ theme }) => theme.fonts?.body || "'DM Sans', sans-serif"};
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.16em;
`;

export const SectionTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) =>
    theme.fonts?.heading || "'Raleway', sans-serif"};
  font-size: clamp(2rem, 3vw, 3.15rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.04em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(1.85rem, 8vw, 2.4rem);
  }
`;

export const DecorativeDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  max-width: 150px;
  margin-top: 22px;
`;

export const DividerLine = styled.span`
  display: block;
  width: 68px;
  height: 1px;

  background: ${({ theme }) => theme.colors.border.medium};
`;

export const DividerDot = styled.span`
  display: block;
  width: 5px;
  height: 5px;

  background: ${({ theme }) => theme.colors.brand.secondary};
  border-radius: 50%;
`;

export const ColumnContent = styled.div`
  width: 100%;
`;
