import { Parallax } from "react-scroll-parallax";
import { MouseParallaxChild } from "react-parallax-mouse";

export type ParallaxLayerType = {
  image: any;
  factorX: number;
  factorY: number;
  speed: number;
  className?: string;
  isBase?: boolean;
};

export const ParallaxLayer = ({
  image,
  factorX,
  factorY,
  speed,
  className = "",
  isBase = false,
}: ParallaxLayerType) => {
  return (
    <div
      className={`${
        isBase ? "parallaxed-base" : "parallaxed-layer"
      } ${className}`}
    >
      <Parallax speed={speed}>
        <MouseParallaxChild
          factorX={factorX}
          factorY={factorY}
          className='parallax-layer-mouse'
        >
          <img src={image} alt='' />
        </MouseParallaxChild>
      </Parallax>
    </div>
  );
};
