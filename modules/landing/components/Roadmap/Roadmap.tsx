import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { SpringSwiper } from '@/components/SpringSwiper';
import { splitLines } from '@/modules/utils/utils';
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

        <ObserverContainer className="spring-swiper-container">
          <SpringSwiper
            options={{
              speed: 800,
              pagination: false,
            }}
          >
            <SwiperSlide>
              <div className="quarter integralfc-h2">Q1 2023</div>

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
            <SwiperSlide>
              <div className="quarter integralfc-h2">Q1 2023</div>

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
            <SwiperSlide>
              <div className="quarter integralfc-h2">Q1 2023</div>

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
            <SwiperSlide>
              <div className="quarter integralfc-h2">Q1 2023</div>

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
            <SwiperSlide>
              <div className="quarter integralfc-h2">Q1 2023</div>

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
            <SwiperSlide>
              <div className="quarter integralfc-h2">Q1 2023</div>

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
            <SwiperSlide>
              <div className="quarter integralfc-h2">Q1 2023</div>

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
          </SpringSwiper>
        </ObserverContainer>
      </div>
    </div>
  );
};
