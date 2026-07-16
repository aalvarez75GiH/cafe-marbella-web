import styled from "styled-components";

export const SignatureBundlesSection = styled.section`
  width: 100%;
  padding: 88px 0 96px;

  background: ${({ theme }) => theme.colors.bg.primary};

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 76px 0 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 0 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 56px 0 64px;
  }
`;

export const SectionHeader = styled.div`
  width: min(100%, 900px);
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-inline: 22px;
    padding-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding-inline: 16px;
    padding-bottom: 34px;
  }
`;
export const SectionEyebrow = styled.span`
  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(0.9rem, 1.25vw, 1.05rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.22em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 290px;

    font-size: 1.18rem;
    line-height: 1.35;
    letter-spacing: 0.17em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    max-width: 260px;

    font-size: 1.05rem;
    letter-spacing: 0.14em;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.2rem, 4vw, 3.75rem);
  font-weight: 600;

  letter-spacing: -0.025em;
  line-height: 0.98;

  span {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2rem, 10vw, 2.65rem);
    line-height: 1.02;
  }
`;

export const SectionTitleAccent = styled.span`
  display: block;

  margin-top: 6px;

  font-weight: 400;
  font-style: italic;
`;

export const TitleDecoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin: 18px auto 16px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  span {
    width: 22px;
    height: 1px;

    background: currentColor;
  }

  i {
    width: 5px;
    height: 5px;

    border: 1px solid currentColor;

    transform: rotate(45deg);
  }
`;

export const SectionDescription = styled.p`
  max-width: 650px;

  margin: 28px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.98rem;
  font-weight: 400;
  line-height: 1.65;

  text-align: center;
  text-wrap: balance;
`;
export const BundleFeatures = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
export const BundleFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  text-align: left;
`;

export const FeatureIconWrapper = styled.div`
  width: 72px;
  height: 72px;
  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.bg.primary};

  color: ${({ theme }) => theme.colors.brand.secondary};

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FeatureTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const FeatureDescription = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const CarouselArea = styled.div`
  position: relative;

  width: min(100% - 96px, 1440px);
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: min(100% - 72px, 1440px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const CarouselViewport = styled.div`
  width: 100%;
  padding: 8px 4px 24px;

  overflow-x: auto;
  overflow-y: visible;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  overscroll-behavior-inline: contain;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-right: 28px;
    padding-left: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;

  width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 14px;
  }
`;

export const CarouselItem = styled.div`
  flex: 0 0 calc((min(100vw - 96px, 1440px) - 60px) / 4);

  min-width: 0;

  scroll-snap-align: start;
  scroll-snap-stop: always;

  > article {
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-basis: calc((100vw - 72px - 40px) / 3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-basis: calc((100vw - 72px - 40px) / 3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: calc((100vw - 76px) / 2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-basis: min(82vw, 340px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    flex-basis: 84vw;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $position }) => $position}: -58px;

  z-index: 5;

  display: grid;
  place-items: center;

  width: 44px;
  height: 44px;
  padding: 0;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.bg.primary};
  color: ${({ theme }) => theme.colors.brand.primary};

  box-shadow: 0 8px 24px rgba(23, 23, 23, 0.08);

  cursor: pointer;

  transition: background-color 180ms ease, border-color 180ms ease,
    color 180ms ease, opacity 180ms ease, transform 180ms ease;

  transform: translateY(-50%);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.brand.primary};

    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.inverse};

    transform: translateY(-50%) scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 4px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    ${({ $position }) => $position}: -50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ViewAllContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 18px;
`;

export const ViewAllButton = styled.button`
  min-width: 210px;
  min-height: 48px;
  padding: 12px 28px;

  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  border-radius: 8px;

  background: transparent;
  /* color: ${({ theme }) => theme.colors.brand.primary}; */
  color: "#000000";

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: 700;

  letter-spacing: 0.09em;
  text-transform: uppercase;

  cursor: pointer;

  transition: background-color 180ms ease, color 180ms ease,
    transform 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.inverse};

    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 190px;
    min-height: 46px;
  }
`;

export const DesktopHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileHeaderContent = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 560px;

    display: block;

    margin-top: 28px;
  }
`;

export const MobileSectionTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primary};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 9vw, 2.8rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.035em;

  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: clamp(1.8rem, 9.5vw, 2.25rem);
    line-height: 1.1;
  }

  em {
    display: block;

    margin-top: 6px;

    font-weight: 400;
    font-style: italic;
  }
`;

export const HeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: 24px 0 48px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 22px 0 0;
  }
`;

export const DividerLine = styled.span`
  width: 92px;
  height: 1px;

  background: currentColor;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 54px;
  }
`;

export const DividerDiamond = styled.span`
  width: 10px;
  height: 10px;

  border: 2px solid currentColor;

  transform: rotate(45deg);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 8px;
    height: 8px;
  }
`;
