import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  SectionDescription,
} from "../../../../components";

export const OpenToCommunity = () => {
  return (
    <div className="open-to-community row column middle center w-full">
      <div className="content">
        <h2 className="vista-heading text-center">
          Opening up to our <span>community</span>
        </h2>

        <SectionDescription className="text-center lexend-body-m">
          XBorg is proud to be home to the best players, builders and GameFi
          enthusiasts. This is why we are offering our community the opportunity
          to invest early in XBorg, alongside the best investors of the space.
        </SectionDescription>

        <div className="token-utility row between middle">
          <div className="typography">
            <div className="lexend-body-xl">XBG token utility</div>
            <ul className="lexend-body-m">
              <li>Governance rights</li>
              <li>Staking & reward pools</li>
              <li>Protocol access</li>
            </ul>

            <div className="row action">
              <ButtonSecondary label="Register interest" to="/seed" />
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
      </div>
    </div>
  );
};
