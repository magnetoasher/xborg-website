import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

export const NextGenGaming = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-next-gen-gaming">
      <div className="container">
        <Scene duration="400%" triggerHook="onEnter">
          <Tween
            position="0"
            from={{
              y: -200,
            }}
            to={{
              y: 200,
            }}
          >
            <div className="parallax-token">
              <Image
                src={Images.landing.token_blur}
                alt=""
                width={33}
                height={47}
              />
            </div>
          </Tween>
        </Scene>

        <ObserverContainer className="flex column">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            The next generation of gaming is decentralised
          </h2>

          <p className=" section-description lexend-body-sm l">
            Shape the trajectory of next-gen gaming applications and vote on key
            ecosystem decisions with $XBG.
          </p>
        </ObserverContainer>
      </div>

      <div className="main-bubble">
        <Image src={Images.landing.sphere4} alt="" width={136} height={136} />
      </div>

      <Image
        className="background"
        alt=""
        quality={100}
        width={2880}
        height={3478}
        src={Images.landing.nextgen_gaming_bg}
      />
    </div>
  );
};
