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
            <div className="flex">
              <div className="lexend-heading-l">
                GamerBase.gg
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M1.13047 12.5L0 11.3695L9.75453 1.61497H0.872093V0H12.5V11.6279H10.885V2.74547L1.13047 12.5Z"
                    fill="#EB3A4A"
                  />
                </svg>
              </div>
            </div>
            <div className="lexend-body-sm desc l">
              The home of gaming communities.
            </div>
            <div className="flex">
              <Link
                href="https://gamerbase.gg"
                target="_blank"
                className="flex middle lexend-body-md sb"
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

            <div className="badge lexend-body-sm l">Beta</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="162"
              height="162"
              viewBox="0 0 162 162"
              fill="none"
              className="beta-logo"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M145.259 130.313C156.115 116.166 162 98.8324 162 81C162 76.1232 162 73.6848 161.048 71.8234C160.218 70.2 158.897 68.8794 157.274 68.0491C155.412 67.097 152.974 67.097 148.097 67.097H134.799C129.922 67.097 127.483 67.097 125.622 68.0491C123.999 68.8794 122.678 70.2 121.848 71.8234C120.896 73.6848 120.896 76.1232 120.896 81C120.896 89.7889 117.993 98.3318 112.64 105.302C107.286 112.272 99.7807 117.279 91.2892 119.546C82.7977 121.813 73.7953 121.212 65.6803 117.837C57.5653 114.462 50.7918 108.502 46.4118 100.882C42.0318 93.2626 40.2905 84.4098 41.4583 75.6989C42.6262 66.988 46.6377 58.9065 52.87 52.7095C59.1023 46.5126 67.2065 42.5471 75.9239 41.4288C78.8002 41.0598 81.6901 41.0077 84.5443 41.2623C94.8622 42.1827 100.021 42.6428 102.269 41.4758C104.516 40.3088 106.227 37.3492 109.648 31.4301L112.845 25.8974C117.06 18.6042 119.167 14.9576 117.672 11.084C116.176 7.21038 112.68 6.09176 105.69 3.85453C94.389 0.238069 82.3617 -0.87354 70.4576 0.689116C52.7769 3.01007 36.3563 11.1007 23.7429 23.706C11.1295 36.3113 3.02825 52.7267 0.695918 70.4059C-1.63641 88.0851 1.9305 106.04 10.8434 121.485C19.7562 136.93 33.5168 149.002 49.9907 155.829C66.4645 162.656 84.7308 163.856 101.956 159.242C119.181 154.629 134.403 144.46 145.259 130.313Z"
                fill="#323232"
              />
              <path
                d="M104.571 67.0972H137.229C143.467 67.0972 146.586 67.0972 148.808 68.6264C149.681 69.2272 150.437 69.9829 151.038 70.856C152.567 73.0782 152.567 76.1974 152.567 82.4358C152.567 88.6742 152.567 91.7934 151.038 94.0156C150.437 94.8887 149.681 95.6444 148.808 96.2452C146.586 97.7744 143.467 97.7744 137.229 97.7744H104.571C94.4563 97.7744 89.3991 97.7744 86.8406 95.1277C85.8579 94.1111 85.1384 92.8699 84.7448 91.5119C83.72 87.9762 86.2338 83.588 91.2613 74.8115C93.1282 71.5526 94.0616 69.9232 95.476 68.8536C96.0405 68.4267 96.6551 68.0705 97.3062 67.7928C98.9373 67.0972 100.815 67.0972 104.571 67.0972Z"
                fill="#323232"
              />
            </svg>
          </NextGenAppBlock>

          <div className="flex bottom-rows">
            <NextGenAppBlock className="expand">
              <div className="lexend-heading-l">Gaming Launchpad</div>
              <div className="lexend-body-sm desc l">
                Funding the most-promising gaming projects.
              </div>
              <div className="flex">
                <Link
                  href="https://launchpad.xborg.com/"
                  target="_blank"
                  className="flex middle lexend-body-md sb"
                >
                  Visit Launchpad
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

              <div className="badge lexend-body-sm l">Alpha</div>
            </NextGenAppBlock>
            <NextGenAppBlock className="expand">
              <div className="lexend-heading-l">Initial Team Offerings</div>
              <div className="lexend-body-sm desc l">
                Launching tokenised gaming communities.
              </div>
              <div className="flex">
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
              </div>

              <div className="badge lexend-body-sm l">Q1 2024</div>
            </NextGenAppBlock>
          </div>
        </div>
      </div>
    </div>
  );
};
