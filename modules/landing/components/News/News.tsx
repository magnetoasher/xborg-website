import { Images } from '@/assets/imgs';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

export const News = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-news">
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -150,
          }}
          to={{
            y: 150,
          }}
        >
          <div className="parallax-bubble">
            <Image
              src={Images.landing.bubble_cl1}
              alt=""
              width={76}
              height={95}
            />
          </div>
        </Tween>
      </Scene>

      <div className="container flex column">
        <ObserverContainer className="flex column">
          <h2
            className="integralfc-h2 flex column reveal-from-bottom"
            ref={ref}
          >
            In the News
          </h2>
        </ObserverContainer>

        <ObserverContainer className="flex news-list">
          <div className="news-article expand">
            <div className="date lexend-body-s l">13/07/2023</div>
            <div className="lexend-body-sl title">
              XBorg sells out $2m seed round.
            </div>

            <div className="lexend-body-md l description">
              The funds will facilitate the scaling and adoption efforts of
              XBorg’s infrastructure and applications to reach millions of
              players and fans worldwide.
            </div>

            <div className="flex">
              <BtnDark label="Read on BeInCrypto" href="" />
            </div>
          </div>
          <div className="news-article expand">
            <div className="date lexend-body-s l">13/07/2023</div>
            <div className="lexend-body-sl title">
              XBorg sells out $2m seed round.
            </div>

            <div className="lexend-body-md l description">
              The funds will facilitate the scaling and adoption efforts of
              XBorg’s infrastructure and applications to reach millions of
              players and fans worldwide.
            </div>

            <div className="flex">
              <BtnDark label="Read on BeInCrypto" href="" />
            </div>
          </div>
          <div className="news-article expand">
            <div className="date lexend-body-s l">13/07/2023</div>
            <div className="lexend-body-sl title">
              XBorg sells out $2m seed round.
            </div>

            <div className="lexend-body-md l description">
              The funds will facilitate the scaling and adoption efforts of
              XBorg’s infrastructure and applications to reach millions of
              players and fans worldwide.
            </div>

            <div className="flex">
              <BtnDark label="Read on BeInCrypto" href="" />
            </div>
          </div>
        </ObserverContainer>
      </div>
    </div>
  );
};
