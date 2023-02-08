import { useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionIntro,
  ButtonPrimary,
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
      <ObserverContainer className='parallaxed expand row middle center'>
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
      <div className='description expand'>
        {active ? (
          <PickGame />
        ) : (
          <>
            <SectionIntro
              subtitle='Become A Legend'
              title='XCS'
              description='Introducing the Xtreme Championship Series, the largest Web3 esports event ever.'
            />
            <div className='row btn-container'>
              <ButtonPrimary
                label='Register for XCS'
                onClick={() => setActive(true)}
              />
            </div>
          </>
        )}
      </div>

      <div className='blurred-circle' />
    </div>
  );
};
