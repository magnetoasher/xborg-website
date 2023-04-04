import { useRef, useState, useEffect } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer } from "../../../../components";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const GameChangingProtocol = () => {
  const titleRef = useRef(null);
  const visionRef = useRef(null);
  const parentRef = useRef(null);
  const height = 411;
  const [active, setActive] = useState<number>(0);

  const appVM = new AppViewModel();
  const textVM = new TextManipulation();

  useEffect(() => {
    if (visionRef.current && parentRef.current) {
      appVM.stickyElement(
        parentRef.current as HTMLElement,
        visionRef.current as HTMLElement,
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
    <div className="game-changing-protocol w-full row column middle center">
      <h2 className="text-center">
        A <span ref={titleRef}>game-changing</span>
        <br />
        protocol
      </h2>

      <div
        className="mock-height w-full"
        style={{ height: height * 6 }}
        ref={parentRef}
      >
        <div className="vision-intro-parallaxed-container" ref={visionRef}>
          <ObserverContainer
            className="vision-intro-parallaxed row"
            onAnimateIn={() => textVM.scrambleText(titleRef)}
          >
            <div className="line-indicator" />
            <div className="row column middle vision-intro">
              <div
                className={`block block-first row middle center with-cube${
                  active == 0 ? " active" : ""
                }`}
              >
                <span>Credential Network</span>
                <div className="block-desc">
                  XBorg allows player to aggregate their gaming achievements,
                  esports reputation and social engagement to create their{" "}
                  <b>gaming identity</b>.
                </div>
              </div>
              <img src={Images.chevronDown} alt="chevron" className="chevron" />
              <div
                className={`block block-second row middle center with-cube${
                  active == 1 ? " active" : ""
                }`}
              >
                <span>Application Network</span>
                <div className="block-desc">
                  XBorg enables games, guilds, esports teams to create{" "}
                  <b>immersive experience</b> for players and fans using the
                  credential network.
                </div>
              </div>
              <img
                src={Images.chevronDown}
                alt="chevron"
                className="chevron chevron-second"
              />
              <div
                className={`block block-third row middle center with-cube${
                  active == 2 ? " active" : ""
                }`}
              >
                <span>Decentralized Societies</span>
                <div className="block-desc">
                  Decentralised Gaming Communities are next generation gaming
                  communities that are governed by their native token holders.
                  What if FaZe was decentralized?
                </div>
              </div>
            </div>
          </ObserverContainer>
        </div>
      </div>
    </div>
  );
};
