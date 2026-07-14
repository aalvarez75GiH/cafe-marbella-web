import styled, { keyframes } from "styled-components";

import heroBackgroundImage from "../../../assets/images/hero/hero_bg.png";

// const backgroundReveal = keyframes`
//   from {
//     opacity: 0;
//     transform: scale(1.08);
//   }

//   to {
//     opacity: 1;
//     transform: scale(1.01);
//   }
// `;

const overlayReveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const contentReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
`;

const dividerReveal = keyframes`
  from {
    opacity: 0;
    transform: scaleX(0.6);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
`;
const backgroundReveal = keyframes`
  from {
    opacity: 0;
    transform: scale(1.025);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const backgroundDrift = keyframes`
  0% {
    transform: scale(1) translate3d(0, 0, 0);
  }

  50% {
    transform: scale(1.015) translate3d(-0.15%, -0.1%, 0);
  }

  100% {
    transform: scale(1) translate3d(0, 0, 0);
  }
`;
const buttonReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// const backgroundDrift = keyframes`
//   0% {
//     transform: scale(1.01) translate3d(0, 0, 0);
//   }

//   50% {
//     transform: scale(1.035) translate3d(-0.4%, -0.2%, 0);
//   }

//   100% {
//     transform: scale(1.01) translate3d(0, 0, 0);
//   }
// `;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: clamp(620px, 72vw, 790px);
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 1024px) {
    min-height: 680px;
  }

  @media (max-width: 768px) {
    min-height: 760px;
  }

  @media (max-width: 480px) {
    min-height: 700px;
  }
`;
export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;

  background-image: url(${heroBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  background-position: center 38%;

  opacity: 0;
  transform: scale(1.025);

  animation: ${backgroundReveal} 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards,
    ${backgroundDrift} 22s ease-in-out 1.8s infinite;

  will-change: opacity, transform;

  @media (max-width: 1024px) {
    background-position: 58% 42%;
  }

  @media (max-width: 768px) {
    background-position: 67% center;
  }

  @media (max-width: 480px) {
    background-position: 70% center;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: scale(1);
  }
`;
/* export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;

  background-image: url(${heroBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  opacity: 0;
  transform: scale(1.08);

  animation: ${backgroundReveal} 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards,
    ${backgroundDrift} 18s ease-in-out 1.8s infinite;
  will-change: opacity, transform;

  @media (max-width: 1024px) {
    background-position: 58% center;
  }

  @media (max-width: 768px) {
    background-position: 67% center;
  }

  @media (max-width: 480px) {
    background-position: 70% center;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: scale(1.01);
  }
`; */

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  opacity: 0;

  background: linear-gradient(
      90deg,
      rgba(13, 28, 19, 0.88) 0%,
      rgba(13, 28, 19, 0.72) 30%,
      rgba(13, 28, 19, 0.28) 58%,
      rgba(13, 28, 19, 0.05) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.16) 100%);

  animation: ${overlayReveal} 1.2s ease-out 0.25s forwards;

  @media (max-width: 768px) {
    background: linear-gradient(
        90deg,
        rgba(10, 24, 16, 0.9) 0%,
        rgba(10, 24, 16, 0.7) 58%,
        rgba(10, 24, 16, 0.26) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.32) 100%);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export const HeroContentWrapper = styled.div`
  width: min(100% - 48px, 1320px);
  min-height: inherit;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: min(100% - 40px, 1320px);
    align-items: flex-end;
    padding-bottom: 72px;
  }

  @media (max-width: 480px) {
    width: min(100% - 32px, 1320px);
    padding-bottom: 48px;
  }
`;

export const HeroContent = styled.div`
  width: min(100%, 650px);
  padding: 80px 0 72px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: min(100%, 600px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 56px 0 0;
  }
`;

export const Eyebrow = styled.div`
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.brand.business};

  letter-spacing: 0.18em;
  text-transform: uppercase;

  opacity: 0;
  animation: ${contentReveal} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export const TitleContainer = styled.div`
  max-width: 650px;

  opacity: 0;
  animation: ${contentReveal} 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.58s
    forwards;

  h1 {
    margin: 0;
    color: #ffffff;
    text-wrap: balance;
  }

  @media (max-width: 768px) {
    max-width: 580px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export const DecorativeDivider = styled.div`
  width: 230px;
  margin: 26px 0 22px;

  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.brand.business};

  opacity: 0;
  transform-origin: left center;

  animation: ${dividerReveal} 0.75s ease-out 0.82s forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const DecorativeLine = styled.span`
  display: block;
  flex: 1;
  height: 1px;
  background: currentColor;
  opacity: 0.8;
`;

export const DecorativeSymbol = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: Georgia, serif;
  font-size: 1.35rem;
  line-height: 1;
`;
export const Description = styled.div`
  max-width: 510px;
  margin-bottom: 32px;

  opacity: 0;
  animation: ${contentReveal} 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.92s
    forwards;

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  opacity: 0;
  animation: ${buttonReveal} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.08s forwards;

  button {
    min-width: 220px;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
      min-width: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;
