import { ObserverContainer } from "../ObserverContainer";

export type ProgressbarType = {
  progress: number;
};

export const Progressbar = ({ progress }: ProgressbarType) => {
  return (
    <ObserverContainer className='progressbar'>
      <div
        className='progress'
        style={{
          width: progress + "%",
        }}
      />
      <div className='progress-text'>{progress}%</div>
    </ObserverContainer>
  );
};
