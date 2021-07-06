import { Col, Container, Row, Image } from "react-bootstrap";
import { ButtonProps, Heading, Text, Link, Button } from "../components";
import styled from "styled-components";
import media from "../theme/media";

type About2Props = {
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

const About2Wrapper = styled(Container)`
  > * {
    color: ${(props) =>
      props.dark
        ? props.theme.colors.white
        : props.theme.colors.brand[800]} !important;
  }
`;

const Spaceship = styled(Image)`
  left: -15%;
  top: 20%;
  position: relative;
  ${media.lg`position: absolute`};
  ${media.lg`width: 60%!important;`};
`;

const About2 = ({
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
}: About2Props) => {
  return (
    <div className="my-5 py-5 position-relative">
      <About2Wrapper dark={dark ? 1 : 0}>
        <Row className="d-flex align-items-center justify-content-end">
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
        </Row>
      </About2Wrapper>
      <Spaceship
        src={image}
        alt={heading + " Graphic"}
        fluid
      />
    </div>
  );
};

export default About2;
