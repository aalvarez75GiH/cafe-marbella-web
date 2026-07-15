import styled from "styled-components";
import {
  revealCard,
  revealSection,
} from "../../../infrastructure/animations/index";

export const Section = styled.section`
  width: 100%;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 0;
  }
`;

export const SectionReveal = styled.div`
  width: 100%;

  ${revealSection}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const CardsContainer = styled.div`
  width: calc(100% - 48px);
  max-width: 1440px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: calc(100% - 40px);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 32px);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100% - 24px);
    grid-template-columns: 1fr;
  }
`;

export const CardReveal = styled.div`
  width: 100%;
  min-width: 0;

  ${revealCard}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;
