import { Images } from "../../../../assets/imgs/Images";
import {
  CountUpAnimation,
  ObserverContainer,
  ParallaxLayer,
  SectionHead,
} from "../../../../components";

export const Protocol = () => {
  const data = {
    apps: 2,
    partners: 12,
    users: 10000,
  };

  return (
    <div className="protocol expand row middle between">
      <div className="description">
        <SectionHead
          title={
            <>
              An open and composable
              <br />
              <span>gaming protocol</span>
            </>
          }
          logo={Images.logofull}
        >
          <p className="lexend-body-m">
            A collaborative credential infrastructure on which games, brands and
            communities can build applications and engage with their players and
            fans.
          </p>

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
        </SectionHead>
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
