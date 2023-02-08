import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const TheLeague = () => {
  return (
    <div className={`the-league expand row middle between`}>
      <div className='description expand'>
        <SectionHead
          title='The League We Need'
          description='A high-stakes, live production, multi-game esports competition.'
        />
      </div>
      <ObserverContainer className='parallaxed expand'>
        <ParallaxLayer
          image={Images.XCS.sasakki}
          factorX={0.3}
          factorY={-0.3}
          speed={0}
          isBase
          className='parallaxed-1'
        />
        <div className='line' />
        <ParallaxLayer
          image={Images.XCS.shado}
          factorX={-0.3}
          factorY={0.4}
          speed={0}
          className='parallaxed-2'
        />
      </ObserverContainer>
    </div>
  );
};
