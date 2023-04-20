import { useRef, useState, useEffect } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { SectionDescription } from "../../../../components";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";

let activeTab = 0;
export const WhyNow = () => {
  const childRef = useRef(null);
  const parentRef = useRef(null);

  const [active, setActive] = useState<number>(activeTab);
  const [changing, setChanging] = useState<boolean>(false);
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
    }
  }, []);

  const onScroll = (scrolled: number) => {
    const scrollHeight = height * 5;
    const pos3 = scrollHeight / 1.6;
    const pos2 = scrollHeight / 3.6;

    if (scrolled > pos3) {
      if (activeTab !== 2) handleChange(2);
    } else if (scrolled > pos2) {
      if (activeTab !== 1) handleChange(1);
    } else {
      if (activeTab !== 0) handleChange(0);
    }
  };

  const handleChange = (number: number) => {
    setChanging(true);

    setTimeout(() => {
      activeTab = number;
      setActive(number);
      setChanging(false);
    }, 400);
  };

  return (
    <div className="whynow row column middle center">
      <div className="content">
        <h2 className="vista-heading text-center">
          <span>Why now</span> is a good time?
        </h2>

        <div
          className="mock-height"
          style={{ height: height * 6 }}
          ref={parentRef}
        >
          <div className="content row between middle" ref={childRef}>
            <div className={`content-tabs${changing ? " changing" : ""}`}>
              <div
                className={`single-tab row middle${
                  active == 0 ? " active" : ""
                }`}
              >
                <img src={Images.invest.graph} alt="" />
                <span className="tab-title lexend-body-m">
                  <b>Web3</b> going mainstream
                </span>

                {active == 0 || mobile == true ? (
                  <SectionDescription className="content-desc lexend-heading-s">
                    Prominent game developers and studios, including but not
                    limited to Epic Games, Enix Games, and Ubisoft, are
                    proactively allocating resources towards the integration and
                    adoption of Web3 games and blockchain technology. Our
                    partnership with TeamBDS is another proof that traditional
                    esports players are ready to embrace web3’s innovation.
                  </SectionDescription>
                ) : null}
              </div>
              <div
                className={`single-tab row middle${
                  active == 1 ? " active" : ""
                }`}
              >
                <img src={Images.invest.medal} alt="" />
                <span className="tab-title lexend-body-m">
                  <b>Leading</b> positioning in the space
                </span>

                {active == 1 || mobile == true ? (
                  <SectionDescription className="content-desc lexend-heading-s">
                    We are positioning ourselves as the #1 infrastructure
                    provider for esports teams leveraging blockchain technology.
                    With a first-mover advantage and an extensive network of
                    partners, XBorg has the resources, network and partners to
                    achieve its vision.
                  </SectionDescription>
                ) : null}
              </div>
              <div
                className={`single-tab row middle${
                  active == 2 ? " active" : ""
                }`}
              >
                <img src={Images.invest.coins} alt="" />
                <span className="tab-title lexend-body-m">
                  Interest from <b>leading VCs</b>
                </span>

                {active == 2 || mobile == true ? (
                  <SectionDescription className="content-desc lexend-heading-s">
                    In addition to the community round, XBorg is also raising
                    funds from well-known venture capitalists in the industry.
                    As we have always taken a community-centric approach,
                    allocating a portion of this round aligns with our mission
                    to build alongside our historical core contributors while
                    also welcoming new ones.
                  </SectionDescription>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
