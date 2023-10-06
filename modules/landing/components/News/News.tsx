import { Images } from '@/assets/imgs';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import { NewsArticle } from './NewsArticle';

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
          <NewsArticle />
          <NewsArticle />
          <NewsArticle />
        </ObserverContainer>
      </div>
    </div>
  );
};
