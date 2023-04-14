import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const TheLeague = () => {
  const titleRef = useRef(null);

  const textVM = new TextManipulation();
  return (
    <div className={`the-league expand row column`}>
      <div className="expand row middle between">
        <div className="description expand">
          <div className="section-head-container">
            <div className="row section-head">
              <div className="section-border"></div>
              <div className="row column expand">
                <img src={Images.logo.default} alt="The League We Need" />
                <h2 className="section-head-title">
                  <span ref={titleRef}>The League</span>
                  <br />
                  We Need
                </h2>
              </div>
            </div>
            <SectionDescription
              className="section-head-desc"
              onAnimateIn={() => textVM.scrambleText(titleRef)}
            >
              A high-stakes, live production, multi-game esports competition.
            </SectionDescription>
          </div>
        </div>
        <ObserverContainer className="parallaxed expand">
          <ParallaxLayer
            image={Images.XCS.sasakki}
            factorX={0.3}
            factorY={-0.3}
            speed={0}
            isBase
            className="parallaxed-1"
          />
          <div className="line" />
          <ParallaxLayer
            image={Images.XCS.shado}
            factorX={-0.3}
            factorY={0.4}
            speed={0}
            className="parallaxed-2"
          />
        </ObserverContainer>
      </div>
      <div className="expand powered-by">
        <div className="title">
          <span>Powered by</span> leading organizations
        </div>
        <ObserverContainer className="partners row middle between">
          <img src={Images.XCS.swissborg} alt="Swissborg" />
          <img src={Images.XCS.brave} alt="Brave" />
          <img src={Images.XCS.communitygaming} alt="Community Gaming" />
          {/* <img src={Images.XCS.gala} alt='Gala Games' /> */}
        </ObserverContainer>
      </div>
    </div>
  );
};
