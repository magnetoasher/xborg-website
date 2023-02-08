import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const HaveYourSay = () => {
  return (
    <div className='have-your-say expand row middle center'>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.esports.tshirt1}
          factorX={0.2}
          factorY={0.2}
          speed={0}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.esports.tshirt1_design}
          factorX={0.2}
          factorY={0.2}
          speed={0}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.esports.tshirt1_number}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          className='parallaxed-3'
        />
        <ParallaxLayer
          image={Images.esports.tshirt2}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          className='parallaxed-4'
        />
        <ParallaxLayer
          image={Images.esports.tshirt2_design}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          className='parallaxed-5'
        />
        <ParallaxLayer
          image={Images.esports.tshirt2_number}
          factorX={0.05}
          factorY={0.05}
          speed={0}
          className='parallaxed-6'
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='Have Your Say'
          description='Vote on key decisions through a built in governance system.'
        />
      </div>
    </div>
  );
};
