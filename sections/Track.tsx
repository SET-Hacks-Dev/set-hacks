import { useState } from "react"
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import { Heading, Text } from "../components";
import styled from "styled-components";
import { media } from "../theme";

type TrackProps = {
  heading: string;
  text: string[];
  tracks: IconProps[];
  maxWidth?: string;
  dark?: boolean;
};

type IconProps = {
  title: string;
  icon: string;
  info: string;
  id: number;
}

const TrackWrapper = styled(Container)`
  > * {
    color: ${(props) =>
      props.dark
        ? props.theme.colors.white
        : props.theme.colors.brand[800]} !important;
  }
`;

const LargeIcon = styled(Image)`
  position: absolute;
  display: none;
  height: 500px;
  max-height: 35vw;
  left: 0;
  top: 0;
  z-index: 500;
  ${media.lg`display: block`};
`;

const TrackCard = styled(Card)`
  border-radius: 15px;
  min-height: 500px;
  padding: 50px;
  ${media.lg`padding-left: 150px`};
`;

const Buttons = styled(Text)`
  font-weight: bold;
  font-size: 110%;
  ${media.lg`font-size: 140%`};
`;

const Icons = styled(Col)`
  opacity: ${(props) => props.active ? 1 : 0.3};
  cursor: pointer;
  ${media.lg`transform: ${(props) => props.active ? "scale(1.1)" : "scale(0.9)"}`};
  ${media.lg`transition: .4s transform cubic-bezier(.155,1.105,.295,1.12)`};
  ${(props) => !props.active && `
    &:hover {
      opacity: 0.8;
      transform: translate(0%, -3%);
      transition: 0.2s ease-out;
    }
  `}
`;

const IconsText = styled(Text)`
  font-size: 80%;
  ${media.lg`font-size: 120%`};
  ${media.lg`font-weight: bold`};
`;

const Track = ({
  heading,
  text,
  tracks,
  maxWidth = "100%",
  dark = false,
}: TrackProps) => {

  const [activeTrack, setActiveTrack] = useState<number>(0);
  const length = tracks.length;

  return (
    <>
      <TrackWrapper dark={dark ? 1 : 0}>
        <Row className="row justify-content-md-center mb-4">
          <Col xs={12} lg={6} className="text-center mb-4" style={{ maxWidth }}>
            <Heading className="mb-4">{heading}</Heading>
            {text && text.map(line => {
              return (
                <Text text={line} key={line}/>
              )
            })}
          </Col>
        </Row>
        <Row className="row justify-content-md-center mb-5">
          {tracks && tracks.map(track => {
            return (
              <Icons xs={4} lg={2} style={{ maxWidth }} key={track.id} active={track.id === activeTrack ? 1 : 0} onClick={()=>setActiveTrack(track.id)}>
                <Image src={track.icon} alt={track.title} fluid />
                <IconsText className="text-center mb-4" text={track.title}/>
              </Icons>
            )
          })}
        </Row>
      </TrackWrapper>
      <TrackWrapper>
        <Row>
          <Col xs={0} lg={3}/>
          <Col xs={12} lg={9}>
            <LargeIcon src={tracks[activeTrack].icon} alt={tracks[activeTrack].title} fluid/>
            <TrackCard>
              <Text className="mb-4" text={tracks[activeTrack].title} style={{ fontWeight: "bold", fontSize: "180%" }}/>
              <Text className="mb-4" text={tracks[activeTrack].info} style={{ fontSize: "120%" }}/>
              <Row className="mt-auto">
                <Col xs={12} lg={6}>
                  {activeTrack - 1 >= 0 && (
                    <div className="btn p-0" onClick={()=>setActiveTrack(activeTrack - 1)}>
                      <Buttons text={"← " + tracks[activeTrack - 1].title}/>
                    </div>
                  )}
                </Col>
                <Col xs={12} lg={6}>
                  {activeTrack + 1 < length && (
                    <div className="btn p-0" onClick={()=>setActiveTrack(activeTrack + 1)} style={{ float: "right" }}>
                      <Buttons text={tracks[activeTrack + 1].title  + " →"}/>
                    </div>
                  )}
                </Col>
              </Row>
            </TrackCard>
          </Col>
        </Row>
      </TrackWrapper>
    </>
  );
};

export default Track;
