import { Images } from '@/assets/imgs';
import { Videos } from '@/assets/videos';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { scrollTo, splitLines } from '@/modules/utils/utils';
import { SiteActions } from '@/redux/site/actions';
import { AppDispatch } from '@/store';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Tween } from 'react-gsap';
import { useDispatch } from 'react-redux';
import { Scene } from 'react-scrollmagic';
import { throttle } from 'lodash';

export const Introduction = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <div className="landing-introduction" id="trigger2">
      <Scene duration="100%" triggerElement="#trigger2" triggerHook="onLeave">
        {(progress: any) => {
          return <VideoCover progress={progress} />;
        }}
      </Scene>
      <div className="introduction-content flex column center">
        <ObserverContainer className="container flex column">
          <span className="lexend-text-sm">The gaming social layer</span>

          <h1 className="integralfc-h1 reveal-from-bottom" ref={ref}>
            Powering the Next Generation of Gaming
          </h1>

          <div className="flex actions">
            <BtnDark
              label="Explore Apps"
              href=""
              className="lexend-body-md"
              onClick={(e: any) => {
                e.preventDefault();
                const hero =
                  document.getElementsByClassName('landing-next-gen')[0];
                const rect = hero.getBoundingClientRect();
                scrollTo(window.scrollY, rect.y, 0);
              }}
            />
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
            <Image
              src={Images.landing.sphere}
              alt=""
              width={108}
              height={108}
            />
          </div>
        </Tween>
      </Scene>
    </div>
  );
};

let seeking = false;
let ticking = false;
export const VideoCover = ({ progress }: { progress: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // if (videoRef.current) {
    //   videoRef.current.addEventListener(
    //     'loadeddata',
    //     function () {
    dispatch(SiteActions.loadSite());
    //     },
    //     false,
    //   );
    // }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('seeking', function () {
        seeking = true;
      });

      videoRef.current.addEventListener('seeked', function () {
        seeking = false;
      });

      if (!ticking) {
        window.requestAnimationFrame(function () {
          const duration = 8.0;
          if (!seeking && videoRef.current)
            videoRef.current.currentTime = duration * progress;

          ticking = false;
        });

        ticking = true;
      }
    }
  }, [progress]);

  return (
    <Tween>
      <video
        src={Videos.landing.intro}
        muted
        preload="auto"
        ref={videoRef}
        className="introduction-video"
      />
    </Tween>
  );
};
