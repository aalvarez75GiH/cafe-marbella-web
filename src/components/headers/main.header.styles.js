import styled, { css } from "styled-components";

import { Container } from "../layout/container.component";
const sharedIconButtonStyles = css`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;
  padding: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: 0;

  cursor: pointer;

  transition: color 180ms ease, transform 180ms ease;
  svg {
    display: block;

    width: 24px;
    height: 24px;

    fill: none;
    stroke: currentColor;
    stroke-width: 1.65;
    stroke-linecap: round;
    stroke-linejoin: round;

    flex-shrink: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.brand.primary};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline-offset: 3px;
  }

  /* Tablet: 768px and below */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 46px;
    height: 46px;

    svg {
      width: 26px;
      height: 26px;
      stroke-width: 1.7;
    }
  }

  /* Mobile: 480px and below */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 44px;
    height: 44px;

    svg {
      width: 25px;
      height: 25px;
    }
  }

  /* Small mobile: 375px and below */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 40px;
    height: 40px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 100;

  width: 100%;
  height: 120px;

  /* background: ${({ theme }) => theme.colors.bg.secondary}; */
  background: #efece8;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 76px;
  }
`;
export const HeaderContent = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 210px minmax(0, 1fr) 150px;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 185px minmax(0, 1fr) 145px;
    padding: 0 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 165px minmax(0, 1fr) 135px;
    padding: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 0 8px;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 190px;
  height: 76px;

  overflow: hidden;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 175px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 155px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    inset-inline: 0;
    margin-inline: auto;

    width: 136px;
    height: 60px;

    transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 112px;
    height: 50px;
  }
`;

export const LogoImage = styled.img`
  display: block;

  width: 290px;
  height: auto;
  max-width: none;

  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;

  /* transform: translateY(1px); */

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 255px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 210px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 190px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 160px;
  }
`;

const navigationItemStyles = css`
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 12px 0;

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: 0;

  text-decoration: none;
  cursor: pointer;

  span {
    color: currentColor;
  }

  &::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: 5px;
    left: 0;

    height: 1px;

    background: ${({ theme }) => theme.colors.brand.primary};
    transform: scaleX(0);
    transform-origin: center;

    transition: transform 180ms ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline-offset: 4px;
  }
`;

export const NavigationLink = styled.a`
  ${navigationItemStyles}
`;

export const NavigationButton = styled.button`
  ${navigationItemStyles}
`;
export const DesktopNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(24px, 2vw, 40px);

  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: clamp(10px, 1.6vw, 16px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
export const NavigationArrow = styled.svg`
  width: 14px;
  height: 14px;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;

  transition: transform 180ms ease;

  ${NavigationButton}:hover & {
    transform: translateY(2px);
  }
`;

export const ActionsContainer = styled(Container)`
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: auto;

  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 1px;
  }
`;
export const CartButton = styled.button`
  ${sharedIconButtonStyles}

  position: relative;
  margin-left: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
  }
`;
export const IconButton = styled.button`
  ${sharedIconButtonStyles}
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -5px;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 18px;
  height: 18px;
  padding: 0 5px;

  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.brand.primary};
  border: 2px solid ${({ theme }) => theme.colors.bg.primary};
  border-radius: 999px;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: -1px;
    right: -3px;

    min-width: 16px;
    height: 16px;
    padding: 0 4px;

    font-size: 0.55rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    top: -2px;
    right: -2px;

    min-width: 15px;
    height: 15px;
    padding: 0 3px;

    font-size: 0.5rem;
  }
`;

export const MobileMenuButton = styled.button`
  ${sharedIconButtonStyles}

  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-flex;
    justify-self: start;
  }
`;

export const MobileBackdrop = styled.div`
  position: fixed;
  z-index: 198;
  inset: 0;

  background: ${({ theme }) => theme.colors.overlay.dark};

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};

  transition: opacity 240ms ease, visibility 240ms ease;

  @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} + 1px)) {
    display: none;
  }
`;

export const MobileNavigation = styled.aside`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: min(88vw, 390px);
  height: 100dvh;

  background: ${({ theme }) => theme.colors.bg.primary};
  box-shadow: 18px 0 50px rgba(0, 0, 0, 0.15);

  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-105%")});

  transition: transform 260ms ease;

  @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} + 1px)) {
    display: none;
  }
`;

export const MobileNavigationHeader = styled(Container)`
  align-items: center;
  justify-content: space-between;

  min-height: 82px;
  padding: 14px 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  ${LogoLink} {
    justify-self: auto;
  }
`;

export const MobileNavigationContent = styled.nav`
  display: flex;
  flex-direction: column;

  padding: 22px 20px;
`;

export const MobileNavigationLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 58px;

  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  text-decoration: none;

  transition: color 180ms ease, padding-left 180ms ease;

  span {
    color: currentColor;
  }

  > span:last-child {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.1rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  &:hover {
    padding-left: 5px;
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline-offset: 3px;
  }
`;

export const TemporaryLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.brand.primary};
`;

export const TemporaryLogoTop = styled.span`
  margin-bottom: -2px;

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-style: italic;
  line-height: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }
`;

export const TemporaryLogoName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.85rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 0.95;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 2.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;
