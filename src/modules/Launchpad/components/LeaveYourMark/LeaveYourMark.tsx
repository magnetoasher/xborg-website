import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const LeaveYourMark = () => {
  return (
    <div className='leave-your-mark expand row middle between'>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.launchpad.flask}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='Leave Your Mark'
          description='Share your feedback and play an integral role in the development of games.'
        />
      </div>
    </div>
  );
};
