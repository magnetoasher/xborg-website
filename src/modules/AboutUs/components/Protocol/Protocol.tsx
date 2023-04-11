import { useRef, useEffect } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  Alert,
  CountUpAnimation,
  ObserverContainer,
  ParallaxLayer,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";
import { TextScramble } from "../../../../viewmodels/TextScramble";

export const Protocol = () => {
  const descriptionRef = useRef(null);
  const titleScrambleRef = useRef(null);
  const data = {
    apps: 2,
    partners: 12,
    users: 10000,
  };

  const textVM = new TextManipulation();

  useEffect(() => {
    if (descriptionRef.current) textVM.breakText(descriptionRef.current);
  }, []);

  return (
    <div className={`protocol expand row middle between`}>
      <Alert text="Register for the upcoming seed round." to="seed" />
      <div className="description">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <div className="row column expand">
              <div className="logo-icon">
                <img src={Images.logofull} alt="" />
              </div>

              <h2 className="section-head-title">
                <span>An open and composable</span>
                <br />
                <strong ref={titleScrambleRef}>gaming protocol</strong>
              </h2>
            </div>
          </div>
          <SectionDescription
            className="section-head-desc"
            onAnimateIn={() => {
              const current =
                titleScrambleRef.current as unknown as HTMLDivElement;
              const scramble = new TextScramble(current);
              if (titleScrambleRef.current) scramble.setText(current.innerHTML);
            }}
          >
            A collaborative credential infrastructure on which games, brands and
            communities can build applications and engage with their players and
            fans.
          </SectionDescription>

          <div className="statistics row">
            <div className="col">
              <CountUpAnimation number={data.apps} className="stats-value" />

              <div className="stats-label">Live applications</div>
            </div>
            <div className="col">
              <CountUpAnimation
                number={data.partners}
                className="stats-value"
              />
              <div className="stats-label">Network partners</div>
            </div>
            <div className="col">
              <CountUpAnimation number={data.users} className="stats-value" />
              <div className="stats-label">Active protocol users</div>
            </div>
          </div>
        </div>
      </div>
      <ObserverContainer className="parallaxed">
        <ParallaxLayer
          image={Images.aboutUs.layer5}
          factorX={-0.2}
          factorY={-0.2}
          speed={0}
          className="parallaxed-5"
        />
        <ParallaxLayer
          image={Images.aboutUs.layer4}
          factorX={-0.15}
          factorY={-0.15}
          speed={0}
          className="parallaxed-4"
        />
        <ParallaxLayer
          image={Images.aboutUs.layer3}
          factorX={-0.1}
          factorY={-0.1}
          speed={0}
          className="parallaxed-3"
        />
        <ParallaxLayer
          image={Images.aboutUs.layer2}
          factorX={-0.1}
          factorY={-0.1}
          speed={0}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.aboutUs.layer1}
          factorX={-0.2}
          factorY={-0.2}
          speed={0}
          className="parallaxed-1"
          isBase
        />
      </ObserverContainer>
    </div>
  );
};
