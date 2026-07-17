import styled from "styled-components";
import { revealCard } from "../../../infrastructure/animations/index";

export const Section = styled.section`
  width: 100%;

  padding: 96px 0 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 80px 0 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 0 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0 22px;
  }
`;

export const SectionReveal = styled.div`
  width: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "28px")});

  transition: opacity 700ms ease, transform 700ms ease;
`;
export const SectionHeader = styled.header`
  width: 100%;
  margin: 0 auto 34px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 28px;
  }
`;
// export const SectionHeader = styled.header`
//   width: 100%;
//   margin: 0 auto 34px;
//   padding: 0 24px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     margin-bottom: 28px;
//     padding: 0 16px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     padding-inline: 12px;
//   }
// `;

export const SectionEyebrow = styled.p`
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
export const SectionTitle = styled.h2`
  max-width: 1120px;
  margin: 0;
  color: ${({ theme }) => theme.colors.brand.primaryDark};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.45rem, 4vw, 4.15rem);
  font-weight: 650;
  line-height: 1.05;
  letter-spacing: -0.045em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 760px;
    font-size: clamp(2.15rem, 6vw, 3.4rem);
    line-height: 1.07;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    font-size: clamp(2rem, 8.8vw, 2.35rem);
    line-height: 1.08;
    letter-spacing: -0.035em;
  }
`;

export const SectionDescription = styled.p`
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

export const CardsContainer = styled.div`
  width: calc(100% - 48px);
  max-width: 1440px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: calc(100% - 40px);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 32px);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100% - 24px);
    grid-template-columns: 1fr;
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

export const SectionContent = styled.div`
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
