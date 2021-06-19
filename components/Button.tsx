import {darken, rgba} from "polished";

import {renderIcon} from "./render";
import styled from "styled-components";

const StyledSpan = styled.span`
  background-color: ${({theme}) => theme.colors.brand[400]};
  border-radius: ${({theme}) => theme.borderRadius.base};
  color: ${rgba("#fff", 0.95)};
  font-weight: 500;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);
  text-decoration: none !important;

  &:hover {
    text-decoration: none !important;
    background-color: ${({theme}) => darken(0.075, theme.colors.brand[400])};
    box-shadow: 0 6px 15px ${({theme}) => rgba(theme.colors.brand[400], 0.2)};
  }
`;

export type ButtonProps = {
    label: string;
    isLink?: boolean;
    target?: string;
    leftIcon?: any;
    rightIcon?: any;
    other?: any;
};

const Button = ({
                    label = "",
                    isLink = false,
                    target = "",
                    leftIcon,
                    rightIcon,
                    other,
                }: ButtonProps) => {
    const hasLeftIcon = leftIcon ? true : false;
    const hasRightIcon = rightIcon ? true : false;

    const paddingLeft = hasLeftIcon ? "0.9rem" : "1.3rem";
    const paddingRight = hasRightIcon ? "0.9rem" : "1.3rem";

    const Base = () => (
        <StyledSpan
            style={{
                paddingLeft,
                paddingRight,
            }}
        >
            {leftIcon && renderIcon(leftIcon, 22, "mr-1")}
            {label}
            {rightIcon && renderIcon(rightIcon, 22, "ml-1")}
        </StyledSpan>
    );

    return isLink ? (
        <a {...other} href={target} style={{textDecoration: "none"}}>
            <Base/>
        </a>
    ) : (
        <button
            {...other}
            style={{backgroundColor: "#00000000", border: "0", outline: "0"}}
        >
            <Base/>
        </button>
    );
};

export default Button;
