import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

export const EmpoweringPlayers = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-empowering-players">
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
                  x: 110,
                }}
              >
                <Image
                  src={Images.landing.sphere2}
                  alt=""
                  width={119}
                  height={119}
                />
              </Tween>
            </Scene>
          </div>
        </Tween>
      </Scene>

      <div className="container">
        <ObserverContainer className="flex column">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            Empowering players to create their gaming identity
          </h2>
        </ObserverContainer>

        <div className={`flex flex-wrap cols ${loading ? 'out' : 'in'}`}>
          <ObserverContainer
            className="block-container"
            onAnimateIn={() => setLoading(false)}
            onAnimateOut={() => setLoading(true)}
          >
            <div className="block">
              <div className="lexend-heading-l">The gaming social layer</div>
              <p className="lexend-body-md l">
                Own your statistics, achievements and assets and use them across
                multiple applications.
              </p>
            </div>
          </ObserverContainer>
          <div className="block-container">
            <div className="cards">
              <Image
                src={Images.badges.valorant}
                alt=""
                width={124}
                height={191}
              />
              <Image
                src={Images.badges.dota2}
                alt=""
                width={116}
                height={179}
              />
              <Image src={Images.badges.lol} alt="" width={108} height={167} />
            </div>
            <div className="block">
              <div className="lexend-heading-l">
                Cross-platform connectivity
              </div>
              <p className="lexend-body-md l">
                Sync your gaming accounts to bolster your gaming credentials
                whilst playing the games you love.
              </p>
            </div>
          </div>
          <div className="block-container">
            <div className="block">
              <div className="lexend-body-s">A Gamified Experience</div>
              <div className="lexend-heading-l">
                Building your gaming identity should feel like playing your
                favourite RPG.
              </div>
            </div>
          </div>
          <div className="block-container">
            <div className="block">
              <div className="lexend-body-s">
                Your data, your avatar, your play
              </div>
              <div className="lexend-heading-l">
                Your gaming identity is your key to the future
              </div>
            </div>
          </div>
          <div className="block-container">
            <div className="block">
              <div className="lexend-heading-l">Your reputation matters</div>
              <p className="lexend-body-md l">
                Form your gaming reputation by supporting your favourite gaming
                communities and get rewarded while you’re at it.
              </p>
            </div>
          </div>
        </div>
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
          <div className="parallax-bubble-2">
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
                  width={39}
                  height={39}
                />
              </Tween>
            </Scene>
          </div>
        </Tween>
      </Scene>
    </div>
  );
};
