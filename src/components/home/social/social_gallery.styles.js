import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  width: 100%;
  max-width: 560px;
  margin-top: 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 680px;
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 100%;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 8px;
  }
`;

export const GalleryLink = styled.a`
  position: relative;

  display: block;
  aspect-ratio: 1 / 1;

  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 5px;
  box-shadow: 0 6px 16px rgba(23, 23, 23, 0.055);

  transition: transform 250ms ease, box-shadow 250ms ease;

  &::after {
    content: "";

    position: absolute;
    inset: 0;

    background: rgba(7, 71, 41, 0.1);
    opacity: 0;

    transition: opacity 250ms ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 11px 24px rgba(23, 23, 23, 0.09);
  }

  &:hover::after {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);

  ${GalleryLink}:hover & {
    transform: scale(1.045);
  }
`;

export const SocialFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;

  width: 100%;
  max-width: 560px;
  margin-top: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 680px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-between;
    max-width: 100%;
    margin-top: 16px;
  }
`;

export const SocialHandle = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts?.body || "'DM Sans', sans-serif"};
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;

  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.green};
  }
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  color: ${({ theme }) => theme.colors.text.green};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 50%;

  transition: color 180ms ease, background-color 180ms ease,
    border-color 180ms ease, transform 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
    background: ${({ theme }) => theme.colors.brand.primary};
    border-color: ${({ theme }) => theme.colors.brand.primary};
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SocialIcon = styled.svg`
  width: 18px;
  height: 18px;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;

  path:first-child {
    fill: currentColor;
    stroke: none;
  }
`;
