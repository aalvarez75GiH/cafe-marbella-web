import styled, { keyframes } from "styled-components";

const testimonialReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const CarouselContainer = styled.div`
  width: 100%;
  padding-left: 24px;

  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 18px;
  }
`;

export const QuoteIcon = styled.span`
  position: absolute;
  top: 18px;
  /* left: -13px; */
  left: 13px;

  display: block;

  color: ${({ theme }) => theme.colors.text.gold};
  opacity: 0.92;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 72px;
  font-weight: 650;
  line-height: 0.75;

  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 17px;
    left: 11px;
    font-size: 62px;
  }
`;

export const TestimonialText = styled.blockquote`
  width: 100%;
  max-width: 480px;
  min-height: calc(1.43em * 4);

  margin: 0;
  padding-left: 22px;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.35rem, 1.75vw, 1.65rem);
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: -0.025em;

  box-sizing: border-box;

  animation: ${testimonialReveal} 0.5s ease both;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    min-height: calc(1.46em * 4);
    padding-left: 20px;

    font-size: 1.22rem;
    line-height: 1.46;
  }
`;

export const TestimonialSurface = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 310px;
  padding: 30px 28px 24px;

  background: #f5f5f5;

  border: 1px solid rgba(0, 0, 0, 0.035);
  border-radius: 18px;

  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 286px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 300px;
    padding: 26px 22px 22px;
    border-radius: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: 320px;
  }
`;

export const TestimonialFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  margin-top: auto;
  padding-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
    padding-top: 18px;
  }
`;

export const CustomerName = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts?.body || "'DM Sans', sans-serif"};
  font-size: 0.96rem;
  font-weight: 700;
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  margin-top: 6px;
`;

export const Star = styled.span`
  color: ${({ theme }) => theme.colors.text.gold};
  font-size: 0.9rem;
  line-height: 1;
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavigationButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 0;

  color: ${({ theme }) => theme.colors.text.green};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: 50%;

  cursor: pointer;

  transition: color 180ms ease, background-color 180ms ease,
    border-color 180ms ease, transform 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.inverse};
    background: ${({ theme }) => theme.colors.brand.primary};
    border-color: ${({ theme }) => theme.colors.brand.primary};
    /* transform: translateY(-2px); */
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 38px;
    height: 38px;
  }
`;

export const ArrowIcon = styled.span`
  display: block;

  font-family: ${({ theme }) => theme.fonts?.body || "'DM Sans', sans-serif"};
  font-size: 1.25rem;
  line-height: 1;

  transform: ${({ $previous }) =>
    $previous ? "rotate(180deg)" : "rotate(0deg)"};
`;
