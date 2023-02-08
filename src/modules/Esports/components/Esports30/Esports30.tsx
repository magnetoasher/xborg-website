import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ParallaxLayer,
  ObserverContainer,
  SectionIntro,
} from "../../../../components";

export const Esports30 = () => {
  return (
    <div className={`esports30 expand row middle between`}>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.esports.trophy}
          factorX={-0.1}
          factorY={0.1}
          speed={0}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.esports.controller}
          factorX={-0.2}
          factorY={-0.2}
          speed={-5}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.esports.coin1}
          factorX={0.3}
          factorY={0.3}
          speed={-3}
          className='parallaxed-3'
        />
        <ParallaxLayer
          image={Images.esports.coin2}
          factorX={0.2}
          factorY={0.2}
          speed={-6}
          className='parallaxed-4'
        />
        <ParallaxLayer
          image={Images.esports.coin3}
          factorX={0.1}
          factorY={0.1}
          speed={-9}
          className='parallaxed-5'
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionIntro
          subtitle='Initial Team Offerings'
          title='ESPORTS 3.0'
          description='Become a co-owner, vote on key decisions, and earn as your esports team succeeds.'
        />
        <div className='row btn-container'>
          <ButtonSecondary label={"Get Whitelisted"} />
        </div>
      </div>
    </div>
  );
};
