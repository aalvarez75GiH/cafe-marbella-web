import styled, { keyframes } from "styled-components";

const backgroundReveal = keyframes`
  from {
    opacity: 0;
    transform: scale(1.035);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

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

const bagReveal = keyframes`
  0% {
    opacity: 0;
    filter: blur(5px);
    transform:
      translate3d(var(--bag-start-x), 28px, 0)
      scale(0.94);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform:
      translate3d(0, 0, 0)
      scale(1);
  }
`;

export const Hero = styled.section`
  position: relative;

  width: 100%;
  min-height: 820px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.bg.secondary};
  isolation: isolate;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 860px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 760px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 680px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    min-height: auto;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;

  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  animation: ${backgroundReveal} 1.5s cubic-bezier(0.22, 1, 0.36, 1) both;

  &::after {
    content: "";

    position: absolute;
    inset: 0;

    background: linear-gradient(
      90deg,
      rgba(249, 246, 240, 0.3) 0%,
      rgba(249, 246, 240, 0.17) 31%,
      rgba(249, 246, 240, 0.04) 51%,
      rgba(249, 246, 240, 0) 66%
    );

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-position: 60% center;

    &::after {
      background: linear-gradient(
        90deg,
        rgba(249, 244, 237, 0.72) 0%,
        rgba(249, 244, 237, 0.42) 50%,
        rgba(249, 244, 237, 0.08) 100%
      );
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-position: 67% center;

    &::after {
      background: linear-gradient(
          180deg,
          rgba(249, 244, 237, 0.42) 0%,
          rgba(249, 244, 237, 0.2) 53%,
          rgba(249, 244, 237, 0.06) 100%
        ),
        linear-gradient(
          90deg,
          rgba(249, 244, 237, 0.65) 0%,
          rgba(249, 244, 237, 0.34) 62%,
          rgba(249, 244, 237, 0.05) 100%
        );
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    background-position: 70% center;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: minmax(520px, 0.84fr) minmax(700px, 1.16fr);
  align-items: stretch;
  column-gap: clamp(24px, 2.5vw, 48px);

  width: min(calc(100% - 96px), 1800px);
  min-height: inherit;
  margin: 0 auto;
  padding: 64px 0 0;

  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns: minmax(560px, 0.82fr) minmax(760px, 1.18fr);

    width: min(calc(100% - 112px), 1880px);
    padding-top: 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: minmax(460px, 0.88fr) minmax(610px, 1.12fr);

    width: min(calc(100% - 80px), 1580px);
    column-gap: 20px;
    padding-top: 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: minmax(365px, 0.9fr) minmax(470px, 1.1fr);

    width: calc(100% - 64px);
    column-gap: 14px;
    padding-top: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    min-height: auto;
    padding: 40px 32px 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 32px 22px 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 28px 18px 20px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 4;

  align-self: center;

  width: 100%;
  max-width: 660px;
  padding-bottom: 34px;

  animation: ${contentReveal} 900ms cubic-bezier(0.22, 1, 0.36, 1) 180ms both;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: 700px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 600px;
    padding-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 480px;
    padding-bottom: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: auto;

    max-width: 620px;
    padding-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 22px;

  color: ${({ theme }) => theme.colors.text.gold};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 1.02rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 19px;
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-bottom: 16px;
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 320px;
    margin-bottom: 14px;

    font-size: 0.69rem;
    line-height: 1.25;
    letter-spacing: 0.13em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 0.65rem;
  }
`;

export const Title = styled.h1`
  max-width: 680px;
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(4.3rem, 4.65vw, 5.25rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.055em;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: 720px;
    font-size: clamp(4.7rem, 4.55vw, 5.65rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 610px;
    font-size: clamp(3.65rem, 4.65vw, 4.45rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 470px;
    font-size: clamp(2.85rem, 4.6vw, 3.55rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 610px;

    font-size: clamp(3.15rem, 7.6vw, 3.75rem);
    line-height: 0.98;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 390px;

    font-size: clamp(2.6rem, 10.2vw, 3rem);
    line-height: 0.99;
    letter-spacing: -0.045em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    max-width: 335px;

    font-size: clamp(2.35rem, 10.6vw, 2.55rem);
    line-height: 1;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  width: 220px;
  margin: 30px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
    margin: 27px 0 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 180px;
    margin: 23px 0 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 180px;
    margin: 20px 0 16px;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin: 18px 0 15px;
  }
`;

export const DividerLine = styled.span`
  flex: 1;
  height: 1px;

  background: rgba(23, 23, 23, 0.55);
`;

export const DividerBean = styled.span`
  position: relative;

  width: 15px;
  height: 10px;

  background: ${({ theme }) => theme.colors.text.primary};
  border-radius: 60% 40% 55% 45%;

  transform: rotate(-22deg);

  &::after {
    content: "";

    position: absolute;
    top: 1px;
    left: 7px;

    width: 1px;
    height: 8px;

    background: ${({ theme }) => theme.colors.bg.primary};
    border-radius: 50%;

    transform: rotate(18deg);
  }
`;

export const Description = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1.05rem, 1.2vw, 1.22rem);
  font-weight: 400;
  line-height: 1.55;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 1.24rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.06rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 0.94rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 470px;
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 360px;

    font-size: 0.9rem;
    line-height: 1.48;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    max-width: 330px;
    font-size: 0.86rem;
  }
`;

export const DesktopActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;

  margin-top: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileActionsContainer = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    z-index: 10;

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;

    order: 3;

    width: 100%;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 20px;
    margin-bottom: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 20px;
    margin-top: 24px;
    margin-bottom: 25px;
  }
`;

const HeroButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  min-width: 210px;
  min-height: 58px;
  padding: 0 30px;

  border-radius: 9px;

  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.98rem;
  font-weight: 650;

  transition: color 200ms ease, background-color 200ms ease,
    border-color 200ms ease, transform 200ms ease;

  span {
    font-size: 1.25rem;
    line-height: 1;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 190px;
    min-height: 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-width: 164px;
    min-height: 50px;
    padding-inline: 22px;
    font-size: 0.86rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    min-width: 0;
    min-height: 48px;
    padding-inline: 15px;
    gap: 10px;

    font-size: 0.8rem;

    span {
      font-size: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 0.76rem;
    padding-inline: 12px;
  }
`;

export const ShopButton = styled(HeroButton)`
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.brand.primary};
  border: 1px solid ${({ theme }) => theme.colors.brand.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primaryDark};
    border-color: ${({ theme }) => theme.colors.brand.primaryDark};
  }
`;

export const LearnMoreButton = styled(HeroButton)`
  color: ${({ theme }) => theme.colors.text.green};
  background: rgba(255, 255, 255, 0.38);
  border: 1px solid rgba(20, 92, 52, 0.66);

  backdrop-filter: blur(5px);

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
    background: ${({ theme }) => theme.colors.brand.primary};
    border-color: ${({ theme }) => theme.colors.brand.primary};
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  align-items: stretch;

  width: fit-content;
  margin-top: 34px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  width: 128px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: 138px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 102px;
  }
`;

export const BenefitIcon = styled.svg`
  width: 29px;
  height: 29px;

  color: ${({ theme }) => theme.colors.text.green};

  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 25px;
    height: 25px;
  }
`;

export const BenefitLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.81rem;
  font-weight: 600;
  line-height: 1.38;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 0.7rem;
  }
`;

export const BenefitDivider = styled.span`
  display: block;

  width: 1px;
  min-height: 76px;
  margin-inline: 9px;

  background: rgba(23, 23, 23, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 68px;
    margin-inline: 5px;
  }
`;

export const ProductsContainer = styled.div`
  position: relative;
  z-index: 2;

  align-self: end;

  width: 100%;
  height: 700px;
  min-height: 620px;

  /*
   * This is the distance from the bottom of the hero
   * to the visible table surface in hero_5.png.
   */
  --table-baseline: 88px;

  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    height: 740px;

    --table-baseline: 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 640px;
    min-height: 570px;

    --table-baseline: 78px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 520px;
    min-height: 470px;

    --table-baseline: 62px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    align-self: center;

    width: min(100%, 700px);
    height: 390px;
    min-height: 0;
    margin-top: 10px;

    --table-baseline: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: clamp(190px, 51vw, 245px);
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin-top: 14px;
  }
`;

// export const ProductsContainer = styled.div`
//   position: relative;
//   z-index: 2;

//   align-self: end;

//   width: 100%;
//   height: 700px;
//   min-height: 620px;

//   pointer-events: none;

//   @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
//     height: 740px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     height: 640px;
//     min-height: 570px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     height: 520px;
//     min-height: 470px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     order: 2;
//     align-self: center;

//     width: min(100%, 700px);
//     height: 390px;
//     min-height: 0;
//     margin-top: 10px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     width: 100%;
//     height: clamp(190px, 51vw, 245px);
//     margin-top: 16px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     margin-top: 14px;
//   }
// `;

export const ProductBag = styled.div`
  --bag-start-x: ${({ $startX = "-40px" }) => $startX};

  position: absolute;
  bottom: var(--table-baseline);

  left: ${({ $position }) => {
    if ($position === "center") return "35.5%";
    if ($position === "right") return "72.5%";
    return "1.5%";
  }};

  z-index: ${({ $position }) => {
    if ($position === "center") return 3;
    return 2;
  }};

  width: ${({ $position }) => {
    if ($position === "center") return "34%";
    return "29%";
  }};

  opacity: 0;

  animation: ${bagReveal} 900ms cubic-bezier(0.22, 1, 0.36, 1)
    ${({ $delay }) => $delay} forwards;

  transform-origin: center bottom;
  will-change: opacity, transform, filter;

  &::after {
    content: "";

    position: absolute;
    z-index: -1;

    left: 13%;
    right: 13%;
    bottom: -3px;

    height: 12px;

    background: rgba(61, 42, 24, 0.16);
    border-radius: 50%;
    filter: blur(7px);

    pointer-events: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    left: ${({ $position }) => {
      if ($position === "center") return "35%";
      if ($position === "right") return "72%";
      return "1.5%";
    }};

    width: ${({ $position }) => {
      if ($position === "center") return "34.5%";
      return "29.5%";
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    left: ${({ $position }) => {
      if ($position === "center") return "35%";
      if ($position === "right") return "71.5%";
      return "1%";
    }};

    width: ${({ $position }) => {
      if ($position === "center") return "34%";
      return "29.5%";
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    left: ${({ $position }) => {
      if ($position === "center") return "34.5%";
      if ($position === "right") return "70%";
      return "0";
    }};

    width: ${({ $position }) => {
      if ($position === "center") return "35%";
      return "30.5%";
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 0;

    left: ${({ $position }) => {
      if ($position === "center") return "37%";
      if ($position === "right") return "66%";
      return "8%";
    }};

    width: ${({ $position }) => {
      if ($position === "center") return "27%";
      return "25%";
    }};

    &::after {
      height: 8px;
      filter: blur(5px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: ${({ $position }) => {
      if ($position === "center") return "34%";
      if ($position === "right") return "68.5%";
      return "0";
    }};

    width: ${({ $position }) => {
      if ($position === "center") return "33%";
      return "31%";
    }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    left: ${({ $position }) => {
      if ($position === "center") return "34%";
      if ($position === "right") return "68.5%";
      return "0";
    }};

    width: ${({ $position }) => {
      if ($position === "center") return "33%";
      return "31.5%";
    }};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;

    filter: none;
    transform: none;
  }
`;

// export const ProductBag = styled.div`
//   --bag-start-x: ${({ $startX = "-40px" }) => $startX};

//   position: absolute;
//   bottom: 0;

//   left: ${({ $position }) => {
//     if ($position === "center") return "33.5%";
//     if ($position === "right") return "68.5%";
//     return "0";
//   }};

//   z-index: ${({ $position }) => {
//     if ($position === "center") return 3;
//     return 2;
//   }};

//   width: ${({ $position }) => {
//     if ($position === "center") return "37%";
//     return "32%";
//   }};

//   opacity: 0;

//   animation: ${bagReveal} 900ms cubic-bezier(0.22, 1, 0.36, 1)
//     ${({ $delay }) => $delay} forwards;

//   transform-origin: center bottom;
//   will-change: opacity, transform, filter;

//   @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
//     left: ${({ $position }) => {
//       if ($position === "center") return "33%";
//       if ($position === "right") return "68%";
//       return "0";
//     }};

//     width: ${({ $position }) => {
//       if ($position === "center") return "38%";
//       return "32.5%";
//     }};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     left: ${({ $position }) => {
//       if ($position === "center") return "33.5%";
//       if ($position === "right") return "68.5%";
//       return "0";
//     }};

//     width: ${({ $position }) => {
//       if ($position === "center") return "37%";
//       return "32%";
//     }};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     left: ${({ $position }) => {
//       if ($position === "center") return "34%";
//       if ($position === "right") return "68.5%";
//       return "0";
//     }};

//     width: ${({ $position }) => {
//       if ($position === "center") return "35.5%";
//       return "31.5%";
//     }};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     left: ${({ $position }) => {
//       if ($position === "center") return "37%";
//       if ($position === "right") return "66%";
//       return "8%";
//     }};

//     width: ${({ $position }) => {
//       if ($position === "center") return "27%";
//       return "25%";
//     }};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     left: ${({ $position }) => {
//       if ($position === "center") return "34%";
//       if ($position === "right") return "68.5%";
//       return "0";
//     }};

//     width: ${({ $position }) => {
//       if ($position === "center") return "33%";
//       return "31%";
//     }};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     left: ${({ $position }) => {
//       if ($position === "center") return "34%";
//       if ($position === "right") return "68.5%";
//       return "0";
//     }};

//     width: ${({ $position }) => {
//       if ($position === "center") return "33%";
//       return "31.5%";
//     }};
//   }

//   @media (prefers-reduced-motion: reduce) {
//     opacity: 1;
//     animation: none;

//     filter: none;
//     transform: none;
//   }
// `;

export const ProductBagImage = styled.img`
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;

  filter: drop-shadow(0 7px 7px rgba(61, 42, 24, 0.1));

  user-select: none;
`;
// export const ProductBagImage = styled.img`
//   display: block;

//   width: 100%;
//   height: auto;

//   object-fit: contain;

//   filter: drop-shadow(0 14px 12px rgba(61, 42, 24, 0.14));

//   user-select: none;
// `;
