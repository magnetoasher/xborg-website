import React, { useEffect, useState } from "react";

export type CountUpAnimationType = {
  number: number;
  duration?: number;
};

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;

export const CountUpAnimation = ({
  number,
  duration = 2000,
}: CountUpAnimationType) => {
  const countTo = parseInt(number.toString(), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, []);

  return <>{Math.floor(count).toLocaleString()}</>;
};
