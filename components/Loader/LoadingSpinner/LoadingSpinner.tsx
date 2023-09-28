import React from 'react';

export type LoadingSpinnerProps = {
  size?: 'big' | 'small' | 'xsmall';
};

export const LoadingSpinner = ({ size = 'small' }: LoadingSpinnerProps) => {
  return <div className={`loading-spinner ${size}`}></div>;
};
