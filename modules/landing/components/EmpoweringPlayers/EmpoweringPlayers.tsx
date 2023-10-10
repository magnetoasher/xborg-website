import { Images } from '@/assets/imgs';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
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
            <Image
              src={Images.landing.sphere2}
              alt=""
              width={119}
              height={119}
            />
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
              <div className="lexend-heading-l">
                The ultimate gaming profile
              </div>
              <p className="lexend-body-md l">
                We combine a player’s gaming stats, achievements and reputation
                to create their XBorg ID.
              </p>
              <Link
                href="https://gamerbase.gg/"
                target="_blank"
                className="flex middle lexend-body-md sb link"
              >
                Visit GamerBase
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.7 11.6758L9.70005 17.6758L8.30005 16.2758L12.9 11.6758L8.30005 7.07578L9.70005 5.67578L15.7 11.6758Z"
                    fill="#EB3A4A"
                  />
                </svg>
              </Link>
            </div>
          </ObserverContainer>
          <div className="block-container">
            <div className="flex colummn block-content">
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
                <Image
                  src={Images.badges.lol}
                  alt=""
                  width={108}
                  height={167}
                />
              </div>
              <div className="block expand">
                <div className="lexend-heading-l">Gamification overload</div>
                <p className="lexend-body-md l">
                  Players can customise their XBorg ID with exclusive gaming
                  cards, avatars and unlockable wearables.
                </p>
              </div>
            </div>
          </div>
          <div className="block-container">
            <div className="block">
              <div className="lexend-body-s">The new way to play</div>
              <div className="lexend-heading-l">
                Where GameFi and SocialFi meet
              </div>
            </div>
          </div>
          <div className="block-container">
            <div className="block">
              <div className="lexend-body-s">XBorg ID</div>
              <div className="lexend-heading-l">
                The key to the next generation of gaming
              </div>
            </div>
          </div>
          <div className="block-container">
            <div className="block">
              <div className="lexend-heading-l">
                Cross-platform functionality
              </div>
              <p className="lexend-body-md l">
                Players can connect their XBorg ID across multiple applications
                and titles, to unlock unique opportunities and rewards.
              </p>
              <div className="flex">
                <BtnDark href="">
                  <Image
                    src={Images.landing.discovery1}
                    alt=""
                    width={32}
                    height={32}
                  />

                  <span>Sign in with XBorg</span>
                </BtnDark>
              </div>
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
            <Image src={Images.landing.sphere} alt="" width={39} height={39} />
          </div>
        </Tween>
      </Scene>
    </div>
  );
};
