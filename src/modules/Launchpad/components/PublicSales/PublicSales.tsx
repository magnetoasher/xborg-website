import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const PublicSales = () => {
  return (
    <div className={`public-sales expand row middle between `}>
      <div className='description expand'>
        <SectionHead
          title='Forget Public Sales'
          description='Access investment opportunities at their earliest stages.'
        />
      </div>
      <ObserverContainer className='parallaxed expand row middle end'>
        <ParallaxLayer
          image={Images.launchpad.bolt}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
          className='parallaxed-1'
        />
      </ObserverContainer>
    </div>
  );
};
