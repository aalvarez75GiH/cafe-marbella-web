import styled from "styled-components";

export const ProductsHeroSection = styled.section`
  position: relative;

  width: 100%;
  min-height: 760px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.bg.secondary};

  &::after {
    content: "";
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &::after {
      position: absolute;
      inset: 0;
      z-index: 0;

      display: block;

      background: linear-gradient(
        180deg,
        rgba(247, 241, 230, 0.88) 0%,
        rgba(247, 241, 230, 0.72) 28%,
        rgba(247, 241, 230, 0.28) 54%,
        rgba(247, 241, 230, 0) 72%
      );

      pointer-events: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ProductsHeroContainer = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: minmax(470px, 0.9fr) minmax(620px, 1.1fr);
  align-items: center;
  column-gap: clamp(48px, 5vw, 100px);

  width: 100%;
  min-height: 760px;
  margin: 0;
  padding: 54px clamp(48px, 5.4vw, 112px) 48px clamp(52px, 5.8vw, 118px);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns:
      minmax(390px, 0.92fr)
      minmax(500px, 1.08fr);
    column-gap: 38px;

    min-height: 680px;
    padding-inline: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;

    width: min(100% - 40px, 760px);
    min-height: auto;
    margin: 0 auto;
    padding: 52px 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(100% - 28px, 560px);
    padding-block: 38px 32px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 620px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: none;
  }
`;

export const HeroEyebrow = styled.p`
  margin: 0 0 18px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.17em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h2`
  max-width: 620px;
  margin: 0;

  color: ${({ theme }) => theme.colors.text.green};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(4.2rem, 5.5vw, 6.4rem);
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.045em;

  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 540px;

    font-size: clamp(3.6rem, 5.3vw, 5.2rem);
    line-height: 1.02;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;

    font-size: clamp(2.8rem, 12vw, 4rem);
    line-height: 1.04;
    letter-spacing: -0.03em;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  align-items: stretch;

  margin-top: 28px;
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  min-width: 128px;

  text-align: center;
`;

export const BenefitDivider = styled.span`
  width: 1px;

  background: ${({ theme }) => theme.colors.border.medium};
`;

export const BenefitIcon = styled.svg`
  width: 24px;
  height: 24px;

  fill: none;
  stroke: ${({ theme }) => theme.colors.brand.primary};
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const BenefitLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.35;
`;

export const ProductCarousel = styled.div`
  position: relative;

  display: grid;
  grid-template-columns:
    minmax(330px, 0.88fr)
    minmax(220px, 0.55fr);
  align-items: center;
  column-gap: clamp(10px, 1.2vw, 20px);

  width: 100%;
  min-width: 0;
  min-height: 650px;
  padding-top: 34px;

  user-select: none;
  -webkit-user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns:
      minmax(290px, 0.9fr)
      minmax(210px, 0.55fr);
    column-gap: 12px;

    min-height: 590px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 560px;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 500px;
    padding-top: 38px;
  }
`;

export const ProductViewport = styled.div`
  grid-column: 1;
  grid-row: 1;

  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-x: contain;

  touch-action: pan-x pan-y;

  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`;

export const ProductTrack = styled.div`
  display: flex;

  width: 100%;
`;

export const ProductSlide = styled.div`
  flex: 0 0 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  min-width: 100%;
  height: 100%;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const ProductImage = styled.img`
  display: block;

  width: auto;
  max-width: 94%;
  height: 490px;

  object-fit: contain;

  filter: drop-shadow(0 22px 24px rgba(47, 31, 16, 0.18));

  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 410px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 360px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 92%;
    height: 305px;
  }
`;

export const ProductInformation = styled.div`
  grid-column: 2;
  grid-row: 1;

  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  max-width: 235px;
  margin: 0;

  text-align: left;

  transform: translateX(-92px);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    transform: translateX(-10px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;

    max-width: none;
    margin-top: 14px;

    text-align: center;

    transform: none;
  }
`;

export const ProductType = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: rgba(255, 255, 255, 0.72);
  }
`;

export const ProductRoast = styled.strong`
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.text.green};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.7rem;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

export const ProductPriceLabel = styled.span`
  margin-top: 18px;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: rgba(255, 255, 255, 0.72);
  }
`;

export const ProductPrice = styled.strong`
  margin-top: 4px;

  color: ${({ theme }) => theme.colors.text.green};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 2.2rem;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

export const OrderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 220px;
  min-height: 48px;

  margin-top: 20px;
  padding: 12px 24px;

  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  border-radius: 999px;

  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.brand.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  white-space: nowrap;

  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
    min-height: 50px;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 46%;
  z-index: 3;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  padding: 0;

  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: 50%;

  color: ${({ theme }) => theme.colors.text.green};
  background: rgba(255, 255, 255, 0.76);

  font-size: 1rem;
  cursor: pointer;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transform: translateY(-50%);

  transition: color 180ms ease, background-color 180ms ease,
    border-color 180ms ease, opacity 180ms ease;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.text.inverse};
    background: ${({ theme }) => theme.colors.brand.primary};
    border-color: ${({ theme }) => theme.colors.brand.primary};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const PreviousButton = styled(NavigationButton)`
  top: calc(46% + 28px);
  left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    top: calc(50% + 22px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 44%;
  }
`;
// export const PreviousButton = styled(NavigationButton)`
//   left: 8px;
// `;

export const NextButton = styled(NavigationButton)`
  top: 50%;
  right: -68px;
  left: auto;

  transform: translateY(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    right: -56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 44%;
    right: 0;

    transform: translateY(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 34px;
  left: 30%;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    bottom: 26px;
    left: 29%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 18px;
    left: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 8px;
    bottom: auto;
    left: 50%;
  }
`;

export const DotButton = styled.button`
  width: ${({ $active }) => ($active ? "28px" : "7px")};
  height: 7px;
  padding: 0;

  border: 0;
  border-radius: 999px;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.brand.primary : "rgba(20, 92, 52, 0.22)"};

  cursor: pointer;

  transition: width 260ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 200ms ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }
`;

export const EmptyHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 420px;
  padding: 40px 24px;

  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.bg.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
`;
