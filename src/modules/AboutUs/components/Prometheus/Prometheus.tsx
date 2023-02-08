import { Images } from "../../../../assets/imgs/Images";
import { ButtonSecondary, SectionHead } from "../../../../components";
import { ParallaxLayer, ObserverContainer } from "../../../../components";

export const Prometheus = () => {
  return (
    <div className={`prometheus expand row middle between`}>
      <ObserverContainer className='parallaxed expand row middle center'>
        <ParallaxLayer
          image={Images.aboutUs.logo02}
          factorX={-0.1}
          factorY={-0.1}
          speed={7}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.aboutUs.smoke1_01}
          factorX={-0.2}
          factorY={-0.1}
          speed={3}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.aboutUs.smoke1_02}
          factorX={-0.1}
          factorY={-0.3}
          speed={3}
          className='parallaxed-3'
        />
        <ParallaxLayer
          image={Images.aboutUs.render3d}
          factorX={-0.4}
          factorY={-0.3}
          speed={0}
          className='parallaxed-4'
        />
        <ParallaxLayer
          image={Images.aboutUs.sparks}
          factorX={-0.3}
          factorY={-0.3}
          speed={-2}
          className='parallaxed-5'
        />
      </ObserverContainer>
      <div className='description expand'>
        <SectionHead
          title='Prometheus NFT'
          description='Shape the future of gaming and experience the XBorg ecosystem to the fullest.'
        />

        <h4 className='subtitle'>Exclusive Benefits</h4>
        <div className='typography'>
          <ul>
            <li>Vested $XBORG token airdrop at token generation event</li>
            <li>Fee-less and early access to all XBorg products</li>
            <li>XBorg DAO governance</li>
            <li>Launchpad Premium</li>
          </ul>
        </div>

        <div className='row btn-container'>
          <ButtonSecondary label='Buy Now' />
        </div>
      </div>
    </div>
  );
};
