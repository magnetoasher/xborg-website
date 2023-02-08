import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const GetStarted = () => {
  return (
    <div className={`get-started row middle center`}>
      <div className='description expand'>
        <SectionHead
          title='Get Started'
          description='View our current launchpad investment opportunities.'
        />
        <div className='row btn-container'>
          <ButtonSecondary label='Enter Launchpad' />
        </div>
      </div>
      <ObserverContainer className='parallaxed-corner'>
        <ParallaxLayer
          image={Images.launchpad.giaco}
          factorX={-0.1}
          factorY={0}
          speed={-6}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.launchpad.hanzo}
          factorX={0}
          factorY={0}
          speed={0}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.launchpad.robot}
          factorX={-0.2}
          factorY={0.2}
          speed={0}
          className='parallaxed-3'
        />
      </ObserverContainer>
    </div>
  );
};
