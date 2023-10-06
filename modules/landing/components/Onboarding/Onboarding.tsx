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
import Link from 'next/link';

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
              value={form.email}
              placeholder="Email"
              label="Sign up for our newsletter"
            />

            <BtnRed label="Stay up to date" href="" />
          </div>
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

                <div className="swiper-slide-fans lexend-body-sm l">
                  200’000 fans
                  <br />
                  №1 CSGO Team
                </div>

                <Link className="link flex middle lexend-body-md sb" href="">
                  <span>Get Early Access</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.7 11.6748L9.7 17.6748L8.3 16.2748L12.9 11.6748L8.3 7.0748L9.7 5.6748L15.7 11.6748Z"
                      fill="#EB3A4A"
                    />
                  </svg>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="shadow" />
                <Image
                  src={Images.landing.fox}
                  alt=""
                  width={259}
                  height={374}
                />

                <div className="swiper-slide-title lexend-heading-l">Fox</div>

                <div className="swiper-slide-fans lexend-body-sm l">
                  200’000 fans
                  <br />
                  №1 CSGO Team
                </div>

                <Link className="link flex middle lexend-body-md sb" href="">
                  <span>Get Early Access</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.7 11.6748L9.7 17.6748L8.3 16.2748L12.9 11.6748L8.3 7.0748L9.7 5.6748L15.7 11.6748Z"
                      fill="#EB3A4A"
                    />
                  </svg>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="shadow" />
                <Image
                  src={Images.landing.unknown}
                  alt=""
                  width={259}
                  height={374}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-image">
                <div className="shadow" />
                <Image
                  src={Images.landing.unknown}
                  alt=""
                  width={259}
                  height={374}
                />
              </div>
            </SwiperSlide>
          </SpringSwiper>
        </ObserverContainer>
      </div>
    </div>
  );
};
