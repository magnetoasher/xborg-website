import { useEffect, useRef, useState } from "react";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";

export const Forefront = () => {
  const childRef = useRef(null);
  const parentRef = useRef(null);
  const [active, setActive] = useState<number>(0);
  const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 992);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const appVM = new AppViewModel();

  useEffect(() => {
    if (childRef.current && parentRef.current) {
      const parent = parentRef.current as HTMLElement;
      const child = childRef.current as HTMLElement;
      appVM.stickyElement(
        parent,
        child,
        window.innerHeight,
        onScroll,
        setHeight,
        setMobile
      );

      return () => {
        appVM.removeStickyElement(parent, child, 0, 0);
        setActive(0);
      };
    }
  }, []);

  const onScroll = (scrolled: number) => {
    const scrollHeight = height * 2;
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
        <h2 className="vista-heading text-center">
          XBorg is at the <span>forefront of gaming</span>
        </h2>

        <div
          className="mock-height w-full"
          style={{ height: height * 2 }}
          ref={parentRef}
        >
          <div className={`key-points row state-${active}`} ref={childRef}>
            <div className="col expand">
              <div className="cube" />
              <div className="title lexend-heading-l">Breakthrough</div>
              <div className="desc">gaming protocol</div>
            </div>
            <div className="col expand">
              <div className="cube" />
              <div className="title lexend-heading-l">#1 web3</div>
              <div className="desc">gaming community</div>
            </div>
            <div className="col expand">
              <div className="cube" />
              <div className="title lexend-heading-l">Largest network</div>
              <div className="desc">of partners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
