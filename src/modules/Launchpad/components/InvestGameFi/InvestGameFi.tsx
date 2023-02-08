import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ParallaxLayer,
  ObserverContainer,
  SectionIntro,
} from "../../../../components";

export const InvestGameFi = () => {
  return (
    <div className={`invest-gamefi expand row middle between`}>
      <div className='description expand'>
        <SectionIntro
          subtitle='Invest In GameFi'
          title='Launchpad'
          description='Benefit as your esports team succeeds through a built-in profit share system.'
        />
        <div className='row btn-container'>
          <ButtonSecondary label='Enter Launchpad' />
        </div>
      </div>
      <ObserverContainer className='parallaxed expand'>
        <ParallaxLayer
          image={Images.launchpad.bowman}
          factorX={0.1}
          factorY={0.1}
          speed={-3}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.launchpad.terrorist}
          factorX={0.2}
          factorY={0.2}
          speed={-7}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.launchpad.tft_penguin}
          factorX={-0.1}
          factorY={-0.1}
          speed={0}
          className='parallaxed-3'
        />
      </ObserverContainer>
    </div>
  );
};
