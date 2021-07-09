import { Background, Parallax } from "react-parallax";

import Image from "next/image";
import React from "react";
import { relative } from "path/posix";
import styled from "styled-components";

export type StarProps = {
  count: number;
  image: StaticImageData;
  opacity: number;
  strength: number;
  parent?: string;
};

const StyledBackground = styled(Background)`
  width: 100% !important;
  height: 100%;
`;

const Star = ({ count, image, opacity, strength, parent }: StarProps) => {
  let pad = 500;

  const PH = (): [number, number] => {
    const P = document.getElementById(parent);
    const min = P.offsetTop;
    const max = P.offsetHeight + min;
    return [min - pad, max - pad];
  };

  const PW = (): [number, number] => {
    const P = document.getElementById(parent);
    return [-Math.trunc(P.offsetWidth / 2), Math.trunc(P.offsetWidth / 2)];
  };

  const rnd = ([min, max]: [number, number]) => {
    let A = Math.ceil(min);
    let B = Math.floor(max);
    return Math.floor(Math.random() * (B - A + 1)) + A;
  };

  let size = rnd([25, 40]);

  return (
    <div>
      <Parallax
        strength={strength}
        style={{
          position: "absolute",
          top: rnd(PH()),
          width: "100vw",
          paddingTop: pad,
          paddingBottom: pad,
        }}
      >
        <StyledBackground>
          <div
            style={{
              position: "relative",
              left: rnd(PW()),
              opacity: opacity,
              transform: `rotate(${rnd([0, 360])}deg)`,
            }}
          >
            <Image src={image} alt="star" height={size} width={size} />
          </div>
        </StyledBackground>
      </Parallax>
    </div>
  );
};

export default Star;
