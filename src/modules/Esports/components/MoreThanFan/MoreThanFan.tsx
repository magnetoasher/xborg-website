import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const MoreThanFan = () => {
  return (
    <div className='more-than-fan expand row middle between'>
      <div className='description expand'>
        <SectionHead
          title='More Than A Fan'
          description='Own a piece of your favourite esports team by investing in Initial Team Offerings.'
        />
      </div>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.esports.rectangle}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.esports.rectangle2}
          factorX={0.3}
          factorY={0.3}
          speed={-4}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.esports.rectangle3}
          factorX={0.5}
          factorY={0.5}
          speed={-8}
          className='parallaxed-3'
        />
      </ObserverContainer>
    </div>
  );
};
