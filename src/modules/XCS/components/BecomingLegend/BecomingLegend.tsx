import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const BecomingLegend = () => {
  return (
    <div className={`becoming-legend expand row middle between`}>
      <div className='description expand'>
        <SectionHead
          title='Becoming A Legend'
          description='A 14 episode docu-series with behind the scenes drama, match-day highlights, and exclusive interviews.'
        />
      </div>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.XCS.camera}
          factorX={0.3}
          factorY={0.3}
          speed={0}
          isBase
          className='parallaxed-1'
        />
      </ObserverContainer>
    </div>
  );
};
