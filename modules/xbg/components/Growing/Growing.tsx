import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import Bubbles from './Bubbles';

export const Growing = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="xbg-growing">
      <div className="container">
        <ObserverContainer className="flex column middle">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            $XBG grows as XBorg scales
          </h2>
        </ObserverContainer>
        <Bubbles />
        {/* <div
          className={`flex start middle blocks-container ${
            loading ? 'out' : 'in'
          }`}
        >
          <ObserverContainer
            className="block-container block-container-1"
            onAnimateIn={() => setLoading(false)}
            onAnimateOut={() => setLoading(true)}
          >
            <div className="block">
              <p className="lexend-body-sm l">Scaling our credential network</p>
            </div>
            <div className="block">
              <p className="lexend-body-sm l">
                Increasing players within the ecosystem
              </p>
            </div>
          </ObserverContainer>
          <ObserverContainer
            className="block-container block-container-2"
            onAnimateIn={() => setLoading(false)}
            onAnimateOut={() => setLoading(true)}
          >
            <div className="block">
              <h4 className="lexend-body-sl l">
                Attracting more gaming communities
              </h4>
            </div>
            <div className="block">
              <p className="lexend-body-sm l">Increasing $XBG utility</p>
            </div>
            <div className="block">
              <p className="lexend-body-sm l">
                Improving ecosystem retention & usage
              </p>
            </div>
          </ObserverContainer>
          <ObserverContainer
            className="block-container block-container-3"
            onAnimateIn={() => setLoading(false)}
            onAnimateOut={() => setLoading(true)}
          >
            <div className="block">
              <p className="lexend-body-sm l">Developing XBorg-powered apps</p>
            </div>
            <div className="block">
              <h4 className="lexend-body-sl l">
                Attracting games and developers
              </h4>
            </div>
          </ObserverContainer>
          <ObserverContainer
            className="block-container block-container-4"
            onAnimateIn={() => setLoading(false)}
            onAnimateOut={() => setLoading(true)}
          >
            <div className="block">
              <h4 className="lexend-body-sl l">
                Onboarding leading esports teams
              </h4>
            </div>
          </ObserverContainer>
        </div> */}
      </div>

      {/* <Scene duration="100%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 150,
          }}
        >
          <Image
            src={Images.landing.bubbles_bot_left}
            width={400}
            height={305}
            alt=""
            className="background1"
          />
        </Tween>
      </Scene>
      <Scene duration="100%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 150,
          }}
        >
          <Image
            src={Images.landing.bubbles_bot_right}
            width={1062}
            height={883}
            alt=""
            className="background2"
          />
        </Tween>
      </Scene> */}
    </div>
  );
};
