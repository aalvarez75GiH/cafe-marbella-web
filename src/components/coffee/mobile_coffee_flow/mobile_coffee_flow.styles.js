import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const loaderReveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideInForward = keyframes`
  from {
    opacity: 0.35;
    transform: translateX(72px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInBackward = keyframes`
  from {
    opacity: 0.35;
    transform: translateX(-72px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FlowViewport = styled.div`
  width: 100%;
  min-height: 100dvh;

  overflow-x: hidden;

  background: ${({ theme }) => theme.colors.bg.tertiary};
`;

export const FlowScreen = styled.div`
  width: 100%;
  min-height: 100dvh;

  ${({ $animate, $direction }) =>
    $animate &&
    css`
      animation: ${$direction === "backward" ? slideInBackward : slideInForward}
        860ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const FlowLoader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  width: 100%;
  min-height: 100dvh;
  padding: 24px;

  background: ${({ theme }) => theme.colors.bg.tertiary};

  animation: ${loaderReveal} 180ms ease both;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 15px;
    padding: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LoaderMark = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 58px;
  height: 58px;

  background: ${({ theme }) => theme.colors.bg.primary};
  border-radius: 50%;

  box-shadow: 0 3px 8px rgba(23, 23, 23, 0.04),
    0 12px 28px rgba(23, 23, 23, 0.07);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 52px;
    height: 52px;
  }
`;

export const LoaderSpinner = styled.span`
  width: 27px;
  height: 27px;

  border: 3px solid ${({ theme }) => theme.colors.brand.creamDark};
  border-top-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: 50%;

  animation: ${spin} 700ms linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 24px;
    height: 24px;
  }
`;

export const LoaderText = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 13px;
  }
`;
