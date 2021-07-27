import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import { Text } from "../components";
import styled from "styled-components";
import { media } from "../theme";

type SponsProps = {
  header: string;
  gold: SponsorProps;
  silver: SponsorProps;
  bronze: SponsorProps;
  dark?: boolean;
};

type SponsorProps = {
  size: {
    height: string;
    maxHeight: string;
    default: string;
  };
  sponsors: Spon[];
};

type Spon = {
  name: string;
  link: string;
  image: string;
};

const SponsorsWrapper = styled(Container)`
  > * {
    color: ${(props) =>
      props.dark
        ? props.theme.colors.white
        : props.theme.colors.brand[500]} !important;
  }
`;

const Header = styled(Text)`
  font-weight: 500;
  font-size: 120%;
  ${media.lg`font-size: 160%`};
`;

const Logos = styled(Image)<{ default: string }>`
  cursor: pointer;
  ${media.lg`height: ${(props) => props.height}`} !important;
  ${media.lg`max-height: ${(props) => props.sizes}`} !important;
  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
    transition: 0.4s transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
  height: ${(props) => props.default};
`;

const Sponsors = ({
  header,
  gold,
  silver,
  bronze,
  dark = false,
}: SponsProps) => {
  console.log(gold.size.default);
  return (
    <>
      <SponsorsWrapper dark={dark ? 1 : 0}>
        <Row className="mb-3 text-center">
          <Header text={header} />
        </Row>
        <Row className="text-center">
          <div>
            {gold.sponsors.map((sponsor) => {
              return (
                <a key={sponsor.name} href={sponsor.link} target="_blank">
                  <Logos
                    className="m-4"
                    src={sponsor.image}
                    alt={sponsor.name}
                    height={gold.size.height}
                    sizes={gold.size.maxHeight}
                    default={gold.size.default}
                  />
                </a>
              );
            })}
          </div>
          <div>
            {silver.sponsors.map((sponsor) => {
              return (
                <a key={sponsor.name} href={sponsor.link} target="_blank">
                  <Logos
                    className="m-4"
                    src={sponsor.image}
                    alt={sponsor.name}
                    height={silver.size.height}
                    sizes={silver.size.maxHeight}
                    default={silver.size.default}
                  />
                </a>
              );
            })}
          </div>
          <div>
            {bronze.sponsors.map((sponsor) => {
              return (
                <a key={sponsor.name} href={sponsor.link} target="_blank">
                  <Logos
                    className="m-4"
                    src={sponsor.image}
                    alt={sponsor.name}
                    height={bronze.size.height}
                    sizes={bronze.size.maxHeight}
                    default={bronze.size.default}
                  />
                </a>
              );
            })}
          </div>
        </Row>
      </SponsorsWrapper>
    </>
  );
};

export default Sponsors;
