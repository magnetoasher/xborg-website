import Tippy from "@tippyjs/react";
import { debounce, throttle } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { AppDispatch } from "../../store";
import { SeedViewModel } from "../../viewmodels/SeedViewModel";

type SliderInputType = {
  min: number;
  max: number;
  error?: string;
  onChange: (value: number) => void;
  defaultValue?: number;
};

export const SliderInput = ({
  error,
  min,
  max,
  onChange,
  defaultValue,
}: SliderInputType) => {
  const dispatch = useDispatch<AppDispatch>();
  const vm = new SeedViewModel(dispatch);
  const [scaledValue, setScaledValue] = useState<number>(defaultValue ?? 0);

  const onValChange = (val: number) => {
    setScaledValue(vm.scaleSlider(val));
    onChange(val);
  };

  return (
    <div className={`input-wrapper${error ? " has-error" : ""}`}>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={min}
        step={1}
        max={max}
        onChange={onValChange}
        renderThumb={(props) => {
          return (
            <Tippy content={"$" + scaledValue.toLocaleString()} key={"thumb"}>
              <div {...props}></div>
            </Tippy>
          );
        }}
      />
    </div>
  );
};
