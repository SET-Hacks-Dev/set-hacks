import styled from "styled-components";
import { rgba } from "polished";
import { media, theme } from "../theme";
import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Heading } from "../components";

type StoryProps = {
  name: string;
  school: string;
  project: string;
  link: string;
  quote: string;
  headshot: string;
};

type StoriesProps = {
  heading: string;
  stories: StoryProps[];
};

const StoryCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px ${rgba(theme.colors.brand[800], 0.2)};
`;

const Name = styled.p`
  font-size: ${theme.fontSizes.xl};
  ${media.lg`font-size: ${theme.fontSizes["2xl"]}`};
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const School = styled.p`
  font-size: ${theme.fontSizes.sm};
  ${media.lg`font-size: ${theme.fontSizes.md}`};
  font-weight: 400;
  font-style: italic;
  padding: 0;
  margin: 0;
`;

const Quote = styled.p`
  font-size: ${theme.fontSizes.md};
  ${media.lg`font-size: ${theme.fontSizes.lg}`};
  ${media.md`margin-left: 50px`};
  ${media.sm`margin: 0`};
  font-weight: 400;
`;

const Arrow = styled(Image)`
  width: 100px;
  height: 100px;
  top: 40%;
  transform: translateY(-40%);
  -webkit-transform: translateY(-40%);
  padding: 0;
  cursor: pointer;
  diplay: inline;
`;

const HexHeadshot = styled(Image)`
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin: 0 auto;
  display: block;
  max-width: 200px;
  width: 100%;
`;

const Dot = styled.button`
  border: none;
  width: 10px;
  height: 10px;
  background: ${theme.colors.brand[800]};
  border-radius: 50%;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

const Stories = ({ stories, heading }: StoriesProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    // TODO - check media size and make slides per view = 1 for mobile
    slidesPerView: 2,
    mode: "free-snap",
    spacing: 36,
    centered: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <>
      <Container>
        <Row className={"mb-4 text-center"}>
          <Col xs={12}>
            <Heading>{heading}</Heading>
          </Col>
        </Row>
      </Container>
      <div ref={sliderRef} className="keen-slider">
        {stories.map((story: StoryProps) => (
          <StoryCard key={story.name} className="keen-slider__slide p-5 mb-2">
            <Row className={"my-auto pb-sm-5"}>
              <Col sm={12} md={4} className={"text-center my-auto"}>
                <HexHeadshot
                  alt={"Hacker Stories - " + story.name}
                  src={"img/headshots/" + story.headshot}
                />
                <Name className="mt-4">{story.name}</Name>
                <School>{story.school}</School>
              </Col>
              <Col sm={12} md={8} className={"my-auto"}>
                <Quote className="ms-md-4 ms-lg-4 ms-xl-4">{story.quote}</Quote>
              </Col>
            </Row>
          </StoryCard>
        ))}
      </div>
      {slider && (
        <Row>
          <div className="d-flex justify-content-center">
            <Arrow
              onClick={(e) => e.stopPropagation() || slider.prev()}
              src="assets/left.png"
            />
            <Arrow src="assets/center.png" />
            <Arrow
              onClick={(e) => e.stopPropagation() || slider.next()}
              src="assets/right.png"
            />
          </div>
          <div className="d-flex justify-content-center">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <>
                  <Dot
                    key={idx}
                    onClick={() => {
                      slider.moveToSlideRelative(idx);
                    }}
                    className={currentSlide === idx ? "" : "opacity-2"}
                  />
                </>
              );
            })}
          </div>
        </Row>
      )}
    </>
  );
};

export default Stories;
