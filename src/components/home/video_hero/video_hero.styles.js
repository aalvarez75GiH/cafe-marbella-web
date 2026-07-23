import styled, { keyframes } from "styled-components";

const contentReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lineMovement = keyframes`
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }

  45% {
    transform: scaleY(1);
    transform-origin: top;
  }

  55% {
    transform: scaleY(1);
    transform-origin: bottom;
  }

  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
`;

export const VideoHeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 920px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 560px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 600px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    height: 570px;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  inset: 0;
  z-index: -3;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    object-position: 58% center;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  background: linear-gradient(
      90deg,
      rgba(4, 25, 15, 0.78) 0%,
      rgba(4, 25, 15, 0.48) 46%,
      rgba(4, 25, 15, 0.16) 72%,
      rgba(4, 25, 15, 0.1) 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.16) 0%,
      rgba(0, 0, 0, 0.02) 48%,
      rgba(0, 0, 0, 0.45) 100%
    );

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: linear-gradient(
        90deg,
        rgba(4, 25, 15, 0.76) 0%,
        rgba(4, 25, 15, 0.46) 70%,
        rgba(4, 25, 15, 0.24) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.12) 0%,
        rgba(0, 0, 0, 0.08) 45%,
        rgba(0, 0, 0, 0.56) 100%
      );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background: linear-gradient(
        180deg,
        rgba(4, 25, 15, 0.3) 0%,
        rgba(4, 25, 15, 0.2) 32%,
        rgba(4, 25, 15, 0.84) 100%
      ),
      linear-gradient(
        90deg,
        rgba(4, 25, 15, 0.35) 0%,
        rgba(4, 25, 15, 0.08) 100%
      );
  }
`;

export const VideoHeroContent = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 64px clamp(32px, 6vw, 104px);
  /* width: min(100% - 32px, 1440px);
  height: 100%;
  margin: 0 auto;
  padding-block: 64px; */

  color: ${({ theme }) => theme.colors.text.inverse};

  animation: ${contentReveal} 900ms ease-out 250ms both;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100% - 56px, 1440px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-start;
    width: min(100% - 40px, 1440px);
    padding-block: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: min(100% - 32px, 1440px);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const VideoHeroContentInner = styled.div`
  width: 100%;
  max-width: 720px;
`;

export const VideoHeroEyebrow = styled.p`
  margin: 0 0 18px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 14px;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
  }
`;

export const VideoHeroTitle = styled.h1`
  max-width: 760px;
  margin: 0;

  color: ${({ theme }) => theme.colors.text.inverse};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.4rem, 6.1vw, 6.8rem);
  font-weight: 600;
  line-height: 0.94;
  letter-spacing: -0.05em;

  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 650px;
    font-size: clamp(3.2rem, 8vw, 5.2rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2.65rem, 12vw, 4rem);
    line-height: 0.98;
    letter-spacing: -0.045em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: clamp(2.4rem, 11.5vw, 3.2rem);
  }
`;

export const VideoHeroDescription = styled.p`
  max-width: 590px;
  margin: 26px 0 0;

  color: rgba(255, 255, 255, 0.88);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.08rem;
  font-weight: 400;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 370px;
    margin-top: 20px;

    font-size: 0.96rem;
    line-height: 1.6;
  }
`;

export const VideoHeroButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  min-width: 210px;
  min-height: 54px;
  margin-top: 34px;
  padding: 14px 28px;

  border: 1px solid rgba(255, 255, 255, 0.78);
  border-radius: 9px;

  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.text.inverse};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  cursor: pointer;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition: background 220ms ease, color 220ms ease, border-color 220ms ease,
    transform 220ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.brand.primary};
    border-color: ${({ theme }) => theme.colors.bg.primary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 195px;
    min-height: 50px;
    margin-top: 28px;

    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  right: 42px;
  bottom: 40px;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 14px;

  color: rgba(255, 255, 255, 0.72);

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  transform: rotate(90deg);
  transform-origin: right bottom;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ScrollLine = styled.span`
  display: block;
  width: 1px;
  height: 52px;

  background: rgba(255, 255, 255, 0.7);

  animation: ${lineMovement} 2.3s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
