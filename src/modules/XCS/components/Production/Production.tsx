import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const Production = () => {
  return (
    <div className='production expand row middle'>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.XCS.movie}
          factorX={0.3}
          factorY={0.3}
          speed={0}
          isBase
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='World Class Production'
          description='Catch all of the action live from our esports studio.'
        />
      </div>
    </div>
  );
};
