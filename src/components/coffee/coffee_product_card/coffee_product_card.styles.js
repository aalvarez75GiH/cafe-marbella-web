import styled from "styled-components";

export const Card = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 420px;
  min-height: 560px;
  padding: 24px 24px 32px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.bg.primary};

  box-shadow: 0 2px 6px rgba(23, 23, 23, 0.025),
    0 10px 28px rgba(23, 23, 23, 0.055);

  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 4px 10px rgba(23, 23, 23, 0.035),
      0 18px 42px rgba(23, 23, 23, 0.09);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 540px;
    padding: 22px 22px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 420px;
    min-height: 540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: none;
    min-height: 520px;
    padding: 20px 20px 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    max-width: 420px;
    min-height: 500px;
    margin-inline: auto;
    padding: 18px 18px 26px;

    &:hover {
      transform: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 95%;
    margin-inline: auto;
    min-height: 480px;
    padding: 16px 16px 24px;
  }
`;

// ***************************************
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 20px;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Origin = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 26px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 20px;
  }
  /* 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 22px;
  } */
`;

export const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;
`;

export const RatingStar = styled.span`
  color: #f8c400;
  font-size: 34px;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 2px;
  }
`;

export const RatingValue = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 22px;
  font-weight: 700;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 42px;
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 38px;
    font-size: 18px;
  }
`;

export const FlagImage = styled.img`
  display: block;

  width: 46px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 38px;
  }
`;

export const ProductImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  min-height: 270px;
  padding: 24px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 250px;
    padding: 20px 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: 220px;
  }
`;

export const ProductImage = styled.img`
  display: block;

  width: auto;
  max-width: 72%;
  max-height: 270px;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 68%;
    max-height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 64%;
    max-height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    max-height: 220px;
  }
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 16px;

  margin-top: auto;
  padding-bottom: 18px;
  /* display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 20px;

  margin-top: auto;
  padding-bottom: 18px; */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
    padding-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 10px;
    padding-bottom: 22px;
  }
`;

export const ProductDetails = styled.div`
  min-width: 0;
`;

export const RoastLevel = styled.p`
  margin: 0 0 4px;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 17px;
  }
`;

export const ProductName = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.15;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 18px;
  }
`;

export const SizesList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 8px;
`;

export const SizeItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 19px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 15px;
  }
`;

export const SizeDivider = styled.span`
  display: inline-block;

  width: 2px;
  height: 24px;

  background: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    height: 20px;
  }
`;

export const ViewLink = styled.a`
  display: inline-flex;
  align-items: center;

  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.text.green};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  text-decoration: underline;
  text-underline-offset: 4px;

  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.primaryDark};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 14px;
  }
`;

export const GrindIdentificationLine = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 2;

  height: 14px;

  background: ${({ $grindType, theme }) =>
    $grindType === "whole"
      ? theme.colors.coffeeApp.wholeBeanIdentification
      : theme.colors.coffeeApp.groundIdentification};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    height: 10px;
  }
`;

// ****************************************

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Flag = styled.img`
  width: 28px;
`;

export const Country = styled.h3`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.heading};

  color: ${({ theme }) => theme.colors.text.green};
`;

export const BagImage = styled.img`
  display: block;

  width: auto;
  height: 270px;
  max-width: 78%;

  margin: 28px auto 30px;

  object-fit: contain;
  object-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 250px;
    margin: 26px auto 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 230px;
    max-width: 82%;
    margin: 24px auto 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;
    max-width: 80%;
    margin: 22px auto 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    height: 205px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;

  min-height: 0;
`;

export const Roast = styled.span`
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Price = styled.h2`
  margin: 10px 0 0;

  color: ${({ theme }) => theme.colors.brand.primary};
`;

export const Button = styled.button`
  margin-top: 18px;
`;
