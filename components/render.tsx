import { hashString } from "react-hash-string";
import styled from "styled-components";

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.brand[400]};
`;

export const Highlight = styled.span<{ active: number }>`
  background: ${(props) =>
    props.active
      ? `linear-gradient(to bottom, transparent 60%, ${props.theme.colors.brand[1000]} 60%)`
      : "none"};
`;

export const renderIcon = (Icon: any, size = 22, className = "") => (
  <Icon size={size} className={className} />
);

const render = (text: string) => {
  let textMap = text.split("~");
  let textMap1 = text.split("*");
  let jsxMap = [];
  let highlight = false;
  let accent = false;

  if (textMap1.length === 1 && textMap.length === 1) return <>{textMap[0]}</>;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "~") highlight = !highlight;
    else if (text[i] === "*") accent = !accent;
    else {
      if (accent) {
        jsxMap.push(
          <Accent key={hashString(text[i])}>
            <Highlight style={{ fontWeight: 600 }} active={highlight ? 1 : 0}>
              {text[i]}
            </Highlight>
          </Accent>
        );
      } else {
        jsxMap.push(
          <Highlight
            key={hashString(text[i])}
            style={{ fontWeight: 600 }}
            active={highlight ? 1 : 0}
          >
            {text[i]}
          </Highlight>
        );
      }
    }
  }
  return <>{jsxMap}</>;
};

export default render;
