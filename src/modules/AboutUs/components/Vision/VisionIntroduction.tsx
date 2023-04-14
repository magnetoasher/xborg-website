import { useEffect, useRef, useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionDescription } from "../../../../components";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { TextScramble } from "../../../../viewmodels/TextScramble";

let activeSpotlight: number = 0;

export const VisionIntroduction = () => {
  const titleScrambleRef = useRef(null);
  const childRef = useRef(null);
  const parentRef = useRef(null);

  const [active, setActive] = useState<number>(activeSpotlight);
  const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 992);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [changing, setChanging] = useState<boolean>(false);

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
    }
  }, []);

  const onScroll = (scrolled: number) => {
    const scrollHeight = height * 5;
    const pos4 = scrollHeight / 1.6;
    const pos3 = scrollHeight / 2.6;
    const pos2 = scrollHeight / 3.6;

    if (scrolled > pos4) {
      if (activeSpotlight !== 3) handleChanging(3);
    } else if (scrolled > pos3) {
      if (activeSpotlight !== 2) handleChanging(2);
    } else if (scrolled > pos2) {
      if (activeSpotlight !== 1) handleChanging(1);
    } else {
      if (activeSpotlight !== 0) handleChanging(0);
    }
  };

  const handleChanging = (number: number) => {
    setChanging(true);

    setTimeout(() => {
      activeSpotlight = number;
      setActive(number);
    }, 700);

    setTimeout(() => {
      setChanging(false);
    }, 800);
  };

  return (
    <div className="w-full vision-introduction">
      <div
        className="mock-height w-full"
        style={{ height: height * 6 }}
        ref={parentRef}
      >
        <div
          className="vision-intro-parallaxed-container row middle between w-full"
          ref={childRef}
        >
          <div className="description">
            <div className="section-head-container">
              <div className="row section-head">
                <div className="section-border" />
                <h2 className="section-head-title" ref={titleScrambleRef}>
                  Our vision {active}
                </h2>
              </div>
              <SectionDescription
                className="section-head-desc"
                onAnimateIn={() => {
                  const current =
                    titleScrambleRef.current as unknown as HTMLDivElement;
                  const scramble = new TextScramble(current);
                  if (titleScrambleRef.current)
                    scramble.setText(current.innerHTML);
                }}
              >
                A gaming world where creativity and innovation thrive and every
                player has an equal opportunity to leave their mark. Our mission
                is to empower players worldwide by increasing their control over
                their data, so they can take ownership of their experiences and
                the communities they belong to.
              </SectionDescription>
            </div>
          </div>

          <ObserverContainer className="vision-intro-parallaxed row">
            <div className="line-indicator" />
            <div className="row column middle vision-intro">
              <div className="block block-first row middle center with-cube">
                Credential Network
              </div>
              <img src={Images.chevronDown} alt="chevron" className="chevron" />
              <div className="block block-second row middle center">
                Application Network
              </div>
              <img
                src={Images.chevronDown}
                alt="chevron"
                className="chevron chevron-second"
              />
              <div className="block block-third row middle center with-cube">
                Decentralized Societies
              </div>
            </div>
          </ObserverContainer>
        </div>
      </div>
    </div>
  );
};
