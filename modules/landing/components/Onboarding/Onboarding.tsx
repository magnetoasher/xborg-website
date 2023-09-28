import { Images } from '@/assets/imgs';
import { BtnRed } from '@/components/Buttons';
import { SpringSwiper } from '@/components/SpringSwiper';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ObserverContainer } from '@/components/ObserverContainer';
import { TextInput } from '@/components/Forms';
import { updateInput } from '@/helpers/inputs';

export const Onboarding = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [form, setForm] = useState<{ email: string }>({ email: '' });
  const [errors, setErrors] = useState<any>({});

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

          <div className="subscribe flex w-full">
            <TextInput
              id="subscribe"
              className="w-full"
              onChange={updateInput('email', form, setForm, errors, setErrors)}
              value={''}
              placeholder="Email"
              label="Sign up for our newsletter"
            />

            <BtnRed label="Stay up to date" href="" />
          </div>
        </ObserverContainer>

        <ObserverContainer
          className="spring-swiper-container"
          rootMargin="-30%"
        >
          <SpringSwiper
            options={{
              speed: 900,
              pagination: false,
              navigation: false,
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="shadow" />
                <Image
                  src={Images.landing.teambds}
                  alt=""
                  width={259}
                  height={374}
                />

                <div className="swiper-slide-title lexend-heading-l">
                  Team BDS
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="shadow" />
                <Image
                  src={Images.landing.teambds}
                  alt=""
                  width={259}
                  height={374}
                />

                <div className="swiper-slide-title lexend-heading-l">
                  Team BDS
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="shadow" />
                <Image
                  src={Images.landing.teambds}
                  alt=""
                  width={259}
                  height={374}
                />

                <div className="swiper-slide-title lexend-heading-l">
                  Team BDS
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="shadow" />
                <Image
                  src={Images.landing.teambds}
                  alt=""
                  width={259}
                  height={374}
                />

                <div className="swiper-slide-title lexend-heading-l">
                  Team BDS
                </div>
              </div>
            </SwiperSlide>
          </SpringSwiper>
        </ObserverContainer>
      </div>
    </div>
  );
};
