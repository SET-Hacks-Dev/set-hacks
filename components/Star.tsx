import {Background, Parallax} from "react-parallax";

import Image from "next/image";
import React from "react";

export type StarProps = {
  count: number;
  image: StaticImageData;
  opacity: number;
  strength: number;
  parent?: string;
}

const Star = ({count, image, opacity, strength, parent} : StarProps) => {
  const PH = () : [number, number] => {
    const P = document.getElementById(parent);
    const min = P.offsetTop;
    const max = P.offsetHeight + min;
    return [min, max];
  }

  const PW = () : [number, number] => {
    const P = document.getElementById(parent);
    return [0, P.offsetWidth];
  }

  const rnd = ([min, max]: [number, number]) => {
    let A = Math.ceil(min);
    let B = Math.floor(max);
    return Math.floor(Math.random() * (B - A + 1)) + A;
  }

  let size = rnd([25, 40]);

  return (
    <div style={{
      position: "absolute",
      top: rnd(PH()),
      left: rnd(PW()),
      zIndex: -1,
      transform: `rotate(${rnd([0, 360])}deg)`
    }}>
      {/* <Parallax
        strength={strength}
        style={{
          width: 100,
          height: 100,
        }}
      >
        <Background> */}
          <div style={{opacity: opacity}}>
            <Image
              src={image}
              alt="star"
              height={size}
              width={size}
            />
          </div>
        {/* </Background>
      </Parallax> */}
    </div>
  )
}

export default Star;
