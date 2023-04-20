import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  Countdown,
  ObserverContainer,
  ParallaxLayer,
  SectionHead,
} from "../../../../components";

export const Token = () => {
  return (
    <div className="token expand row middle between">
      <div className="description">
        <SectionHead title="XBorg Token" beforeTitle="XBorg Protocol">
          <p className="lexend-body-m">
            The native utility token of the XBorg protocol serves as the primary
            means of transaction within the ecosystem.
          </p>
        </SectionHead>

        <div className="typography">
          <div className="lexend-body-xl ul-title">Utility</div>
          <ul className="lexend-body-m">
            <li>In-app payments & platform fees</li>
            <li>Governance rights</li>
            <li>Staking & reward pools</li>
            <li>Protocol access</li>
          </ul>

          <p className="lexend-body-xs2">Early interest form closes in:</p>
          <Countdown date={new Date("2023/04/24")} />

          <div className="row">
            <ButtonSecondary label="Participate in the seed round" to="/seed" />
          </div>
        </div>
      </div>

      <ObserverContainer className="parallaxed row column middle center">
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
