import styled from "styled-components";

export const CoffeePageContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: min(100% - 64px, 1500px);
  margin: 28px auto 0;
  padding: 0 0 96px;

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: min(100% - 56px, 1440px);
    margin-top: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: min(100% - 48px, 1360px);
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 22px;

    width: min(100% - 36px, 1180px);
    margin-top: 22px;
    padding-bottom: 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;

    width: min(100% - 28px, 760px);
    margin-top: 20px;
    padding-bottom: 76px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 18px;

    width: min(100% - 20px, 480px);
    margin-top: 18px;
    padding-bottom: 64px;
  }
`;
