import styled from "styled-components";
import { rgba } from "polished";
import { TextChildren } from "./Text";
import { renderIcon, Accent } from "./render";
import { ChevronUp } from "react-feather";
import { theme } from "../theme";
import { useState } from "react";

type StyledQuestionProps = {
  padded: boolean;
};

const StyledQuestion = styled.div<StyledQuestionProps>`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  padding-bottom: ${({ padded }) => (padded ? "1.75rem" : "0.6rem")};
  box-shadow: 0 5px 5px ${rgba(theme.colors.brand[800], 0.2)};
  margin-bottom: 30px;
`;

const QuestionHeader = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type QuestionArrowProps = {
  rotated: boolean;
};

const QuestionArrow = styled.div<QuestionArrowProps>`
  padding-top: ${({ rotated }) => (rotated ? "1rem" : "0")};
  padding-bottom: ${({ rotated }) => (rotated ? "0" : "1rem")};
  transform: rotate(${({ rotated }) => (rotated ? "180deg" : "0deg")});
  transition: 0.4s all ease;
`;

type QuestionBodyProps = {
  visible: boolean;
};

const QuestionBody = styled.div<QuestionBodyProps>`
  height: ${({ visible }) => (visible ? "auto" : 0)};
  transition: 0.4s all ease-in-out;

  & > * {
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
    transform: translateY(${({ visible }) => (visible ? "0" : "-10%")});
  }
`;

type QuestionProps = {
  q: string;
  a: any;
};

const Question = ({ q, a }: QuestionProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <StyledQuestion padded={visible}>
      <QuestionHeader onClick={() => setVisible(!visible)}>
        <TextChildren style={{ fontWeight: 500 }}>
          <Accent>{q}</Accent>
        </TextChildren>
        <QuestionArrow rotated={!visible}>
          <Accent>{renderIcon(ChevronUp, 26, "m-0 p-0")}</Accent>
        </QuestionArrow>
      </QuestionHeader>
      <QuestionBody visible={visible}>
        <TextChildren>{a}</TextChildren>
      </QuestionBody>
    </StyledQuestion>
  );
};

export default Question;
