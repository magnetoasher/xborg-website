import React from "react";
import ReactSlider from "react-slider";

type SliderInputType = {
  min: number;
  max: number;
  error?: string;
  onChange: (value: number) => void;
  defaultValue?: number;
};

export const SliderInput = (props: SliderInputType) => {
  const { error, min, max, defaultValue } = props;

  return (
    <div className={`input-wrapper${error ? " has-error" : ""}`}>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={defaultValue}
        max={max}
        min={min}
        onAfterChange={props.onChange}
      />
    </div>
  );
};
