import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ParallaxLayer,
  ObserverContainer,
  SectionIntro,
} from "../../../../components";

export const BecomeLegend = () => {
  return (
    <div className={`become-legend expand row middle`}>
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
        <SectionIntro
          subtitle='Become A Legend'
          title='XCS'
          description='Introducing the Xtreme Championship Series, the largest Web3 esports event ever.'
        />
        <div className='row btn-container'>
          <ButtonSecondary label='Get Notified' />
        </div>
      </div>

      <div className='blurred-circle' />
    </div>
  );
};
