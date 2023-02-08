import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const EmpowerFans = () => {
  return (
    <div className={`empower-fans expand row middle between`}>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.aboutUs.confetti}
          factorX={0.1}
          factorY={0.1}
          speed={-2}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.aboutUs.megaphone}
          factorX={0.2}
          factorY={0.2}
          speed={-7}
        />
      </ObserverContainer>

      <div className='description expand'>
        <SectionHead
          title='We Empower Fans'
          description='We believe that fans should be able to invest in esports teams, vote on key decisions, and earn from their contributions.'
        />
      </div>
    </div>
  );
};
