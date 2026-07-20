import styled from "styled-components";

export const MobileCarouselViewport = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    display: flex;
    align-items: stretch;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MobileCarouselItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  min-width: 100%;

  display: flex;
  align-items: stretch;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const MobileCarouselWrapper = styled.div`
  width: 100%;
  min-width: 0;
`;

export const CarouselProgress = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  width: 100%;

  margin-top: 52px;
  margin-bottom: 10px;

  padding-inline: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    margin-top: 28px;
    margin-bottom: 8px;
  }
`;

export const ProgressSegment = styled.div`
  position: relative;

  height: 16px;
  min-width: 0;
`;

export const ProgressLabel = styled.span`
  position: absolute;
  top: -17px;
  left: 50%;

  color: ${({ theme }) => theme.colors.brand.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.06em;

  transform: translateX(-50%);

  white-space: nowrap;
`;

export const ProgressLine = styled.span`
  display: block;

  width: 100%;
  height: 3px;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.brand.primary : "rgba(20, 92, 52, 0.16)"};

  border-radius: 999px;

  transition: background-color 220ms ease;
`;
