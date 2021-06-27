import { useState } from "react"
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import { Heading, Text } from "../components";
import styled from "styled-components";

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
        <Row className="row justify-content-md-center mb-5" >
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
              <Col xs={4} lg={2} style={{ maxWidth, opacity: track.id === activeTrack ? 1 : 0.3 }} key={track.id}>
                <Image src={track.icon} alt={track.title} fluid />
                <Text className="text-center mb-4" text={track.title} style={{fontWeight: "bold", cursor:"pointer"}} onClick={()=>setActiveTrack(track.id)}/>
              </Col>
            )
          })}
        </Row>
      </TrackWrapper>
      <TrackWrapper>
        <Row>
          <Col xs={5} lg={3}/>
          <Col xs={7} lg={9}>
            <Image src={tracks[activeTrack].icon} alt={tracks[activeTrack].title} fluid style={{ position: "absolute", height:520, maxHeight:"22vw", minHeight:400, left:0, top:0, zIndex: 500}}/>
            <Card style={{borderRadius: "15px", minHeight:"500px", padding: "50px", paddingLeft: "100px"}} >
              <Text className="mb-4" text={tracks[activeTrack].title} style={{fontWeight: "bold", fontSize: "180%"}}/>
              <Text className="mb-4" text={tracks[activeTrack].info} style={{fontSize: "120%"}}/>
              <Row className="mt-auto">
                <Col xs={12} lg={6}>
                  {activeTrack - 1 >= 0 && (
                    <div className="btn p-0" onClick={()=>setActiveTrack(activeTrack - 1)}>
                      <Text text={"← " + tracks[activeTrack - 1].title} style={{fontWeight: "bold", fontSize: "120%"}}/>
                    </div>
                  )}
                </Col>
                <Col xs={12} lg={6}>
                  {activeTrack + 1 < length && (
                    <div className="btn p-0" onClick={()=>setActiveTrack(activeTrack + 1)} style={{float: "right"}}>
                      <Text text={tracks[activeTrack + 1].title  + " →"} style={{fontWeight: "bold", fontSize: "120%"}}/>
                    </div>
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </TrackWrapper>
    </>
  );
};

export default Track;
