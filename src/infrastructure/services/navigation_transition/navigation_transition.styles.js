import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const overlayEntrance = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const contentEntrance = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const RouteTransitionOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: grid;
  place-items: center;

  padding: 24px;

  background: rgba(247, 241, 230, 0.98);

  animation: ${overlayEntrance} 160ms ease both;
`;

export const RouteTransitionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  text-align: center;

  animation: ${contentEntrance} 220ms ease both;
`;

export const RouteTransitionMark = styled.div`
  position: relative;

  display: grid;
  place-items: center;

  width: 62px;
  height: 62px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.brand.primary};
  box-shadow: 0 14px 30px rgba(12, 67, 37, 0.18);

  &::after {
    content: "M";

    color: ${({ theme }) => theme.colors.text.inverse};

    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.45rem;
    font-weight: 700;
  }
`;

export const RouteTransitionSpinner = styled.span`
  position: absolute;
  inset: -7px;

  border: 2px solid rgba(200, 146, 45, 0.22);
  border-top-color: ${({ theme }) => theme.colors.brand.secondary};
  border-radius: 50%;

  animation: ${spin} 760ms linear infinite;
`;

export const RouteTransitionText = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.green};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.04em;
`;
