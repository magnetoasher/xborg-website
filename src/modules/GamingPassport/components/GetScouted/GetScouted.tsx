import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const GetScouted = () => {
  return (
    <div className={`get-scouted expand row middle between`}>
      <div className='description expand'>
        <SectionHead
          title='Get Scouted'
          description='Your Gaming Passport makes it easy for you to get noticed by esports teams, brands, and content creators.'
        />
      </div>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.gamingpassport.scout}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
        />
      </ObserverContainer>
    </div>
  );
};
