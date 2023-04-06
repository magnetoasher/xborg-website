import { useEffect, useRef, useState } from "react";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";

export const Forefront = () => {
  const childRef = useRef(null);
  const parentRef = useRef(null);
  const height = 411;
  const [active, setActive] = useState<number>(0);

  const appVM = new AppViewModel();

  useEffect(() => {
    if (childRef.current && parentRef.current) {
      appVM.stickyElement(
        parentRef.current as HTMLElement,
        childRef.current as HTMLElement,
        onScroll
      );
    }
  }, []);

  const onScroll = (scrolled: number) => {
    const scrollHeight = height * 5;
    const pos3 = scrollHeight / 1.6;
    const pos2 = scrollHeight / 3.6;

    if (scrolled > pos3) {
      setActive(2);
    } else if (scrolled > pos2) {
      setActive(1);
    } else {
      setActive(0);
    }
  };

  return (
    <div className="forefront row column middle center w-full">
      <div className="content">
        <h2 className="text-center">XBorg is at the forefront of gaming</h2>

        <div
          className="mock-height w-full"
          style={{ height: height * 6 }}
          ref={parentRef}
        >
          <div className={`key-points row state-${active}`} ref={childRef}>
            <div className="col expand">
              <div className="cube" />
              <div className="title">Breakthrough</div>
              <div className="desc">gaming protocol</div>
            </div>
            <div className="col expand">
              <div className="cube" />
              <div className="title">#1 web3</div>
              <div className="desc">gaming community</div>
            </div>
            <div className="col expand">
              <div className="cube" />
              <div className="title">Largest network</div>
              <div className="desc">of parters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
