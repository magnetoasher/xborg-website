import { Images } from '@/assets/imgs';
import { Videos } from '@/assets/videos';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

export const Introduction = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-introduction">
      <video src={Videos.landing.intro} className="video" muted autoPlay />

      <div className="introduction-content flex column center">
        <ObserverContainer className="container flex column">
          <span className="lexend-text-sm">The gaming social layer</span>

          <h1 className="integralfc-h1 reveal-from-bottom" ref={ref}>
            Powering the Next Generation of Gaming
          </h1>

          <div className="flex actions">
            <BtnDark label="Explore Apps" href="" className="lexend-body-md" />
          </div>
        </ObserverContainer>
      </div>
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 350,
          }}
        >
          <div className="parallax-bubble">
            <Scene duration="100%" triggerHook="onCenter">
              <Tween
                position="0"
                from={{
                  x: 0,
                }}
                to={{
                  x: -110,
                }}
              >
                <Image
                  src={Images.landing.sphere}
                  alt=""
                  width={108}
                  height={108}
                />
              </Tween>
            </Scene>
          </div>
        </Tween>
      </Scene>
    </div>
  );
};
