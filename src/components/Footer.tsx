import styled from "styled-components";
import { rgba } from "polished";
import { ButtonProps } from "./Button";
import { Container, Row, Col } from "react-bootstrap";

const StyledBackground = styled.div``;

const StyledMessageContainer = styled.div``;

const StyledTextGroup = styled.div``;

const StyledHeading = styled.p``;

const StyledLink = styled.a``;

type MessageProps = {
  title: string;
  text: string;
  button: ButtonProps;
};

type SocialProps = {
  icon: any;
  url: string;
};

type LinkProps = {
  label: string;
  href: string;
};

type LinkGroupProps = {
  heading: string;
  links: LinkProps[];
};

type FooterProps = {
  messages: MessageProps[];
  social: SocialProps[];
  groups: LinkGroupProps[];
};

const Footer = ({ messages, social, groups }: FooterProps) => {
  return (
    <StyledBackground>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </StyledBackground>
  );
};

export default Footer;
