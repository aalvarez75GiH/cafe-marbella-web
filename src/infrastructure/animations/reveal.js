import { css } from "styled-components";

import { animationTransitions } from "./transitions";

export const revealSection = css`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(32px)"};

  transition: opacity ${animationTransitions.slow},
    transform ${animationTransitions.slow};

  will-change: opacity, transform;
`;

export const revealCard = css`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.975)"};

  transition: opacity ${animationTransitions.slow},
    transform ${animationTransitions.slow};

  transition-delay: ${({ $isVisible, $index = 0 }) =>
    $isVisible ? `${$index * 120}ms` : "0ms"};

  will-change: opacity, transform;
`;
