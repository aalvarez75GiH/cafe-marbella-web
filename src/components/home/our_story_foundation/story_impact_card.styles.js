import styled from "styled-components";

export const Card = styled.article`
  min-width: 0;

  display: grid;
  grid-template-rows: auto 1fr;

  overflow: hidden;

  /* border: 1px solid #eceff1; */
  border: 1px solid rgba(20, 92, 52, 0.07);
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.bg.tertiary};

  /* box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05); */
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 16px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;

  aspect-ratio: 16 / 10;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.brand.creamDark};
  border-bottom: 1px solid rgba(20, 92, 52, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    aspect-ratio: 16 / 10.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 16 / 9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    aspect-ratio: 4 / 3;
  }
`;

export const CardImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: ${({ $imagePosition }) => $imagePosition || "center center"};

  transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: scale(1.025);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${Card}:hover & {
      transform: none;
    }
  }
`;

export const CardContent = styled.div`
  position: relative;

  min-width: 0;
  padding: 46px 52px 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 42px 42px 46px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 38px 34px 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 44px 46px 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 34px 26px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 30px 22px 26px;
  }
`;

export const Eyebrow = styled.p`
  position: relative;
  z-index: 2;

  /* margin: 0; */
  margin: 0 0 20px;

  color: ${({ theme }) => theme.colors.text.gold};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;

  letter-spacing: 0.18em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.82rem;
    letter-spacing: 0.16em;
  }
`;

export const Divider = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 18px 0 26px;

  /* color: ${({ theme }) => theme.colors.brand.secondary}; */
  color: rgba(184, 135, 46, 0.9);
`;

export const DividerLine = styled.span`
  display: block;

  width: 46px;
  height: 1px;

  background: currentColor;
`;

export const DividerDiamond = styled.span`
  display: block;

  width: 6px;
  height: 6px;

  border: 1px solid currentColor;

  transform: rotate(45deg);
`;

export const CardTitle = styled.h3`
  position: relative;
  z-index: 2;

  max-width: 520px;
  margin: 0;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 2.8vw, 3.05rem);
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 1.05;

  letter-spacing: -0.035em;
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: clamp(1.85rem, 3vw, 2.6rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(1.85rem, 8vw, 2.3rem);
    line-height: 1.08;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: clamp(1.65rem, 8.2vw, 2rem);
  }
`;

export const CardDescription = styled.p`
  position: relative;
  z-index: 2;

  max-width: 540px;
  margin: 24px 0 28px;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 20px 0 28px;

    font-size: 0.94rem;
    line-height: 1.62;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 2;

  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const BotanicalDecoration = styled.div`
  position: absolute;
  right: -34px;
  bottom: -42px;
  z-index: 1;

  width: 240px;

  color: ${({ theme }) => theme.colors.brand.primary};
  opacity: 0.04;

  pointer-events: none;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    right: -58px;
    width: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: -70px;
    bottom: -48px;

    width: 200px;
    opacity: 0.045;
  }
`;
