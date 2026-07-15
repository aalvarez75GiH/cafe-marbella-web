import styled from "styled-components";

export const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};

  height: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};

  color: ${({ $color, theme }) => $color || theme.colors.brand.primary};

  line-height: 0;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
