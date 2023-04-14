import { useState, useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  ButtonPrimary,
  Alert,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";
import { PickGame } from "../PickGame/PickGame";

export const BecomeLegend = () => {
  const scrambleRef = useRef(null);
  const [active, setActive] = useState<boolean>(false);

  const textVM = new TextManipulation();

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
            <div className="section-head-container">
              <div className="row">
                <div className="section-border"></div>
                <div className="row column">
                  <img src={Images.logo.default} alt="XCS" />
                  <div className="section-head-top" ref={scrambleRef}>
                    Become A Legend
                  </div>
                  <h1 className="section-head-title">XCS</h1>
                </div>
              </div>
              <SectionDescription
                className="section-head-desc"
                onAnimateIn={() => textVM.scrambleText(scrambleRef)}
              >
                Introducing the Xtreme Championship Series, the largest Web3
                esports event ever created.
              </SectionDescription>
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
    </div>
  );
};
