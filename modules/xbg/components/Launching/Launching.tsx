import { Videos } from '@/assets/videos';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import { Subscribe } from '@/modules/landing';

export const Launching = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [form, setForm] = useState<{ email: string }>({ email: '' });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="flex center middle launching">
      <div className="container flex  center top" id="trigger">
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
                XBG presale coming soon
              </h2>
            </div>
          </ObserverContainer>

          <ObserverContainer className="flex column details">
            <Subscribe
              id="launching-subscribe"
              label="Get notified when the XBG presale with discounted terms goes live."
              button="Stay up to date"
              source="xbg"
            />

            <Link
              className="link flex middle"
              href="https://docsend.com/view/9iee42d832m32wnd"
              target="_blank"
            >
              <span>View pitch deck</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.6998 11.675L9.6998 17.675L8.2998 16.275L12.8998 11.675L8.2998 7.07499L9.6998 5.67499L15.6998 11.675Z"
                  fill="#EB3A4A"
                />
              </svg>
            </Link>
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
