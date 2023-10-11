import { useState } from 'react';

export type OnboardingSlideProps = {
  className?: string;
  children: any;
};

export const OnboardingSlide = ({
  className = '',
  children,
}: OnboardingSlideProps) => {
  const [mouse, setMouse] = useState<{
    y: number;
    x: number;
    visible: boolean;
  }>({
    y: 0,
    x: 0,
    visible: false,
  });

  return (
    <div
      className={`swiper-slide-image${className ? ' ' + className : ''}`}
      onMouseMove={(e) => {
        setMouse({
          // @ts-ignore
          x: e.nativeEvent.layerX,
          // @ts-ignore
          y: e.nativeEvent.layerY,
          visible: true,
        });
      }}
      onMouseLeave={() => {
        setMouse({ x: mouse.x, y: mouse.y, visible: false });
      }}
    >
      <div
        className={`shadow ${mouse.visible ? 'in' : 'out'}`}
        style={{
          top: mouse.y,
          left: mouse.x,
        }}
      />

      {children}
    </div>
  );
};
