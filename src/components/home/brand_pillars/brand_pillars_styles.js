import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 2;

  margin-top: -42px;
  padding: 74px 24px 68px;

  background-color: ${({ theme }) => theme.colors?.brand?.cream || "#F7F1E6"};

  overflow: hidden;

  /*
   * Creates the soft curved transition between the hero
   * and this section.
   */
  border-radius: 50% 50% 0 0 / 42px 42px 0 0;

  /*
   * Very subtle background pattern inspired by
   * topographic contour lines.
   */
  background-image: radial-gradient(
      ellipse at 15% 25%,
      transparent 0 44px,
      rgba(200, 146, 45, 0.06) 45px 46px,
      transparent 47px 70px
    ),
    radial-gradient(
      ellipse at 82% 75%,
      transparent 0 55px,
      rgba(200, 146, 45, 0.05) 56px 57px,
      transparent 58px 85px
    );

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "768px"}) {
    margin-top: -28px;
    padding: 58px 20px 52px;
    border-radius: 50% 50% 0 0 / 28px 28px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    margin-top: -20px;
    padding: 48px 18px 42px;
    border-radius: 50% 50% 0 0 / 20px 20px 0 0;
  }
`;

export const SectionContainer = styled.div`
  width: min(100%, 1180px);
  margin: 0 auto;
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 48px;

  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "768px"}) {
    margin-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    margin-bottom: 34px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors?.text?.primary || "#171717"};

  font-family: ${({ theme }) =>
    theme.fonts?.display || '"Cormorant Garamond", serif'};

  font-size: clamp(1.2rem, 1.5vw, 1.55rem);
  font-style: italic;
  font-weight: 600;
  line-height: 1.2;
`;

export const Title = styled.h2`
  margin: 4px 0 0;

  color: ${({ theme }) => theme.colors?.brand?.primaryDark || "#0C4325"};

  font-family: ${({ theme }) =>
    theme.fonts?.display || '"Cormorant Garamond", serif'};

  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.02em;
`;

export const DecorativeDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 96px;
  height: 12px;
  margin-top: 3px;

  color: ${({ theme }) => theme.colors?.brand?.secondary || "#C8922D"};

  span {
    position: relative;

    display: block;
    width: 50px;
    height: 1px;

    background-color: currentColor;

    &::before,
    &::after {
      content: "";

      position: absolute;
      top: 50%;

      width: 6px;
      height: 6px;

      border: 1px solid currentColor;
      transform: translateY(-50%) rotate(45deg);

      background-color: ${({ theme }) =>
        theme.colors?.brand?.cream || "#F7F1E6"};
    }

    &::before {
      left: -8px;
    }

    &::after {
      right: -8px;
    }
  }
`;

export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints?.laptop || "1024px"}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    grid-template-columns: 1fr;
    row-gap: 0;
  }
`;

export const Pillar = styled.article`
  display: grid;
  grid-template-columns: 60px minmax(0, 1fr);
  align-items: center;
  gap: 18px;

  min-width: 0;
  padding: 8px 28px;

  &:not(:last-child) {
    border-right: 1px solid
      ${({ theme }) => theme.colors?.border?.medium || "#CFC7B8"};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.desktop || "1280px"}) {
    padding-inline: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.laptop || "1024px"}) {
    padding: 8px 34px;

    &:not(:last-child) {
      border-right: none;
    }

    &:nth-child(odd) {
      border-right: 1px solid
        ${({ theme }) => theme.colors?.border?.medium || "#CFC7B8"};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "768px"}) {
    grid-template-columns: 52px minmax(0, 1fr);
    gap: 16px;
    padding-inline: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    grid-template-columns: 50px minmax(0, 1fr);
    align-items: start;

    padding: 24px 4px;

    &:nth-child(odd),
    &:not(:last-child) {
      border-right: none;
    }

    &:not(:last-child) {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors?.border?.medium || "#CFC7B8"};
    }
  }
`;

export const PillarIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;

  color: ${({ theme }) => theme.colors.brand.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 44px;
    height: 44px;
  }
`;

export const PillarContent = styled.div`
  min-width: 0;
`;

export const PillarTitle = styled.h3`
  margin: 0 0 7px;

  color: ${({ theme }) => theme.colors?.text?.primary || "#171717"};

  font-family: ${({ theme }) =>
    theme.fonts?.heading || '"Raleway", sans-serif'};

  font-size: 0.76rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: 0.035em;
  text-transform: uppercase;
`;

export const PillarDescription = styled.p`
  max-width: 215px;
  margin: 0;

  color: ${({ theme }) => theme.colors?.text?.secondary || "#5E5E5E"};

  font-family: ${({ theme }) => theme.fonts?.body || '"DM Sans", sans-serif'};

  font-size: 0.76rem;
  font-weight: 400;
  line-height: 1.65;

  @media (max-width: ${({ theme }) => theme.breakpoints?.laptop || "1024px"}) {
    max-width: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    max-width: 100%;
    font-size: 0.82rem;
  }
`;
