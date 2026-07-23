import styled from "styled-components";

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.bg.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 12px;

  width: min(100% - 24px, 480px);
  min-height: 84px;
  margin: 0 auto;
  padding: 16px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: min(100% - 20px, 375px);
    min-height: 76px;
    gap: 10px;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  padding: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: none;

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 2px;
  }
`;

export const BackIcon = styled.span`
  display: block;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 40px;
  font-weight: 300;
  line-height: 1;

  transform: translateX(-1px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 36px;
  }
`;

export const Title = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.p`
  margin: 4px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 10px;
  }
`;
