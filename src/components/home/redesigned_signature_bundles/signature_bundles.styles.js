import styled from "styled-components";

export const SignatureBundlesSection = styled.section`
  width: 100%;
  padding: 90px 0 96px;

  background: ${({ theme }) => theme.colors.bg.primary};

  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 70px 0 76px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 54px 0 62px;
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

export const SectionHeader = styled.header`
  width: min(100%, 760px);
  margin: 0 auto 48px;

  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 34px;
  }
`;

export const SectionEyebrow = styled.p`
  margin: 0 0 14px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  letter-spacing: 0.16em;
  text-transform: uppercase;
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
  }
`;

export const PreviousButton = styled(NavigationButton)`
  left: -58px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 18px;
  }
`;

export const NextButton = styled(NavigationButton)`
  right: -58px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: 18px;
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
