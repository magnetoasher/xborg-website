import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const BecomeXplorer = () => {
  return (
    <div className='become-xplorer expand row middle'>
      <div className='description'>
        <SectionHead
          title='Become An Xplorer'
          description='Love what we do? Join us! Pick up your Prometheus NFT to fully benefit from everything we have to offer.'
        />
        <div className='row btn-container'>
          <ButtonSecondary label='Buy Now' />
        </div>
      </div>
      <ObserverContainer className='parallaxed-corner'>
        <ParallaxLayer
          image={Images.aboutUs.smoke01}
          factorX={-0.2}
          factorY={-0.2}
          speed={0}
        />
        <ParallaxLayer
          image={Images.aboutUs.smoke02}
          factorX={-0.1}
          factorY={-0.1}
          speed={0}
        />
        <ParallaxLayer
          image={Images.aboutUs.logo01}
          factorX={-0.5}
          factorY={-0.5}
          speed={5}
        />
        <ParallaxLayer
          image={Images.aboutUs.render3d_01}
          factorX={-0.4}
          factorY={0}
          speed={0}
          isBase
        />
        <ParallaxLayer
          image={Images.aboutUs.sparks01}
          factorX={-0.8}
          factorY={0}
          speed={0}
        />
      </ObserverContainer>
    </div>
  );
};
