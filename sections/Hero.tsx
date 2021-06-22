import { Accent, Chip, Heading, SocialMedia } from "../components";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import { media } from "../theme";
import { HOME } from "../constants";
import MailingList from "./MailingList";
import Typical from "react-typical";

const StyledContainer = styled(Container)`
  padding-top: 15vh;
  padding-bottom: 15vh;
  margin-bottom: 5rem;
  min-height: 70vh;
  ${media.lg`padding-top: 5vh`};
  ${media.lg`padding-bottom: 5vh`};
  ${media.lg`height: 100vh !important`};
`;

const Hero = () => {
  return (
    <StyledContainer>
      <Row style={{ height: "100%" }}>
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
              {HOME.lead.content}
            </Heading>
            <div className="mt-3 w-100 d-flex justify-content-begin">
              {HOME.chips.map((chip) => (
                <Chip {...chip} key={chip.label} />
              ))}
            </div>

            <div className="w-100 mt-4">
              <MailingList />
            </div>
            <div className="w-100 mt-5 d-flex">
              {HOME.socialMedia.map((social) => (
                <SocialMedia {...social} key={social.url} />
              ))}
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex align-items-center justify-content-start mt-5 mt-lg-0"
        >
          <Image src={HOME.image} alt="Hero" fluid />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Hero;
