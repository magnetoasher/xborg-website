import { useSelector } from "react-redux";
import { Images } from "../../../../assets/imgs/Images";
import {
  ObserverContainer,
  ParallaxLayer,
  SectionHead,
} from "../../../../components";
import { GlobalState } from "../../../../reducer";

export const Protocol = () => {
  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);

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
            fans. Currently raising funds from our community.
          </p>

          {/* <div className="row numbers">
            <div className="col">
              <div className="value">
                {seedSummary?.totalCapital
                  ? `$${formatNumberToK(seedSummary.totalCapital, 2)}`
                  : `$0`}
              </div>
              <div className="label lexend-body-m">Total soft commitment</div>
            </div>
            <div className="col">
              {seedSummary?.nbSubmissions && (
                <CountUpAnimation
                  className="value"
                  number={seedSummary?.nbSubmissions}
                />
              )}
              <div className="label lexend-body-m">Total submissions</div>
            </div>
          </div> */}
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
