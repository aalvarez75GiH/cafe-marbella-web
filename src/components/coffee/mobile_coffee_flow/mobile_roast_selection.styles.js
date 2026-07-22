import styled from "styled-components";

export const MobileScreen = styled.section`
  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.bg.tertiary};
`;

export const MobileTopBar = styled.header`
  position: relative;

  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) 44px;
  align-items: center;

  min-height: 84px;
  padding: 12px 16px;

  background: ${({ theme }) => theme.colors.bg.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: 76px;
    padding-inline: 12px;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  padding: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: none;

  cursor: pointer;

  transition: color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateX(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 2px;
  }
`;

export const BackArrow = styled.span`
  display: block;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 38px;
  font-weight: 400;
  line-height: 1;
`;

export const ScreenTitle = styled.h1`
  grid-column: 2;

  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 23px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 21px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 28px 12px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 24px 10px 34px;
  }
`;

export const Intro = styled.div`
  padding: 0 6px;
`;

export const IntroTitle = styled.h2`
  margin: 0 0 4px;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 17px;
  font-weight: 700;
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 16px;
  }
`;

export const IntroDescription = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 12px;
  }
`;

export const RoastOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 10px;
    margin-top: 24px;
  }
`;

export const RoastOption = styled.button`
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr) 44px;
  align-items: center;
  gap: 16px;

  width: 100%;
  min-height: 112px;
  padding: 14px 12px;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.primary};

  border: 2px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.brand.secondaryLight : "transparent"};

  border-radius: 12px;

  text-align: left;
  cursor: pointer;

  box-shadow: ${({ $active }) =>
    $active
      ? "0 10px 24px rgba(23, 23, 23, 0.06)"
      : "0 4px 14px rgba(23, 23, 23, 0.025)"};

  transition: border-color 180ms ease, box-shadow 180ms ease,
    transform 180ms ease;

  &:active {
    transform: scale(0.99);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    grid-template-columns: 84px minmax(0, 1fr) 40px;
    gap: 14px;

    min-height: 106px;
    padding: 12px 10px;
  }
`;

export const RoastIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 92px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 84px;
  }
`;

export const RoastIcon = styled.img`
  display: block;

  width: =100px;
  height: 100px;

  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 56px;
    height: 56px;
  }
`;

export const RoastText = styled.div`
  min-width: 0;
`;

export const RoastTitle = styled.h3`
  margin: 0 0 4px;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 15px;
  }
`;

export const RoastDescription = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 12px;
  }
`;

export const ArrowCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  color: ${({ theme }) => theme.colors.text.muted};
  background: ${({ theme }) => theme.colors.bg.tertiary};
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 32px;
    height: 32px;
  }
`;

export const ArrowIcon = styled.span`
  display: block;

  transform: translateY(-1px);

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;
  font-weight: 300;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 25px;
  }
`;

export const FooterHint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin-top: 28px;
  padding: 0 12px;
`;

export const FooterHintIcon = styled.span`
  font-size: 24px;
  line-height: 1;
`;

export const FooterHintText = styled.p`
  max-width: 160px;
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25;
`;
