import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  Progressbar,
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";
import { Countdown } from "../../../../components/Countdown";

export const PassportIntro = () => {
  return (
    <div className={`passport-intro expand row middle between`}>
      <div className='description'>
        <SectionHead
          title='Gaming Passport'
          description='Get rewarded for playing your favourite games.'
        />
        <div className='wave-details row between'>
          <div className='wave'>
            <div className='title'>Wave 1</div>
            <div className='subtitle'>Closed Beta</div>
          </div>
          <div className='spots'>
            <div className='title'>Spots Claimed</div>
            <div className='subtitle'>
              <span>524</span>/1000
            </div>
          </div>
        </div>
        <Progressbar progress={52} />
        <div className='wave-ends row middle center'>
          <div className='title'>First wave ends in:</div>
          <Countdown date={new Date("Jan 5, 2024 15:37:25")} />
        </div>

        <div className='row between middle actions'>
          <ButtonPrimary label='Get Early Access' />

          <div className='plus' />

          <div className='giveaways'>In-game assets giveaways</div>
        </div>
      </div>
      <ObserverContainer className='parallaxed-corner row end bottom'>
        <div className='triangle' />
        <ParallaxLayer
          image={Images.gamingpassport.aliens}
          factorX={-0.2}
          factorY={0.2}
          speed={0}
          isBase
          className='parallaxed-1'
        />
        <ParallaxLayer
          image={Images.gamingpassport.dark_swordsman}
          factorX={-0.1}
          factorY={0}
          speed={0}
          className='parallaxed-2'
        />
        <ParallaxLayer
          image={Images.gamingpassport.mage}
          factorX={0.1}
          factorY={0}
          speed={0}
          className='parallaxed-3'
        />
        <ParallaxLayer
          image={Images.gamingpassport.sparkles}
          factorX={-0.4}
          factorY={0}
          speed={0}
          className='parallaxed-4'
        />
      </ObserverContainer>
    </div>
  );
};
