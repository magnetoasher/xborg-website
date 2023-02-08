import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Images } from "../../assets/imgs/Images";
import { GlobalState } from "../../reducer";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";
import { TextScramble } from "../../viewmodels/TextScramble";

export type SectionHeadType = {
  title: string;
  description?: string;
  children?: any;
};

export const SectionHead = ({
  title,
  description,
  children,
}: SectionHeadType) => {
  const ref = useRef(null);
  const loaded = useSelector((state: GlobalState) => state.site.loaded);
  const [active, setActive] = useState<boolean>(false);
  const scrollVM = new ScrollViewModel();

  useEffect(() => {
    if (ref.current && loaded) {
      scrollVM.isInViewPortObserver(ref.current, callbackIn, callbackOut);
    }
  }, [loaded]);

  function callbackIn() {
    setActive(true);

    if (!children) {
      const scramble = new TextScramble(ref.current as unknown as HTMLElement);
      scramble.setText(title);
    }
  }

  function callbackOut() {
    setActive(false);
  }

  return (
    <div className={`section-head-container ${active ? "in" : "out"}`}>
      <div className='row section-head'>
        <div className='section-border' />
        <div className='row column expand'>
          <img src={Images.logo.default} alt={title} />
          {!children ? (
            <h2 className='section-head-title'>
              <div className='base'>{title}</div>
              <div className='scramble' ref={ref}>
                {title}
              </div>
            </h2>
          ) : (
            <h2 className='section-head-title' ref={ref}>
              {children}
            </h2>
          )}
        </div>
      </div>
      {description && <p className='section-head-desc'>{description}</p>}
    </div>
  );
};
