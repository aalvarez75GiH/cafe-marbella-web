import styled from "styled-components";

export const Screen = styled.section`
  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.bg.tertiary};
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  padding: 12px 12px 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 8px;
    padding: 10px 10px 30px;
  }
`;

export const GrindOption = styled.button`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.primary};

  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.brand.secondary : theme.colors.border.light};

  border-radius: 10px;

  cursor: pointer;

  box-shadow: 0 3px 10px rgba(23, 23, 23, 0.035);

  transition: border-color 180ms ease, box-shadow 180ms ease,
    transform 180ms ease;

  &:active {
    transform: scale(0.995);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }
`;

export const GrindImage = styled.img`
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
`;

export const GrindLabel = styled.div`
  width: 100%;
  padding: 14px 12px;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.bg.light_grey};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 9px 10px;
    font-size: 17px;
  }
`;
