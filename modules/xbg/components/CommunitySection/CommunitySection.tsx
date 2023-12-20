import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import { Images } from '@/assets/imgs';
import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';

export const CommunitySection = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="flex column start middle w-full community-section">
      <ObserverContainer className="flex column start middle ">
        <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
          Backed by the community
        </h2>
        <p className="lexend-body-sm l">
          As well as business angels from Yield Guild Games, Aave, Lens,
          ESL/FaceIt and France Esports.
        </p>
      </ObserverContainer>
      <BtnRed label="Register Interest" href="" className="lexend-body-md" />

      <div className="flex center middle cards-container">
        <div className="flex column center middle card-1">
          <p className="lexend-body-s">Raised over</p>
          <h2 className="integralfc-h2">$2 000 000</h2>
          <p className="lexend-body-md l">
            from our community during our XBG seed round
          </p>
          <Image
            src={Images.landing.sphere8}
            alt=""
            width={92}
            height={92}
            className="sphere sphere1"
          />
        </div>
        <Scene duration="100%" triggerHook="onEnter">
          <div className="flex column center top card-2">
            <p className="lexend-body-s">Raised over</p>
            <h2 className="integralfc-h2">200 ETH</h2>
            <p className="lexend-body-sm">
              during our Prometheus NFT sale which sold out{' '}
              <span>in 24 minutes</span>
            </p>

            <Image
              src={Images.xbg.smoke}
              alt=""
              width={500}
              height={250}
              className="smoke"
            />

            <Tween
              position="0"
              from={{
                x: '50%',
              }}
              to={{
                x: '0%',
              }}
            >
              <Image
                src={Images.landing.prometheus}
                alt=""
                width={326}
                height={250}
                className="prometheus"
              />
            </Tween>
          </div>
        </Scene>
      </div>
      <Image
        src={Images.landing.sphere9}
        alt=""
        width={92}
        height={92}
        className="sphere sphere2"
      />
    </div>
  );
};
