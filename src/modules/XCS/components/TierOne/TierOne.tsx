import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const TierOne = () => {
  return (
    <div className={`tier-one expand row middle`}>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.XCS.erika}
          factorX={0.1}
          factorY={0.1}
          speed={-5}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.XCS.robo}
          factorX={0.3}
          factorY={0.3}
          speed={0}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.XCS.red_warrior}
          factorX={-0.1}
          factorY={-0.1}
          speed={0}
          className='parallaxed-3'
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='Tier 1 Esports'
          description='The biggest, most competitive Web3 games only.'
        />
      </div>
    </div>
  );
};
