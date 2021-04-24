import { hashString } from "react-hash-string";
import styled from "styled-components";

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.brand[400]};
`;

export const renderIcon = (Icon: any, size = 22, className = "") => (
  <Icon size={size} className={className} />
);

const render = (text: string) => {
  let textMap = text.split("*");
  let jsxMap = [];
  for (let i = 0; i < textMap.length; i++) {
    if (i % 2 === 0) jsxMap.push(textMap[i]);
    else
      jsxMap.push(
        <Accent key={hashString(textMap[i])}>
          <span style={{ fontWeight: 600 }}>{textMap[i]}</span>
        </Accent>
      );
  }
  return <>{jsxMap}</>;
};

export default render;
