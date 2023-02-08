import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Images } from "../../assets/imgs/Images";
import { GlobalState } from "../../reducer";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";
import { TextScramble } from "../../viewmodels/TextScramble";

export type SectionIntroType = {
  title: string;
  subtitle: string;
  description?: string;
  animateIn?: boolean;
};

export const SectionIntro = ({
  title,
  subtitle,
  description,
}: SectionIntroType) => {
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
    const scramble = new TextScramble(ref.current as unknown as HTMLElement);
    scramble.setText(subtitle);
  }

  function callbackOut() {
    setActive(false);
  }

  return (
    <div className={`section-intro-container ${active ? "in" : "out"}`}>
      <div className='row section-intro'>
        <div className='section-border' />
        <div className='row column'>
          <img src={Images.logo.default} alt={title} />
          <div className='subtitle' ref={ref}>
            {subtitle}
          </div>
          <h1 className='section-intro-title'>{title}</h1>
        </div>
      </div>
      {description && <p className='section-intro-desc'>{description}</p>}
    </div>
  );
};
