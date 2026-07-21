import styled from "styled-components";

export const ProductsSection = styled.section`
  background: ${({ theme }) => theme.colors.bg.tertiary};
  min-width: 0;
`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 72px;
  margin-bottom: 18px;
  padding: 0 4px;
`;

export const ProductsSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.primary};

  strong {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const ProductsCount = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 420px));
  justify-content: start;
  gap: 24px;

  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, minmax(0, 390px));
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, minmax(0, 420px));
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: minmax(0, 420px);
    justify-content: center;
    gap: 16px;
  }
`;
