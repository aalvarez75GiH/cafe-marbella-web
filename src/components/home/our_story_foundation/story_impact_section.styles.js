import styled from "styled-components";

import { revealCard } from "../../../infrastructure/animations/index";

export const Section = styled.section`
  width: 100%;

  padding: 36px 0 52px;

  background: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 34px 0 46px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 26px 0 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 22px 0 30px;
  }
`;
// export const Section = styled.section`
//   width: 100%;

//   padding: 36px 0 96px;

//   background: ${({ theme }) => theme.colors.bg.primary};

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     padding: 34px 0 82px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     padding: 30px 0 68px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     padding: 26px 0 54px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     padding: 22px 0 46px;
//   }
// `;
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
    padding-inline: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding-inline: 16px;
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 44px;

  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 34px;
  }
`;

export const SectionEyebrow = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.gold};

  font-family: ${({ theme }) => theme.fonts.heading};
  /* font-size: 0.9rem; */
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;

  letter-spacing: 0.2em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    letter-spacing: 0.17em;
  }
`;

export const HeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 20px;

  color: ${({ theme }) => theme.colors.brand.secondary};
`;

export const DividerLine = styled.span`
  display: block;

  width: 60px;
  height: 1px;

  background: currentColor;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 48px;
  }
`;

export const DividerDiamond = styled.span`
  display: block;

  width: 7px;
  height: 7px;

  border: 1px solid currentColor;

  transform: rotate(45deg);
`;

export const SectionReveal = styled.div`
  width: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "28px")});

  transition: opacity 700ms ease, transform 700ms ease;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 22px;
  }
`;

export const CardReveal = styled.div`
  width: 100%;
  min-width: 0;

  ${revealCard}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
