import styled from "styled-components";

export const MobileSlide = styled.article`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-width: 0;
    height: 100%;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background: ${({ theme }) => theme.colors.bg.secondary};
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 20px;
  }
`;

export const MobileImageArea = styled.div`
  position: relative;
  width: 100%;
  min-height: 470px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.bg.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 370px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: 330px;
  }
`;

export const MobileSceneImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: inherit;

  display: block;

  object-fit: cover;
  object-position: center;
`;

export const MobileBadge = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;

  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 9px 14px;

  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.brand.secondary};

  border-radius: 999px;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 16px;
    left: 16px;
    padding: 8px 12px;
    font-size: 0.66rem;
  }
`;

export const MobileContent = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  flex: 1;

  margin-top: -22px;
  padding: 22px 28px 30px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  text-align: center;

  background: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 24px 24px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: -18px;
    padding: 20px 20px 24px;
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding-inline: 16px;
  }
`;

export const MobilePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  margin-bottom: 18px;
`;

export const MobilePaginationDot = styled.span`
  width: ${({ $isActive }) => ($isActive ? "9px" : "7px")};
  height: ${({ $isActive }) => ($isActive ? "9px" : "7px")};

  display: block;
  border-radius: 50%;

  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.brand.primary : theme.colors.border.medium};

  transform: ${({ $isActive }) => ($isActive ? "scale(1)" : "scale(0.92)")};

  transition: background-color 220ms ease, transform 220ms ease;
`;

export const MobileBundleName = styled.h3`
  min-height: 78px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 6.5vw, 2.7rem);
  font-weight: 650;
  line-height: 1.08;
  letter-spacing: -0.035em;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 68px;
    font-size: clamp(1.85rem, 8vw, 2.25rem);
  }
`;

export const MobileBundleDescription = styled.p`
  max-width: 440px;
  min-height: 48px;
  margin: 10px auto 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 340px;
    min-height: 54px;
    font-size: 0.88rem;
  }
`;

export const MobilePrice = styled.p`
  min-height: 44px;
  margin: 24px 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.brand.primaryDark};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(2rem, 6vw, 2.5rem);
  font-weight: 700;
  line-height: 1;
`;

export const MobileButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;

  button {
    width: 100%;
    min-width: 0;
    justify-content: center;
    gap: 16px;
  }
`;
// export const CarouselProgress = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 14px;

//   width: 100%;
//   margin-bottom: 26px;
// `;

// export const ProgressLabel = styled.span`
//   flex-shrink: 0;

//   color: ${({ theme }) => theme.colors.brand.primary};

//   font-family: ${({ theme }) => theme.fonts.body};
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
// `;
export const CarouselProgress = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;

  width: 100%;
  margin-bottom: 24px;
`;
export const ProgressSegment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ProgressLabel = styled.span`
  color: ${({ theme }) => theme.colors.brand.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 700;

  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: opacity 220ms ease, transform 220ms ease;

  white-space: nowrap;
`;
export const ProgressLine = styled.span`
  display: block;

  width: 100%;
  height: 3px;

  border-radius: 999px;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.brand.primary : "rgba(20,92,52,.14)"};

  transition: background-color 250ms ease, transform 250ms ease;

  transform: scaleX(${({ $active }) => ($active ? 1 : 0.92)});
`;
// export const ProgressTrack = styled.div`
//   position: relative;

//   flex: 1;
//   height: 3px;

//   overflow: hidden;

//   background: rgba(20, 92, 52, 0.16);
//   border-radius: 999px;
// `;

// export const ProgressFill = styled.span`
//   position: absolute;
//   inset: 0 auto 0 0;

//   width: ${({ $progress }) => `${$progress}%`};

//   background: ${({ theme }) => theme.colors.brand.primary};
//   border-radius: inherit;

//   transition: width 260ms cubic-bezier(0.22, 1, 0.36, 1);
// `;
