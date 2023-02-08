import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const IntegratedExperience = () => {
  return (
    <div className='integrated-experience expand row middle between'>
      <div className='description expand'>
        <SectionHead
          title='An Integrated Experience'
          description='Connect with professional players and other like-minded fans via an interactive app.'
        />
      </div>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.esports.phone}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
        />
      </ObserverContainer>
    </div>
  );
};
