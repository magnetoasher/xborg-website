import { Images } from '@/assets/imgs';
import { Videos } from '@/assets/videos';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import { SiteActions } from '@/redux/site/actions';
import { AppDispatch } from '@/store';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Tween } from 'react-gsap';
import { useDispatch } from 'react-redux';
import { Scene } from 'react-scrollmagic';

export const Introduction = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }

    if (videoRef.current) {
      videoRef.current.addEventListener(
        'loadeddata',
        function () {
          dispatch(SiteActions.loadSite());
        },
        false,
      );
    }
  }, []);

  return (
    <div className="landing-introduction">
      <video
        src={Videos.landing.intro}
        className="video"
        muted
        autoPlay
        ref={videoRef}
      />

      <div className="introduction-content flex column center">
        <ObserverContainer className="container flex column" rootMargin="-5%">
          <span className="lexend-text-sm">The gaming social layer</span>

          <h1 className="integralfc-h1 reveal-from-bottom" ref={ref}>
            Powering the Next Generation of Gaming
          </h1>

          <div className="flex actions">
            <BtnDark label="Explore Apps" href="" className="lexend-body-md" />
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
