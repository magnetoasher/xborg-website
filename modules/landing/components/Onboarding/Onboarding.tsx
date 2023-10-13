import { Images } from '@/assets/imgs';
import { SpringSwiper } from '@/components/SpringSwiper';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';

import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ObserverContainer } from '@/components/ObserverContainer';
import { OnboardingSlide } from './OnboardingSlide';
import { Subscribe } from '@/modules/landing';

export const Onboarding = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-onboarding">
      <div className="container">
        <ObserverContainer className="flex between bottom">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            onboarding millions of players with the world’s best teams
          </h2>

          <Subscribe
            id="onboarding-subscribe"
            label="Sign up for our newsletter"
            button="Stay up to date"
            source="newsletter"
          />
        </ObserverContainer>

        <ObserverContainer className="slide">
          <SpringSwiper
            options={{
              speed: 900,
              pagination: false,
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="image-container">
                  <Image
                    src={Images.landing.teambds}
                    alt=""
                    width={259}
                    height={374}
                    className="image"
                  />
                </div>

                <div className="team-logo">
                  <Image
                    src={Images.landing.teambdsLogo}
                    alt=""
                    width={58}
                    height={58}
                  />
                </div>

                <div className="swiper-slide-title lexend-heading-l">
                  Team BDS
                </div>

                <div className="swiper-slide-fans lexend-body-sm l">
                  200’000 fans
                  <br />
                  World's fastest growing esports team
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="image-container">
                  <Image
                    src={Images.landing.fox}
                    alt=""
                    width={259}
                    height={374}
                    className="image"
                  />
                </div>

                <div className="swiper-slide-title lexend-heading-l">Fox</div>

                <div className="swiper-slide-fans lexend-body-sm l">
                  100’000 fans
                  <br />
                  CS:GO pro player
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <OnboardingSlide className="unknown">
                <div className="soon lexend-body-sm l">Will be soon...</div>
                <Image
                  src={Images.landing.unknown}
                  alt=""
                  width={259}
                  height={374}
                  className="image"
                />
              </OnboardingSlide>
            </SwiperSlide>
            <SwiperSlide>
              <OnboardingSlide className="unknown">
                <div className="soon lexend-body-sm l">Will be soon...</div>
                <Image
                  src={Images.landing.unknown}
                  alt=""
                  width={259}
                  height={374}
                  className="image"
                />
              </OnboardingSlide>
            </SwiperSlide>
          </SpringSwiper>
        </ObserverContainer>
      </div>
    </div>
  );
};
