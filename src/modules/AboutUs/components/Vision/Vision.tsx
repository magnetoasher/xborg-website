import { useRef, useState, useEffect } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { SectionDescription, ObserverContainer } from "../../../../components";
import { sleep } from "../../../../helpers/time";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { TextManipulation } from "../../../../viewmodels/textManipulation";
import { ApplicationNetwork } from "./ApplicationNetwork";
import { Block } from "./components/Block";
import { CredentialNetwork } from "./CredentialNetwork";
import { DecentralizedSocieties } from "./DecentralizedSocieties";

let activeSpotlight: number = 0;

export const Vision = () => {
  const titleScrambleRef = useRef(null);
  const childRef = useRef(null);
  const parentRef = useRef(null);

  const [active, setActive] = useState<number>(activeSpotlight);
  const [changing, setChanging] = useState<boolean>(false);

  const height = window.innerHeight;

  const appVM = new AppViewModel();
  const textVM = new TextManipulation();

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
    const pos5 = scrollHeight / 2;
    const pos4 = scrollHeight / 2.5;
    const pos3 = scrollHeight / 3;
    const pos2 = scrollHeight / 4;

    if (scrolled > pos5) {
      if (activeSpotlight !== 4) handleChanging(4);
    } else if (scrolled > pos4) {
      if (activeSpotlight !== 3) handleChanging(3);
    } else if (scrolled > pos3) {
      if (activeSpotlight !== 2) handleChanging(2);
    } else if (scrolled > pos2) {
      if (activeSpotlight !== 1) handleChanging(1);
    } else {
      if (activeSpotlight !== 0) handleChanging(0);
    }
  };

  const handleChanging = async (number: number) => {
    activeSpotlight = number;
    setChanging(true);

    await sleep(700);

    setActive(number);
    setChanging(false);
  };

  return (
    <div className="vision w-full expand">
      <div className="w-full vision-introduction">
        <div
          className="mock-height w-full"
          style={{ height: height * 4 }}
          ref={parentRef}
        >
          <div
            className={`vision-intro-parallaxed-container row middle between w-full ${
              changing ? "changing" : "static"
            } state-${active}`}
            ref={childRef}
          >
            <div className="description">
              <div className="section-head-container">
                <div className="row section-head">
                  <div className="section-border" />
                  <h2 className="section-head-title" ref={titleScrambleRef}>
                    Our vision
                  </h2>
                </div>
                <SectionDescription
                  className="section-head-desc"
                  onAnimateIn={() => textVM.scrambleText(titleScrambleRef)}
                >
                  A gaming world where creativity and innovation thrive and
                  every player has an equal opportunity to leave their mark. Our
                  mission is to empower players worldwide by increasing their
                  control over their data, so they can take ownership of their
                  experiences and the communities they belong to.
                </SectionDescription>
              </div>
            </div>

            <ObserverContainer className="vision-intro-parallaxed row">
              <div className="line-indicator" />
              <div className="row column vision-intro w-full">
                <Block
                  className="block-first"
                  descVisible={active == 1}
                  visible={active == 0 || active == 1}
                  active={
                    (active == 0 && changing == true) ||
                    (active == 1 && changing == false)
                  }
                  title="Credential Network"
                  desc="Network of gaming credentials using player statistics and social proof to establish skills and reputation."
                />
                {active == 1 && <CredentialNetwork />}
                {active == 0 && (
                  <img
                    src={Images.chevronDown}
                    alt="chevron"
                    className="chevron"
                  />
                )}
                <Block
                  className="block-second"
                  descVisible={active == 2 || active == 3}
                  visible={active == 0 || active == 2 || active == 3}
                  active={
                    (active == 1 && changing == true) ||
                    active == 2 ||
                    active == 3
                  }
                  title="Application Network"
                  desc="A set of interoperable applications that unlock new gaming and social experiences for players."
                />
                {active == 2 || active == 3 ? (
                  <ApplicationNetwork active={active} />
                ) : null}
                {active == 0 && (
                  <img
                    src={Images.chevronDown}
                    alt="chevron"
                    className="chevron chevron-second"
                  />
                )}
                <Block
                  className="block-third"
                  descVisible={false}
                  visible={active == 0 || active == 4}
                  active={false}
                  title="Decentralized Societies"
                  desc=""
                />
                {active == 4 && <DecentralizedSocieties />}
              </div>
            </ObserverContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
