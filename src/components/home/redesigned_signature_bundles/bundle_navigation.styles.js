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
  }
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    display: none;
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
