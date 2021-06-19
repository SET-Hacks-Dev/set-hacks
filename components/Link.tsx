import styled from "styled-components";
import { media, theme } from "../theme";
import { darken } from "polished";

const StyledLink = styled.a`
  color: ${theme.colors.brand["400"]} !important;
  text-decoration: none !important;
  font-size: ${theme.fontSizes.md};
  font-weight: 500;
  ${media.sm`font-size: ${theme.fontSizes.lg}`};
  transition: 0.4s all ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    bottom: -0.25rem;
    left: 0;
    background-color: ${theme.colors.brand["400"]};
    visibility: visible;
    transform: scaleX(1);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    color: ${darken(0.05, theme.colors.brand[400])};

    &::before {
      visibility: hidden;
      transform: scaleX(0);
    }
  }
`;

const Link = (props: any) => {
  let { children, ...other } = props;
  return <StyledLink {...other}>{children}</StyledLink>;
};

export default Link;
