import React, { useEffect } from "react";
import { Star, StarProps } from "../components";

type StarsProps = {
  id: string;
  tiers: StarProps[];
  children: any;
};

type DimProps = {
  height: number;
  width: number;
};

const Stars = ({ id, tiers, children }: StarsProps) => {
  const [hasRendered, setHasRendered] = React.useState<boolean>(false);
  const [dimensions, setDimensions] = React.useState<DimProps>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    if (!hasRendered) setHasRendered(true);

    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
  }, [hasRendered]);

  return (
    <div id={id}>
      {hasRendered &&
        tiers.map((tier, i) => {
          const items = [];
          for (let j = 0; j < tier.count; ++j)
            items.push(<Star {...tier} parent={id} key={`${id}-${i}-${j}`} />);
          return items;
        })}
      {children}
    </div>
  );
};

export default Stars;
