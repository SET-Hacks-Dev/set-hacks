import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import { Text } from "../components";
import styled from "styled-components";
import { media } from "../theme";

type SponsProps = {
  header: string;
  title: SponsorProps;
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
  min-height: 20px;
`;

const Sponsors = ({
  header,
  title,
  gold,
  silver,
  bronze,
  dark = false,
}: SponsProps) => {
  const tiers = [title, gold, silver, bronze];
  return (
    <>
      <SponsorsWrapper dark={dark ? 1 : 0}>
        <Row className="mb-3 text-center">
          <Header text={header} />
        </Row>
        <Row className="text-center">
          {tiers.map((tier, index) => {
            return (
              <div key={index}>
                {tier.sponsors.length > 0 &&
                  tier.sponsors.map((sponsor) => {
                    return (
                      <a key={sponsor.name} href={sponsor.link} target="_blank">
                        <Logos
                          className={tier === title ? "m-5" : "m-4"}
                          src={sponsor.image}
                          alt={sponsor.name}
                          height={tier.size.height}
                          sizes={tier.size.maxHeight}
                          default={tier.size.default}
                        />
                      </a>
                    );
                  })}
              </div>
            );
          })}
        </Row>
      </SponsorsWrapper>
    </>
  );
};

export default Sponsors;
