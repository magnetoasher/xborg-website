import Tippy from "@tippyjs/react";
import ReactSlider from "react-slider";

type SliderInputType = {
  min: number;
  max: number;
  error?: string;
  onChange: (value: number) => void;
  defaultValue?: string;
};

export const SliderInput = (props: SliderInputType) => {
  const { error, min, max, defaultValue } = props;

  return (
    <div className={`input-wrapper${error ? " has-error" : ""}`}>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={min}
        step={1}
        max={max}
        onAfterChange={props.onChange}
        renderThumb={(props) => {
          return (
            <Tippy content={defaultValue} key={"thumb"}>
              <div {...props}></div>
            </Tippy>
          );
        }}
      />
    </div>
  );
};
