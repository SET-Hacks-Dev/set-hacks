import styled from "styled-components";
import { rgba } from "polished";
import { media, theme } from "../theme";
import { Container, Row, Col } from "react-bootstrap";

const borderColor = rgba(theme.colors.brand["800"], 0.05);

const StyledContainer = styled(Container)`
  margin-top: 7rem !important;
  margin-bottom: 7rem !important;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > div {
    box-sizing: border-box;
    flex: 0 50%;
    ${media.lg`flex: 0 25%`};
  }
`;

const StyledStat = styled.div`
  align-items: center;
  border: 1px solid ${borderColor};
  background-color: ${rgba(theme.colors.white, 0.075)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;
  width: 100%;

  &:first-child {
    border-top-left-radius: ${theme.borderRadius.lg};
    border-bottom: none;
    ${media.lg`border-bottom: 1px solid ${borderColor}`};
    ${media.lg`border-bottom-left-radius: ${theme.borderRadius.lg}`};
  }
  &:nth-child(2) {
    border-top-right-radius: ${theme.borderRadius.lg};
    ${media.lg`border-top-right-radius: 0`};
    border-left: none;
    border-bottom: none;
    ${media.lg`border-bottom: 1px solid ${borderColor}`};
  }
  &:nth-child(3) {
    border-bottom-left-radius: ${theme.borderRadius.lg};
    ${media.lg`border-bottom-left-radius: 0`};
    ${media.lg`border-left: none`};
  }
  &:nth-child(4) {
    border-bottom-right-radius: ${theme.borderRadius.lg};
    border-top-right-radius: 0;
    border-left: none;
    ${media.lg`border-top-right-radius: ${theme.borderRadius.lg}`};
  }
`;

const Value = styled.h2`
  color: ${theme.colors.brand["800"]};
  font-size: 50px;
  ${media.lg`font-size: 75px`};
  font-weight: 600;
`;

const Label = styled.p`
  color: ${theme.colors.brand["800"]};
  font-size: ${theme.fontSizes.md};
  ${media.lg`font-size: ${theme.fontSizes.lg}`};
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

// needs container, interval, value, label

type StatProps = {
  value: string;
  label: string;
};

type StatsProps = {
  stats: StatProps[];
  caption: string;
};

const Stats = ({ stats, caption }: StatsProps) => {
  return (
    <StyledContainer className="my-5">
      <Row>
        <Col xs={12}>
          <StyledWrapper>
            {stats.map((stat: StatProps) => (
              <StyledStat key={stat.label}>
                <Value>{stat.value}</Value>
                <Label>{stat.label}</Label>
              </StyledStat>
            ))}
          </StyledWrapper>
        </Col>
      </Row>
      <p className="mt-4">{caption}</p>
    </StyledContainer>
  );
};

export default Stats;
