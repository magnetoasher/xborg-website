import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
} from "../../../../components";
import { Countdown } from "../../../../components/Countdown";

export const Token = () => {
  return (
    <div className={`token expand row middle between`}>
      <div className="description">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <div className="row column expand">
              <div className="section-head-top">XBorg Protocol</div>

              <h2 className="section-head-title">
                <span>XBorg Token</span>
              </h2>
            </div>
          </div>
          <p className="section-head-desc">
            The native utility token of the XBorg protocol serves as the primary
            means of transaction within the ecosystem.
          </p>
        </div>

        <div className="typography">
          <h4>Utility</h4>
          <ul>
            <li>In-app payments & platform fees</li>
            <li>Governance rights</li>
            <li>Staking & reward pools</li>
            <li>Protocol access</li>
          </ul>

          <p>Early interest form closes in:</p>
          <Countdown date={new Date("2024/01/01")} />

          <div className="row">
            <ButtonSecondary label="Participate in the Seed Round" />
          </div>
        </div>
      </div>

      <ObserverContainer className="parallaxed expand row column middle center">
        <ParallaxLayer
          image={Images.aboutUs.token}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
          className="parallaxed-1"
        />
      </ObserverContainer>
    </div>
  );
};
