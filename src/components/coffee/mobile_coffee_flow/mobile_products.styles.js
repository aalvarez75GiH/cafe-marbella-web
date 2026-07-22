import styled from "styled-components";

export const Screen = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg.tertiary};
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
  padding: 16px 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 14px;
    padding-bottom: 40px;
  }
`;

export const EmptyMessage = styled.p`
  margin: 0;
  padding: 48px 24px;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
`;
