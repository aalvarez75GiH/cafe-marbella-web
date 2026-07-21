import styled from "styled-components";

export const FiltersContainer = styled.aside`
  display: grid;
  grid-template-columns:
    minmax(120px, 150px)
    1px
    minmax(350px, 0.9fr)
    1px
    minmax(570px, 1.6fr);
  align-items: stretch;
  gap: 24px;

  width: 100%;
  padding: 20px 24px;

  background: ${({ theme }) => theme.colors.bg.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 18px;

  box-shadow: 0 12px 34px rgba(23, 23, 23, 0.045);

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns:
      minmax(105px, 125px)
      1px
      minmax(320px, 0.9fr)
      1px
      minmax(520px, 1.55fr);
    gap: 20px;

    padding: 18px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 110px minmax(0, 0.85fr) minmax(0, 1.45fr);
    gap: 18px;

    padding: 18px;

    ${"" /* The vertical divider elements are hidden at this width. */}
    & > span {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 20px;

    padding: 20px;

    border-radius: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 18px;

    padding: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 16px;

    padding: 16px 14px;

    border-radius: 14px;
  }
`;

export const FilterByColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding-bottom: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 12px;
  }
`;

export const FilterByText = styled.h2`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.text.green};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.15rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.08rem;
  }
`;

export const FiltersDivider = styled.span`
  display: block;

  width: 1px;
  height: 100%;

  background: ${({ theme }) => theme.colors.border.light};
`;

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 9px;
    padding-bottom: 16px;
  }
`;

export const FilterTitle = styled.h3`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.035em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text.green};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.78rem;
  }
`;

export const FilterList = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ $columns }) => $columns || 2},
    minmax(0, 1fr)
  );
  gap: 12px;

  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: ${({ $columns }) =>
      $columns === 3
        ? "repeat(3, minmax(0, 1fr))"
        : "repeat(2, minmax(0, 1fr))"};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    gap: 10px;

    width: 100%;
    padding-bottom: 3px;

    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FilterCard = styled.button`
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) 20px;
  align-items: center;
  gap: 12px;

  /* background: ${({ theme }) => {
    console.log(theme.colors);
    return theme.colors.bg.primary;
  }}; */

  min-width: 0;
  min-height: 86px;
  padding: 12px 12px;

  font: inherit;
  text-align: left;

  color: ${({ theme }) => theme.colors.text.primary};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.coffeeApp.grind_filter_bg : theme.colors.bg.primary};

  border: 2px solid
    ${({ $active, theme }) =>
      $active
        ? theme.colors.coffeeApp.grind_filter_active_border
        : theme.colors.border.light};

  border-radius: 12px;

  cursor: pointer;

  transition: border-color 180ms ease, background-color 180ms ease,
    box-shadow 180ms ease, transform 180ms ease;

  &:hover {
    background: ${({ $active, theme }) =>
      $active
        ? theme.colors.coffeeApp.grind_filter_bg
        : theme.colors.bg.primary};

    border-color: ${({ theme }) =>
      theme.colors.coffeeApp.grind_filter_active_border};

    box-shadow: 0 8px 20px rgba(23, 23, 23, 0.055);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns: 44px minmax(0, 1fr) 19px;
    gap: 10px;

    min-height: 84px;
    padding: 11px 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 44px minmax(0, 1fr) 18px;
    gap: 9px;

    min-height: 82px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 52px minmax(0, 1fr) 20px;
    gap: 12px;

    min-height: 88px;
    padding: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 225px;

    grid-template-columns: 46px minmax(0, 1fr) 19px;
    gap: 10px;

    min-height: 84px;
    padding: 11px 10px;

    scroll-snap-align: start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    flex-basis: 210px;
  }
`;

export const FilterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 54px;

  flex-shrink: 0;

  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: 44px;
    height: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 42px;
    height: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 48px;
    height: 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 44px;
    height: 46px;
  }
`;

export const FilterIcon = styled.img`
  display: block;

  width: 42px;
  height: 42px;

  object-fit: contain;
  object-position: center;

  transform: scale(
    ${({ $iconType }) => {
      switch ($iconType) {
        case "ground":
          return 2.15;

        case "light":
          return 1.95;

        case "medium":
          return 2.0;

        case "dark":
          return 1.75;

        case "whole":
        default:
          return 1;
      }
    }}
  );

  transform-origin: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 38px;
    height: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
  }
`;

export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  min-width: 0;
`;

export const FilterName = styled.h4`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.94rem;
  font-weight: 700;
  line-height: 1.2;

  color: ${({ theme }) => theme.colors.text.primary};

  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.86rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 0.92rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.88rem;
  }
`;

export const FilterDescription = styled.p`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.76rem;
  font-weight: 400;
  line-height: 1.38;

  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 0.72rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.68rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.71rem;
  }
`;

export const FilterCheck = styled.span`
  position: relative;

  align-self: end;
  justify-self: end;

  width: 20px;
  height: 20px;

  flex-shrink: 0;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.brand.primary : theme.colors.bg.primary};

  border: 1.5px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.brand.primary : theme.colors.border.medium};

  border-radius: 50%;

  transition: background-color 180ms ease, border-color 180ms ease;

  &::after {
    content: "";

    position: absolute;
    top: 3px;
    left: 6px;

    width: 4px;
    height: 8px;

    border-right: 2px solid
      ${({ $active }) => ($active ? "#ffffff" : "transparent")};
    border-bottom: 2px solid
      ${({ $active }) => ($active ? "#ffffff" : "transparent")};

    transform: rotate(45deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 18px;
    height: 18px;

    &::after {
      top: 2px;
      left: 5px;

      width: 4px;
      height: 7px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 20px;
    height: 20px;

    &::after {
      top: 3px;
      left: 6px;

      width: 4px;
      height: 8px;
    }
  }
`;
