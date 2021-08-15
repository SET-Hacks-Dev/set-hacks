import {
  Accent,
  Chip,
  Heading,
  SocialMedia,
  render,
  Button,
} from "../components";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { media, theme } from "../theme";
import { HOME } from "../constants";
import { ArrowRight } from "react-feather";
import MailingList from "./MailingList";
import Typical from "react-typical";

const StyledContainer = styled(Container)`
  padding-top: 15vh;
  padding-bottom: 15vh;
  min-height: 70vh;
  position: relative;
  z-index: 999;
  ${media.lg`padding-top: 5vh`};
  ${media.lg`padding-bottom: 5vh`};
  ${media.lg`height: 100vh !important`};
`;

const Rocket = styled(Image)`
  display: none;
  max-height: 80vh;
  ${media.lg`display: block`};
`;

const Hero = () => {
  return (
    <StyledContainer>
      <Row style={{ height: "100%" }}>
        <Col
          xs={12}
          lg={6}
          className="d-flex align-items-center justify-content-end"
        >
          <Rocket className="p-3 me-5" src={HOME.image} alt="Hero" fluid />
        </Col>
        <Col xs={12} lg={6} className="d-flex align-items-center">
          <div className="w-100 d-flex justify-content-center flex-column">
            <Heading toRender={false} sizeXs="4xl" sizeLg="5xl">
              <Accent>
                <Typical
                  steps={HOME.lead.actions}
                  loop={Infinity}
                  wrapper="span"
                />
              </Accent>
              <br />
              {render(HOME.lead.content)}
            </Heading>
            <div className="mt-3 w-100 d-flex justify-content-begin">
              {HOME.chips.map((chip) => (
                <Chip {...chip} key={chip.label} />
              ))}
            </div>
            <div className="w-100 mt-2">
              {HOME.text.map((text) => {
                return <div key={text}>{render(text)}</div>;
              })} 
            </div>
            <div className="w-100 mt-2 mb-3">
              {HOME.deadline.map((text) => {
                return <div key={text}>{render(text)}</div>;
              })}
            </div>
            <div className="w-100 my-4">
              <Button
                {...HOME.apply.actionButton}
                isLink={true}
                rightIcon={ArrowRight}
              />
            </div>
            {/* <div className="w-100 mt-2">
              <MailingList />
            </div> */}
            <div className="w-100 mt-4 d-flex">
              {HOME.socialMedia.map((social) => (
                <SocialMedia {...social} key={social.url} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Hero;
