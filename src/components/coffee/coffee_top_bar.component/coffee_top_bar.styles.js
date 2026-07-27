import styled from "styled-components";

export const CoffeeTopBarContainer = styled.header`
  display: grid;
  grid-template-columns: 48px 1fr 48px;
  align-items: center;

  width: 100%;
  min-height: 72px;
  padding: 10px clamp(20px, 4vw, 64px);

  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  background: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 64px;
    padding-inline: 20px;
  }
`;

export const CoffeeBackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  padding: 0;

  border: 0;
  border-radius: 50%;

  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};

  cursor: pointer;

  transition: background-color 180ms ease, color 180ms ease,
    transform 180ms ease;

  svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.bg.secondary};
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  &:active {
    transform: scale(0.92);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 2px;
  }
`;

export const CoffeeTopBarTitle = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`;

export const CoffeeTopBarSpacer = styled.span`
  width: 44px;
  height: 44px;
`;
