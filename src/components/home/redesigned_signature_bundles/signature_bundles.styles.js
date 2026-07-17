import styled from "styled-components";

export const SignatureBundlesSection = styled.section`
  width: 100%;

  padding: 48px 0 96px;

  background: ${({ theme }) => theme.colors.bg.primary};

  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 0 76px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 32px 0 62px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 26px 0 56px;
  }
`;

export const SectionHeader = styled.header`
  width: min(100% - 40px, 900px);
  margin: 0 auto 48px;

  display: none;
  flex-direction: column;
  align-items: center;

  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(100% - 38px, 440px);
    margin-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: min(100% - 30px, 380px);
    margin-bottom: 28px;
  }
`;

export const SectionEyebrow = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.3;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    letter-spacing: 0.17em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 0.9rem;
    letter-spacing: 0.14em;
  }
`;

export const HeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: 22px auto 34px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 22px auto 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 10px;
    margin: 20px auto 26px;
  }
`;

export const DividerLine = styled.span`
  width: 92px;
  height: 1px;

  background: currentColor;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 50px;
  }
`;

export const DividerDiamond = styled.span`
  width: 8px;
  height: 8px;

  border: 1.5px solid currentColor;

  transform: rotate(45deg);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 7px;
    height: 7px;
  }
`;

export const DesktopHeaderContent = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileHeaderContent = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.6rem, 4.5vw, 4.75rem);
  font-weight: 500;

  letter-spacing: -0.03em;
  line-height: 0.96;

  span {
    display: block;
    font-style: italic;
  }
`;

export const SectionDescription = styled.p`
  max-width: 580px;
  margin: 22px auto 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.95rem, 1.1vw, 1.08rem);
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.65;

  text-wrap: balance;
`;

export const MobileSectionTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 8.4vw, 2.65rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.03em;

  text-wrap: balance;

  span {
    display: block;

    margin-top: 8px;

    font-weight: 400;
    font-style: italic;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: clamp(1.72rem, 8.8vw, 2.15rem);
    line-height: 1.12;
  }
`;

export const SectionContainer = styled.div`
  position: relative;

  width: min(100% - 104px, 1500px);
  margin: 0 auto;

  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100% - 28px, 1500px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(100% - 20px, 1500px);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 20;

  display: grid;
  place-items: center;

  width: 46px;
  height: 46px;
  padding: 0;

  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.bg.primary};
  color: ${({ theme }) => theme.colors.brand.primary};

  box-shadow: 0 8px 24px rgba(20, 92, 52, 0.1);

  cursor: pointer;

  transform: translateY(-50%);

  transition: background-color 180ms ease, color 180ms ease,
    transform 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.inverse};

    transform: translateY(-50%) scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: auto;
    bottom: 18px;

    transform: none;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 42px;
    height: 42px;
    bottom: 14px;
  }
`;

export const PreviousButton = styled(NavigationButton)`
  left: -58px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NextButton = styled(NavigationButton)`
  right: -58px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, sans-serif;
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1;
`;

// ************* BUNDLES SECTION HEADER
export const BundlesHeaderContent = styled.div`
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
export const BundlesSectionHeader = styled.header`
  width: 100%;
  margin: 0 0 34px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 28px;
  }
`;

export const BundlesSectionEyebrow = styled.p`
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

export const BundlesSectionTitle = styled.h2`
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

export const BundlesSectionDescription = styled.p`
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
