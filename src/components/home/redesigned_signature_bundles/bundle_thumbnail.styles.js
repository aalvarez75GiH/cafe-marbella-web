import styled, { css } from "styled-components";

export const ThumbnailButton = styled.button`
  position: relative;

  width: 100%;
  min-width: 0;
  min-height: 112px;

  display: grid;
  grid-template-columns: minmax(105px, 42%) minmax(0, 1fr);
  align-items: center;
  gap: 12px;

  padding: 10px 22px;

  border: none;
  border-right: 1px solid
    ${({ theme }) => theme.colors?.border?.light || "#e5e0d7"};

  background: ${({ theme, $isActive }) =>
    $isActive ? "#FFFFFF" : theme.colors?.brand?.cream || "#F7F1E6"};
  color: inherit;

  text-align: left;
  cursor: pointer;

  transition: background-color 220ms ease, opacity 180ms ease,
    transform 180ms ease;

  &::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;

    height: 4px;

    background: ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};

    transform: scaleX(0);
    transform-origin: left center;

    transition: transform 220ms ease;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::after {
        transform: scaleX(1);
      }
    `}

  &:hover {
    background: ${({ theme }) =>
      theme.colors?.background?.primary || "#FFFFFF"};
  }

  &:focus-visible {
    z-index: 2;
    outline: 2px solid
      ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};
    outline-offset: -3px;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.desktop || "1280px"}) {
    grid-template-columns: 105px minmax(0, 1fr);
    gap: 10px;

    padding-inline: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.laptop || "1024px"}) {
    min-width: 310px;
    min-height: 106px;

    grid-template-columns: 112px minmax(0, 1fr);

    border-right: 1px solid
      ${({ theme }) => theme.colors?.border?.light || "#e5e0d7"};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    min-width: 275px;
    min-height: 100px;

    grid-template-columns: 102px minmax(0, 1fr);
    gap: 8px;

    padding: 8px 14px;
  }
`;

export const ThumbnailImageWrapper = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "480px"}) {
    height: 82px;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;
  object-position: center;

  user-select: none;

  transition: transform 220ms ease;

  ${ThumbnailButton}:hover & {
    transform: scale(1.035);
  }
`;

export const ThumbnailContent = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const ThumbnailName = styled.span`
  width: 100%;

  color: ${({ theme }) => theme.colors?.text?.primary || "#171717"};

  font-family: ${({ theme }) =>
    theme.fonts?.heading || "'Raleway', sans-serif"};
  font-size: clamp(0.92rem, 1vw, 1.08rem);
  font-weight: 600;
  line-height: 1.25;

  text-wrap: balance;
`;

export const ThumbnailPrice = styled.span`
  color: ${({ theme }) =>
    theme.colors?.text?.gold || theme.colors?.brand?.secondary || "#c8922d"};

  font-family: ${({ theme }) => theme.fonts?.body || "'DM Sans', sans-serif"};
  font-size: 0.98rem;
  font-weight: 600;
  line-height: 1;
`;
