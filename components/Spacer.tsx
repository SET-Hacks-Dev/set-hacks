import styled from "styled-components";

type StyledSpacerProps = {
  sz: number;
};

const StyledSpacer = styled.div<StyledSpacerProps>`
  font-size: 0;
  height: ${({ sz }) => sz * 10}px;
  line-height: 0;
`;

export default StyledSpacer;
