import Tippy from "@tippyjs/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ReactSlider from "react-slider";
import { roundToNearest10 } from "../../helpers/inputs";
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
  const ref = useRef(null);

  const [scaledValue, setScaledValue] = useState<number>(defaultValue ?? 0);
  const [tooltipVisible, setTooltipVisibility] = useState<boolean>(false);

  const vm = new SeedViewModel(dispatch);

  const onValChange = (val: number) => {
    setScaledValue(vm.scaleSlider(val));
    onChange(val);
  };

  useEffect(() => {
    const target = ref.current as unknown as HTMLElement;
    if (target) {
      target.addEventListener("mouseover", () => setTooltipVisibility(true));
      target.addEventListener("mouseleave", () => setTooltipVisibility(false));
    }
  }, []);

  return (
    <div className={`input-wrapper${error ? " has-error" : ""}`} ref={ref}>
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
            <Tippy
              content={"$" + roundToNearest10(scaledValue).toLocaleString()}
              key={"thumb"}
              visible={tooltipVisible}
            >
              <div {...props}></div>
            </Tippy>
          );
        }}
      />
    </div>
  );
};
