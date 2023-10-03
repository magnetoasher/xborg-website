import { Videos } from '@/assets/videos';
import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
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
      <div className="container flex middle center" id="trigger">
        <Scene duration="100%" triggerElement="#trigger">
          {(progress: any) => {
            return <LaunchingCoin progress={progress} />;
          }}
        </Scene>
        <div className="flex column middle center content">
          <ObserverContainer className="flex column">
            <div className="lexend-body-s">The XBG Token</div>
            <h2
              className="integralfc-h1 flex column reveal-from-bottom"
              ref={ref}
            >
              Launching in Q4 2023
            </h2>
          </ObserverContainer>

          <div className="flex column">
            <p className="lexend-body-sm l">
              Register interest now to stand a chance at earning a whitelist
              spot.
            </p>

            <p className="lexend-body-sm l interest">
              $7m of $XBG interest already
            </p>

            <div className="flex">
              <BtnRed label="Register Interest" href="" />
            </div>
          </div>
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
