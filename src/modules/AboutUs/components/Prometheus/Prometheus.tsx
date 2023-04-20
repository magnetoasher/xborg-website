import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  SectionHead,
} from "../../../../components";

export const Prometheus = () => {
  return (
    <div className="prometheus expand row middle between">
      <div className="description">
        <SectionHead beforeTitle="XBorg Protocol" title="Prometheus NFT">
          <p className="lexend-body-m">
            Shape the future of gaming and experience the XBorg ecosystem to the
            fullest.
          </p>
        </SectionHead>

        <div className="typography">
          <div className="lexend-body-xl ul-title">Benefits</div>
          <ul className="lexend-body-m">
            <li>In-app payments & platform fees</li>
            <li>Governance rights</li>
            <li>Staking & reward pools</li>
            <li>Protocol access</li>
          </ul>

          <div className="row middle actions">
            <ButtonPrimary
              label="Purchase a Prometheus NFT"
              to="https://opensea.io/collection/xborg-prometheus"
              target="_blank"
            />
            <ButtonSecondary label="See all perks" to="prometheus" />
          </div>
        </div>
      </div>

      <ObserverContainer className="parallaxed row middle center">
        <ParallaxLayer
          image={Images.aboutUs.logo02}
          factorX={-0.1}
          factorY={-0.1}
          speed={7}
          isBase
          className="parallaxed-1"
        />
        <ParallaxLayer
          image={Images.aboutUs.smoke1_01}
          factorX={-0.2}
          factorY={-0.1}
          speed={3}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.aboutUs.smoke1_02}
          factorX={-0.1}
          factorY={-0.3}
          speed={3}
          className="parallaxed-3"
        />
        <ParallaxLayer
          image={Images.aboutUs.render3d}
          factorX={-0.4}
          factorY={-0.3}
          speed={0}
          className="parallaxed-4"
        />
        <ParallaxLayer
          image={Images.aboutUs.sparks}
          factorX={-0.3}
          factorY={-0.3}
          speed={-2}
          className="parallaxed-5"
        />
      </ObserverContainer>
    </div>
  );
};
