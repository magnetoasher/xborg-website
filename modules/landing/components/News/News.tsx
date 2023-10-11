import { Images } from '@/assets/imgs';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import { NewsArticle } from './NewsArticle';
import { Swiper, SwiperSlide } from 'swiper/react';

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
          <Swiper slidesPerView={'auto'}>
            <SwiperSlide>
              <NewsArticle
                title="XBorg sells out a $2m community seed round with more than $7m of interest"
                date="13/07/2023"
                description="The funds will facilitate the scaling and adoption efforts of XBorg’s infrastructure and applications to reach millions of players and fans worldwide."
                href="https://cryptobriefing.com/xborg-sells-out-2-million-seed-round-community-allocation/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsArticle
                title="XBorg partners with Team BDS"
                date="30/03/2023"
                description="We are proud to partner with Team BDS, the world’s fastest growing esports team to create the most innovative esports project to date."
                href="https://teambds.gg/en/news/xborg-team-bds-creating-future-of-esports#:~:text=%22Our%20partnership%20with%20Team%20BDS,Founder%20and%20CEO%20at%20XBorg."
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsArticle
                title="XBorg partners with
                Brave"
                date="22/02/2023"
                description="XBorg and Brave combine forces to drive the growth of Web3 esports gaming and provide a platform to showcase Web3 players."
                href="https://brave.com/xborg/"
              />
            </SwiperSlide>
          </Swiper>
        </ObserverContainer>
      </div>
    </div>
  );
};
