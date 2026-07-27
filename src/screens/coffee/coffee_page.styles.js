import styled from "styled-components";

export const CoffeePageContent = styled.main`
  width: min(100% - 64px, 1500px);
  margin: 0 auto;
  padding: 28px 0 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100% - 32px, 760px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(100% - 20px, 480px);
  }
`;

export const CoffeeCatalogContainer = styled.main`
  width: min(100% - 64px, 1420px);
  margin: 0 auto;
  padding: 28px 0 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: min(100% - 48px, 1180px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100% - 32px, 760px);
  }
`;

export const ResultsToolbar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;

  margin-top: 28px;
  margin-bottom: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const ResultsSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ResultsTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.2;
`;

export const ResultsMeta = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  line-height: 1.3;
  text-transform: capitalize;
`;

export const SortControl = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const SortLabel = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 700;
`;

export const SortSelect = styled.select`
  min-width: 170px;
  min-height: 44px;
  padding: 0 42px 0 16px;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 9px;

  background: ${({ theme }) => theme.colors.bg.primary};
  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 600;

  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 2px;
  }
`;

export const CoffeeCatalogLayout = styled.div`
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  align-items: start;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 170px minmax(0, 1fr);
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const CoffeeTrustSidebar = styled.aside`
  position: sticky;
  top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const TrustSidebarCard = styled.div`
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.bg.primary};

  box-shadow: 0 14px 38px rgba(37, 31, 24, 0.06);
`;

export const TrustSidebarItem = styled.div`
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  gap: 12px;

  padding: 18px 16px;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  }
`;

export const TrustSidebarIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  color: ${({ theme }) => theme.colors.brand.primary};

  font-size: 1.2rem;
`;

export const TrustSidebarCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  strong {
    color: ${({ theme }) => theme.colors.text.green};

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.78rem;
    font-weight: 800;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.7rem;
    line-height: 1.35;
  }
`;

export const CoffeeTrustStrip = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 40px;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.bg.primary};

  box-shadow: 0 14px 38px rgba(37, 31, 24, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const TrustStripItem = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  gap: 14px;

  padding: 22px 26px;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.border.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    &:nth-child(3) {
      border-left: 0;
      border-top: 1px solid ${({ theme }) => theme.colors.border.light};
    }

    &:nth-child(4) {
      border-top: 1px solid ${({ theme }) => theme.colors.border.light};
    }
  }
`;
export const CoffeeHelpCard = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 18px;
  padding: 22px 18px 18px;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.bg.primary};

  box-shadow: 0 14px 38px rgba(37, 31, 24, 0.05);
`;

export const CoffeeHelpTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.2;
`;

export const CoffeeHelpText = styled.p`
  margin: 10px 0 18px;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  line-height: 1.55;
`;

export const CoffeeHelpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;
  min-height: 46px;
  padding: 11px 14px;

  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.bg.primary};
  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 700;

  cursor: pointer;

  transition: border-color 180ms ease, color 180ms ease,
    background-color 180ms ease, transform 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.brand.primary};

    background: ${({ theme }) => theme.colors.bg.secondary};
    color: ${({ theme }) => theme.colors.text.green};

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 2px;
  }
`;

export const CoffeeHelpIcon = styled.svg`
  width: 21px;
  height: 21px;
  flex-shrink: 0;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
export const TrustStripIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  color: ${({ theme }) => theme.colors.brand.primary};

  font-size: 1.3rem;
`;

export const TrustStripCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: ${({ theme }) => theme.colors.text.green};

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  span {
    color: ${({ theme }) => theme.colors.text.secondary};

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.72rem;
  }
`;

export const TrustIconSvg = styled.svg`
  display: block;

  width: 22px;
  height: 22px;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
