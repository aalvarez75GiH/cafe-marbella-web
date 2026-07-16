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
// export const MobileCarouselViewport = styled.div`
//   display: none;

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     width: 100%;
//     display: flex;

//     overflow-x: auto;
//     overflow-y: hidden;

//     scroll-snap-type: x mandatory;
//     overscroll-behavior-x: contain;
//     -webkit-overflow-scrolling: touch;

//     scrollbar-width: none;

//     &::-webkit-scrollbar {
//       display: none;
//     }
//   }
// `;
export const MobileCarouselItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  min-width: 100%;

  display: flex;
  align-items: stretch;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
// export const MobileCarouselItem = styled.div`
//   flex: 0 0 100%;
//   width: 100%;
//   min-width: 100%;

//   scroll-snap-align: start;
//   scroll-snap-stop: always;
// `;
