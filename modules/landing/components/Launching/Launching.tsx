import { Images } from '@/assets/imgs';
import { Videos } from '@/assets/videos';
import { BtnRed } from '@/components/Buttons';
import { TextInput } from '@/components/Forms';
import { ObserverContainer } from '@/components/ObserverContainer';
import { updateInput } from '@/helpers/inputs';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
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
                XBG presale coming soon
              </h2>
            </div>
          </ObserverContainer>

          <ObserverContainer className="flex column details">
            <div className="flex column actions">
              <Subscribe
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
