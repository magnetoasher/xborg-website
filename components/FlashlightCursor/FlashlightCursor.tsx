interface IFlashlightCursor {
  isActive: boolean;
  position: {
    top: number;
    left: number;
  };
}

export const FlashlightCursor = ({ isActive, position }: IFlashlightCursor) => {
  return (
    <div
      className={`shadow ${isActive ? 'in' : 'out'}`}
      style={{
        top: `${position?.top}px`,
        left: `${position?.left}px`,
      }}
    />
  );
};
