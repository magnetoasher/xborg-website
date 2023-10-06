import { Images } from '@/assets/imgs';
import { Videos } from '@/assets/videos';
import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

export const Launching = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-launching">
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -350,
          }}
          to={{
            y: 150,
          }}
        >
          <div className="parallax-bubble">
            <Image src={Images.landing.sphere9} alt="" width={92} height={92} />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -350,
          }}
          to={{
            y: 50,
          }}
        >
          <div className="parallax-bubble2">
            <Image src={Images.landing.sphere8} alt="" width={38} height={38} />
          </div>
        </Tween>
      </Scene>

      <div className="container flex middle center" id="trigger">
        <ObserverContainer className="video-container">
          <Scene duration="100%" triggerElement="#trigger">
            {(progress: any) => {
              return <LaunchingCoin progress={progress} />;
            }}
          </Scene>
        </ObserverContainer>

        <div className="flex column middle center content">
          <ObserverContainer className="flex column">
            <div className="lexend-body-s">The XBG Token</div>
            <div className="title-container">
              <h2
                className="integralfc-h1 flex column reveal-from-bottom"
                ref={ref}
              >
                Launching in Q4 2023
              </h2>
            </div>
          </ObserverContainer>

          <ObserverContainer className="flex column details">
            <p className="lexend-body-sm l description">
              Register interest now to stand a chance of earning a presale spot
              with discounted terms.
            </p>

            <div className="flex middle actions">
              <BtnRed label="Register Interest" href="" />

              <p className="lexend-body-sm l registered-interest">
                $5m interest registered
              </p>
            </div>
          </ObserverContainer>
        </div>
      </div>
    </div>
  );
};
let seeking = false;
let ticking = false;

export const LaunchingCoin = ({ progress }: { progress: number }) => {
  useEffect(() => {
    const ref = document.getElementsByClassName(
      'token-video',
    )[0] as HTMLMediaElement;

    if (ref) {
      ref.addEventListener('seeking', function () {
        seeking = true;
      });

      ref.addEventListener('seeked', function () {
        seeking = false;
      });

      if (!ticking) {
        window.requestAnimationFrame(function () {
          tick();
          ticking = false;
        });

        ticking = true;
      }
    }
  }, [progress]);

  function tick() {
    const ref = document.getElementsByClassName(
      'token-video',
    )[0] as HTMLMediaElement;
    const duration = 1.24;

    if (!seeking) ref.currentTime = progress / duration;
  }

  return (
    <Tween>
      <video
        src={Videos.coin}
        muted
        webkit-playsinline="true"
        preload="auto"
        className="token-video"
      />
    </Tween>
  );
};
