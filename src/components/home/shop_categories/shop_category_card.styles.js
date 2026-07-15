import styled from "styled-components";

export const Card = styled.button`
  position: relative;
  width: 100%;
  aspect-ratio: 1.3 / 1;

  display: block;

  padding: 0;
  border: none;
  border-radius: 14px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors?.bg?.secondary || "#f8f6f1"};

  color: ${({ theme }) => theme.colors?.text?.inverse || "#ffffff"};

  text-align: left;
  cursor: pointer;

  isolation: isolate;

  box-shadow: 0 10px 30px rgba(23, 23, 23, 0.08);

  transition: transform 280ms ease, box-shadow 280ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(23, 23, 23, 0.16);
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors?.brand?.secondary || "#c8922d"};
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    aspect-ratio: 1.45 / 1;
  }

  @media (max-width: 480px) {
    aspect-ratio: 1.2 / 1;
    border-radius: 12px;
  }
`;

export const CardBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;

  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  transform: scale(1.01);

  transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.02) 20%,
      rgba(0, 0, 0, 0.18) 52%,
      rgba(0, 0, 0, 0.82) 100%
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.02) 65%);

  transition: opacity 280ms ease;

  ${Card}:hover & {
    opacity: 0.94;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;

  padding: 18px;

  @media (max-width: 1024px) {
    padding: 20px;
    gap: 18px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    gap: 14px;
  }
`;

export const ContentGroup = styled.div`
  min-width: 0;
  max-width: 75%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    max-width: 78%;
    gap: 6px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.colors?.text?.inverse || "#ffffff"};

  font-family: ${({ theme }) =>
    theme.fonts?.heading || "'Raleway', sans-serif"};

  font-size: clamp(1.15rem, 1.4vw, 1.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
`;

export const CardDescription = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.92);

  font-family: ${({ theme }) => theme.fonts?.body || "'DM Sans', sans-serif"};

  font-size: clamp(0.82rem, 0.9vw, 0.98rem);
  font-weight: 400;
  line-height: 1.45;

  text-wrap: balance;

  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.38);
`;

export const ArrowButton = styled.span`
  flex: 0 0 auto;

  width: 46px;
  height: 46px;

  display: grid;
  place-items: center;

  margin-bottom: 2px;

  border: 2px solid rgba(255, 255, 255, 0.95);
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(3px);

  transition: background-color 250ms ease, border-color 250ms ease,
    transform 250ms ease;

  ${Card}:hover & {
    background: ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};

    border-color: ${({ theme }) => theme.colors?.brand?.primary || "#145c34"};

    transform: translateX(3px);
  }

  @media (max-width: 1024px) {
    width: 42px;
    height: 42px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const ArrowIcon = styled.svg`
  width: 21px;
  height: 21px;

  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  color: #ffffff;

  transition: transform 250ms ease;

  ${Card}:hover & {
    transform: translateX(2px);
  }
`;
