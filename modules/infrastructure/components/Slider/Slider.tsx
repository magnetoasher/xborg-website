'use client';
import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

let timerId: any = null;

export const Slider = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  useEffect(() => {
    timerId = setInterval(() => {
      if (active + 1 === data.length) setActive(0);
      else setActive(active + 1);
    }, 8000);

    return () => clearInterval(timerId);
  });
  const data = [
    {
      title: 'Secure backed gaming data',
      icon: Images.landing.discovery1,
    },
    {
      title: 'Gaming social layer',
      icon: Images.landing.discovery2,
    },
    {
      title: 'Reputation system integration',
      icon: Images.landing.discovery3,
    },
  ];

  console.log(active);

  return (
    <div className="infrastructure-slider">
      <div className="container">
        <div className="slider-main flex between">
          <ObserverContainer className="list flex column lexend-body-sl">
            {data.map((item, index) => (
              <Link
                href=""
                className={`flex ${active === index ? 'active' : 'inactive'}`}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  clearInterval(timerId);
                  setActive(index);

                  timerId = setInterval(() => {
                    if (active + 1 === data.length) setActive(0);
                    else setActive(active + 1);
                  }, 8000);
                }}
              >
                <div className="link-inner flex middle between w-full">
                  <span>{item.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
            ))}

            <div className="flex middle list-index lexend-body-md">
              <span className="current">0{active + 1}</span>
              <div className="spacer" />
              <span className="total">0{data.length}</span>

              <div className="arrows">
                <button
                  onClick={() => {
                    if (active === 0) return;
                    else setActive(+active - 1);
                  }}
                >
                  <Image
                    className={clsx('invert', active === 0 && 'disable')}
                    alt="arrow"
                    src={Images.infrastructure.arrowRight}
                    width={32}
                    height={32}
                  />
                </button>{' '}
                <button
                  onClick={() => {
                    if (active === data.length - 1) return;
                    else setActive(+active + 1);
                  }}
                >
                  <Image
                    className={clsx(active === data.length - 1 && 'disable')}
                    alt="arrow"
                    src={Images.infrastructure.arrowRight}
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>
          </ObserverContainer>

          <div className="right">
            <div className="lexend-heading-xl right-title text-center">
              {data[active].title}
            </div>

            <div className={clsx('right-section', active === 0 && 'active')}>
              <div className="players-profiles">
                <div className="profile-box">
                  <Image
                    src={Images.infrastructure.marble1}
                    alt="player-profile"
                    width={64}
                    height={64}
                  />

                  <div className="text lexend-body-md">Player Profile</div>
                </div>
                <div className="profile-box">
                  <Image
                    src={Images.infrastructure.marble2}
                    alt="player-profile"
                    width={64}
                    height={64}
                  />

                  <div className="text lexend-body-md">Player Profile</div>
                </div>
                <div className="profile-box">
                  <Image
                    src={Images.infrastructure.marble3}
                    alt="player-profile"
                    width={64}
                    height={64}
                  />

                  <div className="text lexend-body-md">Player Profile</div>
                </div>
              </div>
              <div className="profile-texts">
                <div className="profile-text-box lexend-body-s gray300">
                  <div className="profile-text">Pubilications</div>
                </div>
                <div className="profile-text-box lexend-body-s gray300">
                  <div className="profile-text">Pubilications</div>
                </div>
                <div className="profile-text-box lexend-body-s gray300">
                  <div className="profile-text">Pubilications</div>
                </div>
              </div>
              <div className="checkpoint">
                <div className="lexend-body-md">Validator Checkpoint Node</div>
              </div>
              <div className="marbles">
                <div className="marble">
                  <Image
                    src={Images.infrastructure.marble1}
                    alt="player-profile"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="marble">
                  <Image
                    src={Images.infrastructure.marble2}
                    alt="player-profile"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="marble">
                  <Image
                    src={Images.infrastructure.marble3}
                    alt="player-profile"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="gaming-network">
                <div className="lexend-body-md">Gaming Data Network</div>
              </div>
            </div>
            <div className={clsx('right-section', active === 1 && 'active')}>
              <div className="players-profiles">
                <div className="profile-box equal with-line">
                  <Image
                    src={Images.infrastructure.games}
                    className="social"
                    alt="player-profile"
                    width={78}
                    height={88}
                  />

                  <div className="text lexend-body-md">Games</div>
                </div>
                <div className="profile-box equal with-line">
                  <Image
                    src={Images.infrastructure.communities}
                    className="social"
                    alt="player-profile"
                    width={72}
                    height={88}
                  />

                  <div className="text lexend-body-md">Communities</div>
                </div>
              </div>
              <div className="gaming-network">
                <div className="lexend-body-md">Questing Engine</div>
              </div>
              <div className="profile-texts">
                <div className="profile-text-box lexend-body-s gray300">
                  <div className="profile-text">&nbsp;</div>
                </div>
                <div className="profile-text-box lexend-body-s gray300">
                  <div className="profile-text">Pubilications</div>
                </div>
                <div className="profile-text-box lexend-body-s gray300">
                  <div className="profile-text">&nbsp;</div>
                </div>
              </div>
              <div className="checkpoint">
                <div className="lexend-body-md">Gaming Social Layer</div>
              </div>
            </div>
            <div className={clsx('right-section', active === 2 && 'active')}>
              <div className="reputation-boxes">
                <div className="mid-line"></div>
                <div className="left">
                  <div className="players-profiles">
                    <div className="profile-box with-line long right-line">
                      <Image
                        src={Images.infrastructure.marble2}
                        alt="player-profile"
                        width={64}
                        height={64}
                      />

                      <div className="text lexend-body-md">Player Profile</div>
                    </div>
                  </div>
                  <div className="checkpoint with-line long">
                    <div className="lexend-body-md">Validator Nodes</div>
                  </div>
                  <div className="gaming-network">
                    <div className="lexend-body-md">Gaming Publications</div>
                  </div>
                </div>
                <div className="right">
                  <div className="reputation lexend-body-md">
                    Reputation <br /> System
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
