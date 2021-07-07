import Button, { ButtonProps } from "./Button";
import { Col, Container, Row } from "react-bootstrap";
import { media, theme } from "../theme";

import { hashString } from "react-hash-string";
import { renderIcon } from "./render";
import { rgba } from "polished";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: ${theme.colors.brand[800]};
  padding: 5rem 0;
  z-index: 1000;

  & > * {
    color: ${theme.colors.white};
  }
`;

const StyledMessageContainer = styled(Col)`
  align-items: "center";
  justify-content: "space-between";
`;

const StyledTextGroup = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled.p`
  color: ${rgba(theme.colors.white, 0.9)};
  font-size: ${theme.fontSizes.lg};
  ${media.lg`font-size: ${theme.fontSizes.xl}`};
  font-weight: 600;
  margin: 0 0 0.8rem 0;
`;

const StyledText = styled.p`
  color: ${rgba(theme.colors.white, 0.6)};
  font-weight: 500;
  margin: 0;
`;

const StyledLinkGroupTitle = styled.p`
  color: ${rgba(theme.colors.white, 0.9)};
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
`;

const StyledLink = styled.a`
  color: ${rgba(theme.colors.white, 0.6)};
  margin: 0 0 0.1rem 0;
  padding: 0;
  font-size: ${theme.fontSizes.md};
  ${media.lg`font-size: ${theme.fontSizes.lg}`};
  font-weight: 500;
  transition: 0.4s all ease-in-out;
  text-decoration: none !important;

  &:hover {
    color: ${rgba(theme.colors.white, 0.9)};
  }
`;

const StyledHr = styled.hr`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 1.2rem;
  transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const StyledButton = styled.div`
  ${media.lg`float: right`};
`;

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
          {messages.map((message: MessageProps) => (
            <Row className={"mb-4 pb-1"} key={hashString(message.title)}>
              <StyledMessageContainer lg={6} xs={12} className={"pb-3"}>
                <StyledTextGroup>
                  <StyledHeading>{message.title}</StyledHeading>
                  <StyledText>{message.text}</StyledText>
                </StyledTextGroup>
              </StyledMessageContainer>
              <Col lg={6} xs={12} className={"py-4 px-2"}>
                <StyledButton>
                  <Button {...message.button} />
                </StyledButton>
              </Col>
            </Row>
          ))}
          <StyledHr />
        </Row>
        <Row>
          <Col xs={6} sm={6} md={3}>
            <StyledHeading>SET.Foundation</StyledHeading>
            <StyledText>Registered NPO</StyledText>
            <div className={"d-flex flex-row align-items-center mt-3"}>
              {social.map((s: SocialProps) => (
                <a href={s.url} key={hashString(s.url)}>
                  <StyledIconContainer>
                    {renderIcon(s.icon)}
                  </StyledIconContainer>
                </a>
              ))}
            </div>
          </Col>
          {groups.map((group: LinkGroupProps) => (
            <Col xs={6} sm={6} md={3} key={group.heading} className={"mb-3"}>
              <StyledLinkGroupTitle>{group.heading}</StyledLinkGroupTitle>
              {group.links.map((link: LinkProps) => (
                <p key={link.href}>
                  <StyledLink href={"https://setfoundation.ca" + link.href}>
                    {link.label}
                  </StyledLink>
                </p>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </StyledBackground>
  );
};

export default Footer;
