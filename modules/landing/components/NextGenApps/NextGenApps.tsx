import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { NextGenAppBlock } from './NextGenAppBlock';
import { Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

export const NextGenApps = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-next-gen">
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -200,
          }}
          to={{
            y: 200,
          }}
        >
          <div className="parallax-bubble">
            <Image
              src={Images.landing.sphere2}
              alt=""
              width={161}
              height={161}
            />
          </div>
        </Tween>
      </Scene>

      <div className="container">
        <ObserverContainer className="flex column">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            Experience our next-gen applications
          </h2>

          <p className="section-description lexend-body-sm l">
            Create your gaming identity and unlock a new world of possibilities.
          </p>
        </ObserverContainer>

        <ObserverContainer className="avatar-container">
          <Image
            src={Images.landing.avatar}
            alt=""
            width={1500}
            height={1080}
            className="avatar"
          />
        </ObserverContainer>

        <div className="wrapper flex column">
          <NextGenAppBlock>
            <div className="lexend-heading-l">Xborg.gg</div>
            <div className="lexend-body-sm desc l">
              The home of gaming communities.
            </div>
            <Link href="" className="flex middle lexend-body-md sb">
              Visit App
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

            <div className="badge lexend-body-sm l">Alpha</div>
          </NextGenAppBlock>

          <div className="flex bottom-rows">
            <NextGenAppBlock className="expand">
              <div className="lexend-heading-l">XBorg Launchpad</div>
              <div className="lexend-body-sm desc l">
                Funding the most-promising gaming projects.
              </div>
              <Link href="" className="flex middle lexend-body-md sb">
                Visit App
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

              <div className="badge lexend-body-sm l">Alpha</div>
            </NextGenAppBlock>
            <NextGenAppBlock className="expand">
              <div className="lexend-heading-l">Initial Team Offerings</div>
              <div className="lexend-body-sm desc l">
                Launching tokenised gaming communities.
              </div>
              <Link href="" className="flex middle lexend-body-md sb">
                Register Interest
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

              <div className="badge lexend-body-sm l">Q4 2023</div>
            </NextGenAppBlock>
          </div>
        </div>
      </div>
    </div>
  );
};
