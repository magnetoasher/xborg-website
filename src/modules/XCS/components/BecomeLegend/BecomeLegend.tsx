import { useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  ButtonPrimary,
  SectionHead,
} from "../../../../components";
import { PickGame } from "../PickGame/PickGame";

export const BecomeLegend = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={`become-legend expand row middle ${
        active ? "active" : "inactive"
      }`}
    >
      <ObserverContainer className="parallaxed expand row middle center">
        <ParallaxLayer
          image={Images.XCS.banner}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          className="parallaxed-1"
          isBase
        />
        <ParallaxLayer
          image={Images.XCS.banner_logo}
          factorX={0.2}
          factorY={0.2}
          speed={0}
          className="parallaxed-2"
        />
        <div className="blurred-circle" />
      </ObserverContainer>
      <div className="description expand">
        {active ? (
          <PickGame />
        ) : (
          <>
            <SectionHead beforeTitle="Become A Legend" title="XCS">
              <p className="lexend-body-m">
                Introducing the Xtreme Championship Series, the largest Web3
                esports event ever created.
              </p>
            </SectionHead>
            <div className="row btn-container">
              <ButtonPrimary
                label="Register for XCS"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(true);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
