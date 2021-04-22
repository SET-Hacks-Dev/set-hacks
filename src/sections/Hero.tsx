import { Accent, Chip, Heading, SocialMedia } from "../components";
import { Col, Container, Row } from "react-bootstrap";

import { HOME } from "../constants";
import { Image } from "react-bootstrap";
import MailingList from "./MailingList";
import Typical from "react-typical";

const Hero = () => {
  return (
    <Container
      style={{ paddingTop: "5vh", paddingBottom: "5vh", minHeight: "90vh" }}
    >
      <Row style={{ minHeight: "90vh" }}>
        <Col xs={12} lg={6} className="d-flex align-items-center">
          <div className="w-100 d-flex justify-content-center flex-column">
            <Heading toRender={false} sizeXs="5xl" sizeLg="6xl">
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
          className="d-flex align-items-center justify-content-center"
        >
          <Image src={HOME.image} alt="Hero" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
