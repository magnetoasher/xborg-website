import { BtnDark, BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { SpringSwiper } from '@/components/SpringSwiper';
import { scrollTo, splitLines } from '@/modules/utils/utils';
import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { SocialIcons, Subscribe } from '@/modules/landing';
import Link from 'next/link';
import Image from 'next/image';
import { Images } from '@/assets/imgs';
import { Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import { TextInput } from '@/components/Forms';
import { updateInput } from '@/helpers/inputs';

export const LearnMore = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [form, setForm] = useState<{ email: string }>({ email: '' });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-learnmore">
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 150,
          }}
          to={{
            y: -150,
          }}
        >
          <div className="parallax-bubble">
            <Image
              src={Images.landing.bubble_blur1}
              alt=""
              width={38}
              height={38}
            />
          </div>
        </Tween>
      </Scene>
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 50,
          }}
          to={{
            y: -50,
          }}
        >
          <div className="parallax-bubble2">
            <Image
              src={Images.landing.bubble_blur2}
              alt=""
              width={92}
              height={92}
            />
          </div>
        </Tween>
      </Scene>
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
          <div className="parallax-bubble3">
            <Image
              src={Images.landing.bubble_cr1}
              alt=""
              width={142}
              height={234}
            />
          </div>
        </Tween>
      </Scene>
      <div className="container flex column">
        <div className="list flex flex-wrap">
          <div className="block-container">
            <div className="block expand flex xbg-token">
              <Image
                src={Images.landing.token}
                alt=""
                width={248}
                height={233}
                className="token-image"
              />
              <div className="flex column expand">
                <span className="lexend-body-s">presale coming soon</span>
                <div className="lexend-body-sl expand">
                  XBG is the native token of the XBorg ecosystem
                </div>

                <Subscribe
                  button="Sign Up"
                  source="xbg"
                  id="learnmore-subscribe"
                />
              </div>
            </div>
          </div>
          <div className="block-container">
            <div className="block expand prometheus-nft">
              <div className="lexend-body-sl">Prometheus NFT</div>
              <div className="lexend-body-md l">
                Join the 1,111 Prometheans shaping the next generation of
                gaming.
              </div>

              <div className="flex middle actions">
                <BtnDark
                  label="View OpenSea"
                  href="https://opensea.io/collection/xborg-prometheus"
                  target="_blank"
                />
              </div>

              <Image
                src={Images.landing.prometheus}
                alt=""
                width={326}
                height={322}
                className="prometheus"
              />
            </div>
          </div>
          <div className="block-container">
            <div className="block expand join-community flex column between">
              <div className="content">
                <div className="lexend-body-sl">Join our Community</div>
                <div className="lexend-body-md l">
                  XBorg is home to the most accomplished players and
                  distinguished investors in GameFi.
                </div>
              </div>
              <SocialIcons />
            </div>
          </div>
          <div className="block-container">
            <div className="block expand">
              <div className="lexend-body-sl">Built in Public</div>
              <div className="lexend-body-md l">
                XBorg is built with transparency and decentralisation at its
                core.
              </div>
              <div className="flex column links">
                <Link
                  href="https://www.youtube.com/@xborgofficial/videos"
                  target="_blank"
                  className="flex middle link"
                >
                  <span>Watch our latest Cyberlink</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.7 11.675L9.70005 17.675L8.30005 16.275L12.9 11.675L8.30005 7.07505L9.70005 5.67505L15.7 11.675Z"
                      fill="#EB3A4A"
                    />
                  </svg>
                </Link>
                <Link
                  href=""
                  className="flex middle link"
                  onClick={(e: any) => {
                    e.preventDefault();
                    const hero =
                      document.getElementsByClassName('landing-roadmap')[0];
                    const rect = hero.getBoundingClientRect();
                    scrollTo(window.scrollY, window.scrollY + rect.y, 0);
                  }}
                >
                  <span>View Roadmap</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.7 11.675L9.70005 17.675L8.30005 16.275L12.9 11.675L8.30005 7.07505L9.70005 5.67505L15.7 11.675Z"
                      fill="#EB3A4A"
                    />
                  </svg>
                </Link>
              </div>

              <Image
                src={Images.landing.bubbles_right}
                alt=""
                width={591}
                height={265}
                className="bubbles-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
