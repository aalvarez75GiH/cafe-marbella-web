import styled from "styled-components";
import { Text } from "../../../infrastructure/typography/text.component";

export const Card = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.bg.secondary};

  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.07);

  transition: transform 250ms ease, box-shadow 250ms ease;

  &:hover {
    transform: translateY(-8px);

    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
  }
`;

export const Badge = styled.div`
  position: absolute;

  top: 18px;
  left: 18px;

  z-index: 5;

  padding: 6px 12px;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.brand.primary};

  color: ${({ theme }) => theme.colors.text.inverse};

  font-size: 0.7rem;

  font-weight: 700;

  letter-spacing: 1px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 270px;
  padding: 10px 16px;

  background: transparent;

  overflow: hidden;
`;
// export const ImageContainer = styled.div`
//   display: flex;

//   align-items: center;

//   justify-content: center;

//   height: 270px;

//   padding: 32px;

//   background: ${({ theme }) => theme.colors.bg.secondary};
// `;
export const ProductImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  transform: scale(1.16);
  transform-origin: center;

  transition: transform 250ms ease;

  ${Card}:hover & {
    transform: scale(1.2);
  }
`;
// export const ProductImage = styled.img`
//   width: 100%;

//   height: 100%;

//   object-fit: contain;
// `;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  gap: 18px;

  padding: 28px;
`;
export const ProductName = styled(Text)`
  color: ${({ theme }) => theme.colors.brand.primary};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  letter-spacing: 0;
`;

// export const ProductName = styled.h3`
//   margin: 0;

//   color: ${({ theme }) => theme.colors.brand.primary};

//   font-size: 1.35rem;

//   font-weight: 700;
// `;

export const FeaturesList = styled.ul`
  display: flex;

  flex-direction: column;

  gap: 10px;

  padding: 0;

  margin: 0;

  list-style: none;
`;

export const FeatureItem = styled.li`
  display: flex;

  align-items: center;

  gap: 10px;

  color: ${({ theme }) => theme.colors.text.secondary};

  font-size: 0.95rem;
`;

export const CheckIcon = styled.span`
  color: ${({ theme }) => theme.colors.brand.secondary};

  font-weight: 700;
`;

export const Price = styled(Text)`
  margin-top: 2px;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
  letter-spacing: 0;
`;
// export const Price = styled.div`
//   color: ${({ theme }) => theme.colors.text.primary};

//   font-size: 1.8rem;

//   font-weight: 800;
// `;

export const ButtonContainer = styled.div`
  margin-top: auto;
`;
