import styled from "styled-components";

export const FlyerSlide = styled.article`
  position: relative;

  width: 100%;
  aspect-ratio: 3 / 4;

  overflow: hidden;

  /* border-radius: 22px; */

  background: ${({ theme }) => theme.colors.bg.secondary};

  isolation: isolate;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    border-radius: 18px;
  }
`;
// export const FlyerSlide = styled.article`
//   position: relative;

//   flex: 0 0 100%;
//   width: 100%;
//   min-width: 100%;

//   aspect-ratio: 3 / 4;

//   overflow: hidden;

//   border-radius: 22px;

//   background: ${({ theme }) => theme.colors.bg.secondary};

//   isolation: isolate;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     border-radius: 18px;
//   }
// `;

export const FlyerImage = styled.img`
  position: absolute;
  inset: 0;

  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  user-select: none;
  pointer-events: none;
`;

export const FlyerButtonWrapper = styled.div`
  position: absolute;
  right: 18px;
  bottom: 18px;
  left: 18px;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    right: 14px;
    bottom: 14px;
    left: 14px;
  }
`;

export const FlyerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;

  min-height: 38px;
  padding: 10px 20px;
  font-size: 0.95rem;
  border-radius: 10px;

  border: 0;
  border-radius: 9px;

  background: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.inverse};

  box-shadow: 0 10px 22px rgba(12, 67, 37, 0.2);

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.01em;
  white-space: nowrap;

  cursor: pointer;

  transition: background-color 180ms ease, transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primaryDark};

    box-shadow: 0 12px 26px rgba(12, 67, 37, 0.25);

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: 54px;
    padding: 13px 20px;

    font-size: 0.94rem;
  }
`;

export const FlyerButtonArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1;

  transition: transform 180ms ease;

  ${FlyerButton}:hover & {
    transform: translateX(4px);
  }
`;
