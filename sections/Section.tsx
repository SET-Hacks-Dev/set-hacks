import { Col, Container, Row, Image } from "react-bootstrap";
import { ButtonProps, Heading, Text, Link, Button } from "../components";
import styled from "styled-components";
import theme from "../theme/theme";

type SectionProps = {
  heading: string;
  text?: string;
  link?: {
    label: string;
    href: string;
  };
  image?: any;
  post?: any;
  maxWidth?: string;
  button?: ButtonProps;
  className?: string;
  reverse?: boolean;
  dark?: boolean;
};

const SectionWrapper = styled(Container)`
  > * {
    color: ${(props) =>
      props.dark
        ? props.theme.colors.white
        : props.theme.colors.brand[800]} !important;
  }
`;

const Section = ({
  heading,
  text,
  link,
  image,
  post,
  maxWidth = "100%",
  button,
  className = "",
  reverse = false,
  dark = false,
}: SectionProps) => {
  return (
    <SectionWrapper dark={dark ? 1 : 0}>
      <Row className="d-flex align-items-center">
        <Col
          xs={{ span: 12, order: reverse ? "last" : "first" }}
          lg={{ span: image ? 6 : 12, order: reverse ? "last" : "first" }}
          style={{ maxWidth }}
          className={className}
        >
          <Heading className={"mb-4"}>{heading}</Heading>
          {text && <Text text={text} />}
          {post && post}
          {link && <Link href={link.href}>{link.label}</Link>}
          {button && (
            <div className={"pt-4"}>
              <Button {...button} />
            </div>
          )}
        </Col>
        {image && (
          <Col xs={12} lg={6} className={"d-flex justify-content-center"}>
            <Image src={image} alt={heading + " Graphic"} fluid />
          </Col>
        )}
      </Row>
    </SectionWrapper>
  );
};

export default Section;
