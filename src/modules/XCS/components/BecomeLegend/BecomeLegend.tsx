import { useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  ButtonPrimary,
  Alert,
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
      <Alert text="Register for the upcoming seed round." to="seed" />
      <ObserverContainer className="parallaxed expand row middle center">
        <ParallaxLayer
          image={Images.XCS.banner}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
        />
        <ParallaxLayer
          image={Images.XCS.banner_logo}
          factorX={0.2}
          factorY={0.2}
          speed={0}
        />
      </ObserverContainer>
      <div className="description expand">
        {active ? (
          <PickGame />
        ) : (
          <>
            <div className="section-head-container">
              <div className="row">
                <div className="section-border"></div>
                <div className="row column">
                  <img src={Images.logo.default} alt="XCS" />
                  <div className="section-head-top">Become A Legend</div>
                  <h1 className="section-head-title">XCS</h1>
                </div>
              </div>
              <p className="section-head-desc">
                Introducing the Xtreme Championship Series, the largest Web3
                esports event ever created.
              </p>
            </div>
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

      <div className="blurred-circle" />
    </div>
  );
};
