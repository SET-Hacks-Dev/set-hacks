import styled from "styled-components";
import { media, theme } from "../theme";

type StyledTiltedProps = {
  color: string;
  skewDeg: number;
  theme: any;
};

const StyledTilted = styled.div<StyledTiltedProps>`
  background-image: linear-gradient(
    ${theme.colors.brand[800]},
    ${theme.colors.brand[400]},
    ${theme.colors.secondary},
    ${theme.colors.white}
  );
  background-color: ${(props) => props.color};
  margin-top: 20rem;
  margin-bottom: -2.5rem;
  padding: 6rem 0;
  ${media.sm`padding: 8rem 0`};
  ${media.lg`padding: 10rem 0`};
  transform: skewY(-${({ skewDeg }) => skewDeg}deg) translateY(-180px);
  ${media.sm`transform: skewY(-${({ skewDeg }: { skewDeg: number }) =>
    skewDeg}deg) translateY(-225px)`};
  transition: 0.4s all ease-in-out;
  width: 100%;
  z-index: -1;

  & > * {
    transform: skewY(${({ skewDeg }) => skewDeg}deg);
  }
`;

const Tilted = (props: any) => {
  const skewDeg = 5;
  const { color, children, ...other } = props;

  return (
    <StyledTilted {...{ skewDeg, color }} {...other}>
      {children}
    </StyledTilted>
  );
};

export default Tilted;
