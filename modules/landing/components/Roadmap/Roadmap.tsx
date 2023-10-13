import { Images } from '@/assets/imgs';
import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { SpringSwiper } from '@/components/SpringSwiper';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';

export const Roadmap = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-roadmap">
      <div className="container flex column">
        <ObserverContainer className="flex column">
          <h2
            className="integralfc-h2 flex column reveal-from-bottom"
            ref={ref}
          >
            Our roadmap
          </h2>
        </ObserverContainer>
      </div>

      <ObserverContainer className="spring-swiper-container shadows">
        <div className="container">
          <SpringSwiper
            options={{
              speed: 800,
              pagination: false,
              initialSlide: 2,
            }}
          >
            <SwiperSlide className="flex column top start">
              <div className="flex middle">
                <div className="quarter integralfc-h2">
                  <span className="gradient">Q1 2023</span>
                  <span className="outline">Q1 2023</span>
                </div>
              </div>

              <div className="swiper-slide-content flex column">
                <div className="category lexend-body-s">PRODUCT</div>

                <div className="item lexend-body-md">GamerBase Alpha</div>
                <div className="item lexend-body-md">
                  GamerBase hits 10k users
                </div>

                <div className="category lexend-body-s">GROWTH</div>

                <div className="item lexend-body-md">
                  XBorg Esports ranked #1 in Web3
                </div>
                <div className="item lexend-body-md">
                  Partnered with Team BDS, Rocket League World Champions
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex column top start">
              <div className="flex">
                <div className="quarter integralfc-h2">
                  <span className="gradient">Q2 2023</span>
                  <span className="outline">Q2 2023</span>
                </div>
              </div>

              <div className="swiper-slide-content flex column">
                <div className="category lexend-body-s">XBG</div>

                <div className="item lexend-body-md">
                  $2m community seed round $7m interest & rapid sellout
                </div>

                <div className="category lexend-body-s">GROWTH</div>

                <div className="item lexend-body-md">
                  Xtreme Championship Series
                </div>
                <div className="item lexend-body-md">
                  Tier 1 esports teams partnerships
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex column top start">
              <div className="flex middle">
                <div className="quarter integralfc-h2">
                  <span className="gradient">Q3 2023</span>
                  <span className="outline">Q3 2023</span>
                </div>
              </div>

              <div className="swiper-slide-content flex column">
                <div className="category lexend-body-s">GROWTH</div>
                <div className="item lexend-body-md">KOL onboarding</div>
                <div className="item lexend-body-md">
                  Tier 1 esports team partnerships
                </div>

                <div className="item lexend-body-md">
                  Gaming studios partnerships
                </div>

                <div className="category lexend-body-s">PRODUCT</div>
                <div className="item lexend-body-md">GamerBase Beta</div>
                <div className="item lexend-body-md">Community onboarding</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex column top start">
              <div className="flex middle">
                <div className="quarter integralfc-h2">
                  <span className="gradient">Q4 2023</span>
                  <span className="outline">Q4 2023</span>
                </div>
                <div className="now lexend-body-sm">
                  <span>Now</span>
                </div>
              </div>

              <div className="swiper-slide-content flex column">
                <div className="category lexend-body-s">XBG</div>
                <div className="item lexend-body-md">
                  XBG public sale & launch
                </div>

                <div className="item lexend-body-md">
                  Gaming studios partnerships
                </div>

                <div className="category lexend-body-s">GROWTH</div>
                <div className="item lexend-body-md">
                  KOL strategy Tier 1 gaming brand partnerships
                </div>

                <div className="category lexend-body-s">PRODUCT</div>
                <div className="item lexend-body-md">GamerBase V1</div>
                <div className="item lexend-body-md">
                  New product announcement
                </div>
                <div className="item lexend-body-md">Explorer dashboard</div>
              </div>

              <div className="flex bottom column token-launch">
                <div className="xbg-launch quarter integralfc-h2">
                  <span className="gradient">XBG Token Launch</span>
                  <span className="outline">XBG Token Launch</span>
                </div>
                <div className="flex roadmap-line">
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                  <Image
                    src={Images.landing.roadmap}
                    alt=""
                    height={7}
                    width={100}
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex column top start">
              <div className="flex">
                <div className="quarter integralfc-h2">
                  <span className="gradient">Q1 2024</span>
                  <span className="outline">Q1 2024</span>
                </div>
              </div>

              <div className="swiper-slide-content flex column">
                <div className="category lexend-body-s">GROWTH</div>
                <div className="item lexend-body-md">
                  Tier 1 gaming brand partnerships
                </div>

                <div className="item lexend-body-md">
                  Tier 1 Esports team partnerships
                </div>

                <div className="category lexend-body-s">PRODUCT</div>
                <div className="item lexend-body-md">
                  First Tokenized Esports Team
                </div>
                <div className="item lexend-body-md">Gaming data graph</div>
                <div className="item lexend-body-md">XBorg SDK & SSO</div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex column top start">
              <div className="flex">
                <div className="quarter integralfc-h2">
                  <span className="gradient">Q2 2024</span>
                  <span className="outline">Q2 2024</span>
                </div>
              </div>

              <div className="swiper-slide-content flex column">
                <div className="category lexend-body-s">GROWTH</div>
                <div className="item lexend-body-md">
                  Developer grant program
                </div>

                <div className="category lexend-body-s">PRODUCT</div>
                <div className="item lexend-body-md">GamerBase.gg V1</div>
                <div className="item lexend-body-md">New product</div>
                <div className="item lexend-body-md">
                  Soulbound launchpad V1
                </div>
              </div>
            </SwiperSlide>
          </SpringSwiper>
        </div>
      </ObserverContainer>
    </div>
  );
};
