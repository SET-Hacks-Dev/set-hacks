import { Container, Row, Col } from "react-bootstrap";
import { Heading, Tilted, Question } from "../components";
import { theme } from "../theme";
import { hashString } from "react-hash-string";

type FaqQuestionProps = {
  q: string;
  a: any;
};

type FaqBarProps = {
  heading: string;
  questions: FaqQuestionProps[];
};

type FaqProps = {
  heading: string;
  left_bar: FaqBarProps;
  right_bar: FaqBarProps;
};

const Faq = ({ heading, left_bar, right_bar }: FaqProps) => {
  return (
    <Tilted color={theme.colors.brand["200"]}>
      <Container>
        <Row className={"mb-4"}>
          <Col xs={12}>
            <Heading>{heading}</Heading>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Heading sizeXs={"xl"} sizeLg={"2xl"} className={"mb-4 mt-1"}>
              {left_bar.heading}
            </Heading>
            {left_bar.questions.map((q: FaqQuestionProps) => (
              <Question q={q.q} a={q.a} key={hashString(q.q)} />
            ))}
          </Col>
          <Col xs={12} md={6}>
            <Heading sizeXs={"xl"} sizeLg={"2xl"} className={"mb-4 mt-1"}>
              {right_bar.heading}
            </Heading>
            {right_bar.questions.map((q: FaqQuestionProps) => (
              <Question q={q.q} a={q.a} key={hashString(q.q)} />
            ))}
          </Col>
        </Row>
      </Container>
    </Tilted>
  );
};

export default Faq;
