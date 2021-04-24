import {rgba} from "polished";
import styled from "styled-components";
import {media} from "../theme";

const StyledInput = styled.input.attrs({
    className: "form-control",
})`
  border: 1px solid ${({theme}) => rgba(theme.colors.brand[800], 0.15)};
  box-shadow: none !important;
  background-color: ${({theme}) => rgba(theme.colors.white, 0.75)};
  color: ${({theme}) => rgba(theme.colors.brand[800], 0.95)};
  font-size: ${({theme}) => theme.fontSizes.md};
  font-weight: 500;
  padding: 1.6rem 1.3rem;
  transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: 0;

  width: 10rem;
  ${media.sm`width: 15rem`};
  margin: 0;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${({theme}) => rgba(theme.colors.brand[800], 0.15)};
    background-color: ${({theme}) => rgba(theme.colors.white, 0.4)};
    outline: 0 !important;
  }

  ::placeholder {
    color: ${({theme}) => rgba(theme.colors.brand[800], 0.6)};
    font-weight: 500;
  }
`;

const Input = (props: any) => {
    return <StyledInput {...props} />;
};

export default Input;
