import styled from "styled-components";
import { media, theme } from "../theme";
import render from "./render";

const StyledText = styled.p`
  color: ${theme.colors.brand["800"]};
  font-size: ${theme.fontSizes.md};
  ${media.sm`font-size: ${theme.fontSizes.lg}`};
  transition: 0.4s all ease;
`;

export const TextChildren = (props: any) => {
  let { children, ...other } = props;
  return <StyledText {...other}>{children}</StyledText>;
};

const Text = (props: any) => {
  let { text, ...other } = props;
  return <StyledText {...other}>{render(text)}</StyledText>;
};

export default Text;
