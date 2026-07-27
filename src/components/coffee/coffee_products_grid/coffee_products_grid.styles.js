import styled from "styled-components";

export const ProductsSection = styled.section`
  width: 100%;
  min-width: 0;

  background: transparent;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $productCount }) =>
    $productCount === 1 ? "minmax(0, 720px)" : "repeat(2, minmax(0, 1fr))"};
  justify-content: ${({ $productCount }) =>
    $productCount === 1 ? "center" : "stretch"};
  align-items: stretch;
  gap: 28px;

  width: 100%;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 320px;
  padding: 48px 24px;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.bg.primary};

  text-align: center;

  strong {
    color: ${({ theme }) => theme.colors.text.primary};

    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.15rem;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.9rem;
  }
`;
