import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ $direction = "row" }) => $direction};
  align-items: ${({ $align = "stretch" }) => $align};
  justify-content: ${({ $justify = "flex-start" }) => $justify};
  flex-wrap: ${({ $wrap = "nowrap" }) => $wrap};
  gap: ${({ $gap = "0" }) => $gap};
  width: ${({ $width = "auto" }) => $width};
`;
