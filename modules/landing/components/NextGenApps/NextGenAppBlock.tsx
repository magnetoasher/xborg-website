import { ObserverContainer } from '@/components/ObserverContainer';
import { useState } from 'react';

export type NextGenAppBlockProps = {
  className?: string;
  children: any;
};

export const NextGenAppBlock = ({
  className = '',
  children,
}: NextGenAppBlockProps) => {
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
    <ObserverContainer className="block-container">
      <div
        className={`block${className ? ' ' + className : ''}`}
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
    </ObserverContainer>
  );
};
