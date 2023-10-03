export type ProgressbarType = {
  progress: number;
  className?: string;
};

export const Progressbar = ({ progress, className }: ProgressbarType) => {
  return (
    <div className={`progressbar${className ? ' ' + className : ''}`}>
      <div className="progress-container">
        <div
          className="progress"
          style={{
            width: progress + '%',
          }}
        />
        <div className="progress-text"></div>
      </div>
    </div>
  );
};
