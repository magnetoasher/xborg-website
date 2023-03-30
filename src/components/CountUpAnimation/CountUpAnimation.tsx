import React, { useEffect, useState } from "react";
import { ObserverContainer } from "../ObserverContainer";

export type CountUpAnimationType = {
  number: number;
  className: string;
  duration?: number;
  prefix?: string;
  sufix?: string;
};

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

export const CountUpAnimation = ({
  number,
  duration = 2000,
  className,
  prefix,
  sufix,
}: CountUpAnimationType) => {
  const countTo = parseInt(number.toString(), 10);
  const [count, setCount] = useState(0);

  return (
    <ObserverContainer
      className={className}
      onAnimateIn={() => {
        let frame = 0;
        const totalFrames = Math.round(duration / frameDuration);
        const counter = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          setCount(countTo * progress);

          if (frame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);
      }}
    >
      {prefix}
      {Math.floor(count).toLocaleString()}
      {sufix}
    </ObserverContainer>
  );
};
