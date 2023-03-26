import styled from "styled-components";

export interface BoxProps {}

export const Box = styled.div<BoxProps>`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    flex: 1;
  }
`;

export default Box;
