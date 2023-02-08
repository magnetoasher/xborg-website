import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const EarnYourShare = () => {
  return (
    <div className='earn-your-share expand row middle between'>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.esports.eth_blocks}
          factorX={0.3}
          factorY={0.3}
          speed={0}
          isBase
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.esports.eth}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          className='parallaxed-1'
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='Earn Your Share'
          description='Benefit as your esports team succeeds through a built-in profit share system.'
        />
      </div>
    </div>
  );
};
