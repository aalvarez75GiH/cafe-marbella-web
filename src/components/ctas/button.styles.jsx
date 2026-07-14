import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 12px 24px;
    font-size: 0.9rem;
    min-height: 44px;
  `,

  medium: css`
    padding: 16px 32px;
    font-size: 1rem;
    min-height: 52px;
  `,

  large: css`
    padding: 18px 32px;
    font-size: 1rem;
    min-height: 58px;
  `,
};

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    border: 2px solid ${({ theme }) => theme.colors.brand.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.brand.primaryDark};
      border-color: ${({ theme }) => theme.colors.brand.primaryDark};
    }
  `,

  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.brand.primary};
    border: 2px solid ${({ theme }) => theme.colors.brand.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.brand.primary};
      color: ${({ theme }) => theme.colors.text.inverse};
    }
  `,

  white_transparent: css`
    background: rgba(255, 255, 255, 0.02);
    color: ${({ theme }) => theme.colors.text.inverse};
    border: 2px solid rgba(255, 255, 255, 0.8);

    &:hover {
      background: ${({ theme }) => theme.colors.bg.primary};
      color: ${({ theme }) => theme.colors.brand.primary};
      border-color: ${({ theme }) => theme.colors.bg.primary};
    }
  `,

  icon: css`
    width: 56px;
    height: 56px;
    padding: 0;

    border-radius: 50%;

    background: white;
    color: ${({ theme }) => theme.colors.brand.primary};

    border: 2px solid ${({ theme }) => theme.colors.border.light};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${({ theme }) => theme.colors.brand.primary};
      color: white;
    }
  `,
};

export const CTA_Button = styled.button`
  width: ${({ $width }) => $width || "auto"};

  border-radius: 2px;

  cursor: pointer;

  transition: background-color 0.25s ease, border-color 0.25s ease,
    color 0.25s ease, transform 0.25s ease;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 28px;

  white-space: nowrap;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.04em;

  ${({ $size }) => sizes[$size] || sizes.medium}

  ${({ $variant }) => variants[$variant] || variants.primary}

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 1.25rem;
    line-height: 1;

    transition: transform 0.25s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;
