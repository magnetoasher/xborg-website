import React from "react";
import ReactSlider from "react-slider";

type SliderInputType = {
  min: number;
  max: number;
  error?: string;
  onChange: (value: number) => void;
};

export const SliderInput = (props: SliderInputType) => {
  const { error, min, max } = props;

  return (
    <div className={`input-wrapper${error ? " has-error" : ""}`}>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        max={max}
        min={min}
        onAfterChange={props.onChange}
      />
    </div>
  );
};
