import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const TheLeague = () => {
  return (
    <div className="the-league expand row column">
      <div className="expand row middle between">
        <div className="description expand">
          <SectionHead
            title={
              <>
                The League
                <br />
                <span>We Need</span>
              </>
            }
            logo={Images.logo.default}
            smallerHeading
          >
            <p className="lexend-body-m">
              A high-stakes, live production, multi-game esports competition.
            </p>
          </SectionHead>
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
        </ObserverContainer>
      </div>
    </div>
  );
};
