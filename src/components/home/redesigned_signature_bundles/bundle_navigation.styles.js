import styled from "styled-components";

export const NavigationSection = styled.div`
  width: 100%;

  margin-top: clamp(28px, 4vw, 54px);
`;

export const NavigationContainer = styled.div`
  width: min(100% - 32px, 1480px);

  margin-inline: auto;

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors?.border?.light || "#e5e0d7"};
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.28);

  box-shadow: 0 8px 28px rgba(53, 41, 24, 0.035);

  @media (max-width: ${({ theme }) => theme.breakpoints?.laptop || "1024px"}) {
    overflow-x: auto;
    overflow-y: hidden;

    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "768px"}) {
    display: none;
    //width: calc(100% - 20px);
    //border-radius: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    display: none;
    //width: calc(100% - 20px);
    //border-radius: 10px;
  }
`;

export const ThumbnailsTrack = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints?.laptop || "1024px"}) {
    width: max-content;

    display: flex;

    & > * {
      scroll-snap-align: start;
    }
  }
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: clamp(20px, 2.5vw, 28px);
`;

export const ViewAllBundlesLink = styled.a`
  min-width: 286px;
  min-height: 52px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 34px;

  padding: 14px 24px;

  border: 1px solid ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};
  border-radius: 5px;

  background: transparent;

  color: ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};

  text-decoration: none;

  transition: background-color 180ms ease, color 180ms ease,
    transform 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};

    color: ${({ theme }) => theme.colors?.text?.inverse || "#ffffff"};

    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    width: calc(100% - 40px);
    min-width: 0;
    max-width: 330px;

    gap: 24px;
  }
`;

export const ViewAllLabel = styled.span`
  font-family: ${({ theme }) =>
    theme.fonts?.heading || "'Raleway', sans-serif"};
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.24em;
  text-transform: uppercase;
`;

export const ArrowIcon = styled.svg`
  width: 21px;
  height: 21px;

  flex-shrink: 0;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;

  transition: transform 180ms ease;

  ${ViewAllBundlesLink}:hover & {
    transform: translateX(4px);
  }
`;
