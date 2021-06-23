import { media, theme } from "../theme";
import render from "./render";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: ${({ theme, sizeXs }: { theme: any; sizeXs: string }) =>
    theme.fontSizes[sizeXs]};
  ${media.lg`font-size: ${({ theme, sizeLg }: { theme: any; sizeLg: string }) =>
    theme.fontSizes[sizeLg]}`};
  font-weight: 600;
  font-family: ${theme.fonts.heading};
`;

type HeaderProps = {
  children: React.ReactNode;
  size?: string;
  toRender?: boolean;
  [other: string]: any;
};

const Heading = ({
  children = "",
  sizeXs = "2xl",
  sizeLg = "3xl",
  className = "",
  toRender = true,
  other,
}: HeaderProps) => {
  return (
    // @ts-ignore
    <StyledHeader
      sizeXs={sizeXs}
      sizeLg={sizeLg}
      className={className}
      {...other}
    >
      {toRender ? render(children!.toString()) : children}
    </StyledHeader>
  );
};

export default Heading;
