'use client';
import { useState } from 'react';
import { FlashlightCursor } from '@/components/FlashlightCursor';

interface IFlashlightCursorWrapper
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const FlashlightCursorWrapper = ({
  className,
  children,
  ...restProps
}: IFlashlightCursorWrapper) => {
  const [isMouseOverCard, setIsMouseOverCard] = useState(false);
  const [cursorRelativePosition, setCursorRelativePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = () => {
    setIsMouseOverCard(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOverCard(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursorRelativePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      className={`flashlight-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...restProps} // Spread additional props for the div element
    >
      <FlashlightCursor
        isActive={isMouseOverCard}
        position={{
          top: cursorRelativePosition.y,
          left: cursorRelativePosition.x,
        }}
      />
      {children}
    </div>
  );
};
