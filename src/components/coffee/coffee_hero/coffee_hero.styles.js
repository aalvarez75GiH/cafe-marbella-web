import styled from "styled-components";

import heroCoffee from "../../../assets/images/coffee_app/coffee_hero/coffee_app_header.png";

export const Hero = styled.section`
  position: relative;

  overflow: hidden;

  background: #f9f4ec;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;

  background-image: url(${heroCoffee});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right bottom;

  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    background-size: auto 92%;
    background-position: right -24px bottom;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-size: auto 78%;
    background-position: right -90px bottom;
    opacity: 0.72;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-size: auto 66%;
    background-position: right -110px bottom;
    opacity: 0.45;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 1;

  width: min(100% - 48px, 1440px);
  margin: 0 auto;

  padding: 24px 0 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100% - 28px, 1440px);
    padding: 22px 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(100% - 20px, 1440px);
    padding: 20px 0 18px;
  }
`;

export const HeroContent = styled.div`
  width: fit-content;
  max-width: 760px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 560px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.35rem, 3.1vw, 3.7rem);
  font-weight: 800;
  line-height: 1.02;

  color: ${({ theme }) => theme.colors.text.green};

  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: clamp(2.15rem, 5vw, 3.1rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2rem, 10vw, 2.7rem);
    white-space: normal;
  }
`;

export const HeroSubtitle = styled.p`
  display: flex;

  align-items: center;

  gap: 14px;

  margin: 14px 0 0;

  font-family: ${({ theme }) => theme.fonts.body};

  font-size: 1.1rem;

  color: ${({ theme }) => theme.colors.text.secondary};

  span {
    color: ${({ theme }) => theme.colors.brand.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;
