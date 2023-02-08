import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const OnlyTheBest = () => {
  return (
    <div className='only-the-best expand row middle between'>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.launchpad.folder}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='Only The Best'
          description='Our investment team hand-picks the highest quality GameFi projects.'
        />
      </div>
    </div>
  );
};
