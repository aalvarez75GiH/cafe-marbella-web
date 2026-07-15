import styled from "styled-components";

export const FeaturesList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;

  width: 100%;
  margin-top: 24px;
`;

export const FeatureItem = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  min-width: 0;
`;

export const FeatureIcon = styled.div`
  display: grid;
  place-items: center;

  width: 30px;
  height: 30px;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.brand.secondary};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FeatureLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  line-height: 1.35;
  text-align: center;
`;

export const FeatureSeparator = styled.span`
  position: absolute;
  top: 15px;
  right: -11px;

  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.brand.secondary};
`;
