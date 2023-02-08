import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const BeTheFirst = () => {
  return (
    <div className='be-first expand row middle between'>
      <div className='description expand'>
        <SectionHead
          title='Be The First'
          description='Invest in the world’s first decentralised esports team. Coming soon.'
        />
        <div className='row btn-container'>
          <ButtonSecondary label='Get whitelisted' />
        </div>
      </div>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.esports.sparkles}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.esports.flames}
          factorX={0.3}
          factorY={0.3}
          speed={0}
          className='parallaxed-2'
        />
      </ObserverContainer>
    </div>
  );
};
