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
    filter: blur(6px);
    transform:
      translate3d(var(--bag-start-x), 34px, 0)
      rotate(var(--bag-rotation))
      scale(0.9);
  }

  55% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform:
      translate3d(0, 0, 0)
      rotate(var(--bag-rotation))
      scale(1);
  }
`;

const subtleFloat = keyframes`
  0%,
  100% {
    transform:
      translateY(0)
      rotate(var(--bag-rotation));
  }

  50% {
    transform:
      translateY(-7px)
      rotate(var(--bag-rotation));
  }
`;

export const Hero = styled.section`
  position: relative;

  width: 100%;
  min-height: min(800px, calc(100vh - 88px));

  overflow: hidden;

  background: ${({ theme }) => theme.colors.bg.secondary};
  isolation: isolate;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 700px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    min-height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    min-height: auto;
    max-height: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: auto;
    max-height: none;
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

    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-position: 61% center;

    &::after {
      background: linear-gradient(
        90deg,
        rgba(249, 244, 237, 0.5) 0%,
        rgba(249, 244, 237, 0.28) 48%,
        rgba(249, 244, 237, 0.06) 100%
      );
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-position: 68% center;

    &::after {
      background: linear-gradient(
          180deg,
          rgba(249, 244, 237, 0.4) 0%,
          rgba(249, 244, 237, 0.22) 50%,
          rgba(249, 244, 237, 0.08) 100%
        ),
        linear-gradient(
          90deg,
          rgba(249, 244, 237, 0.56) 0%,
          rgba(249, 244, 237, 0.3) 62%,
          rgba(249, 244, 237, 0.06) 100%
        );
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    background-position: 70% center;

    &::after {
      background: linear-gradient(
          180deg,
          rgba(249, 244, 237, 0.44) 0%,
          rgba(249, 244, 237, 0.24) 52%,
          rgba(249, 244, 237, 0.1) 100%
        ),
        linear-gradient(
          90deg,
          rgba(249, 244, 237, 0.6) 0%,
          rgba(249, 244, 237, 0.32) 64%,
          rgba(249, 244, 237, 0.08) 100%
        );
    }
  }
  /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-position: 61% center;

    &::after {
      background: linear-gradient(
        90deg,
        rgba(249, 244, 237, 0.94) 0%,
        rgba(249, 244, 237, 0.8) 48%,
        rgba(249, 244, 237, 0.18) 100%
      );
    }
  } */
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: minmax(500px, 0.92fr) minmax(620px, 1.08fr);
  align-items: center;
  column-gap: clamp(28px, 3vw, 54px);

  width: 100%;
  max-width: 1600px;
  min-height: inherit;
  margin: 0 auto;
  padding: 58px clamp(48px, 5.5vw, 88px);

  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: minmax(430px, 0.9fr) minmax(540px, 1.1fr);
    column-gap: 24px;

    padding-inline: 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: minmax(370px, 0.88fr) minmax(460px, 1.12fr);
    column-gap: 18px;

    padding-inline: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: stretch;

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

  width: 100%;
  max-width: 660px;

  animation: ${contentReveal} 900ms cubic-bezier(0.22, 1, 0.36, 1) 180ms both;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 520px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 620px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    padding-bottom: 0;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 18px;

  color: ${({ theme }) => theme.colors.text.gold};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
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
  max-width: 660px;
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.4rem, 4.5vw, 4.8rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 580px;
    font-size: clamp(3.1rem, 4.4vw, 4.15rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 470px;
    font-size: clamp(2.8rem, 4.5vw, 3.65rem);
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
  gap: 13px;

  width: 180px;
  margin: 28px 0 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 26px 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 180px;
    margin: 20px 0 16px;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 180px;
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
  font-size: clamp(1rem, 1.25vw, 1.18rem);
  font-weight: 400;
  line-height: 1.55;

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
  gap: 16px;

  min-height: 56px;
  padding: 0 28px;

  border-radius: 9px;

  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.96rem;
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

  margin-top: 34px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 30px;
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
  gap: 9px;

  width: 132px;
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
`;

export const BenefitLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.83rem;
  font-weight: 600;
  line-height: 1.42;
  text-align: center;
`;

export const BenefitDivider = styled.span`
  display: block;

  width: 1px;
  min-height: 78px;
  margin-inline: 10px;

  background: rgba(23, 23, 23, 0.2);
`;

export const ProductsContainer = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  height: 610px;
  min-height: 560px;

  align-self: end;

  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 570px;
    min-height: 520px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 510px;
    min-height: 470px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    align-self: center;

    width: min(100%, 700px);
    height: 390px;
    min-height: 0;

    /* margin-top: 5px; */
    margin-top: 10px;
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

export const ProductBag = styled.div`
  --bag-start-x: ${({ $startX = "-40px" }) => $startX};
  --bag-rotation: 0deg;

  position: absolute;

  left: ${({ $position }) => {
    if ($position === "center") return "34.5%";
    if ($position === "right") return "69%";
    return "0";
  }};

  bottom: 0;

  z-index: ${({ $position }) => {
    if ($position === "center") return 3;
    if ($position === "left") return 2;
    return 1;
  }};

  width: 32%;

  opacity: 0;

  animation: ${bagReveal} 900ms cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $delay }) => $delay} forwards,
    ${subtleFloat} 5.6s ease-in-out calc(${({ $delay }) => $delay} + 1.1s)
      infinite;

  transform-origin: center bottom;
  will-change: opacity, transform, filter;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    left: ${({ $position }) => {
      if ($position === "center") return "34%";
      if ($position === "right") return "68%";
      return "0";
    }};

    width: 32.5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    left: ${({ $position }) => {
      if ($position === "center") return "33.5%";
      if ($position === "right") return "67%";
      return "0";
    }};

    width: 33%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: ${({ $position }) => {
      if ($position === "center") return "37%";
      if ($position === "right") return "66%";
      return "8%";
    }};

    width: 25%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: ${({ $position }) => {
      if ($position === "center") return "34.5%";
      if ($position === "right") return "69%";
      return "0";
    }};

    width: 31%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    left: ${({ $position }) => {
      if ($position === "center") return "34.25%";
      if ($position === "right") return "68.5%";
      return "0";
    }};

    width: 31.5%;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;

    filter: none;
    transform: none;
  }
`;

export const ProductBagImage = styled.img`
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;

  filter: drop-shadow(0 18px 15px rgba(61, 42, 24, 0.16));

  user-select: none;
`;
