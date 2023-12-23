import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { useMousePosition } from '@/modules/utils';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import VanillaTilt from 'vanilla-tilt';
import { PossibilitiesData } from '@/constants';

let timerId: any = null;
export const Possibilities = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  useEffect(() => {
    timerId = setInterval(() => {
      if (active + 1 === PossibilitiesData.length) setActive(0);
      else setActive(active + 1);
    }, 8000);

    return () => clearInterval(timerId);
  });

  return (
    <div className="xbg-possibilities">
      <div className="container">
        <ObserverContainer className="flex column">
          <h2 className="integralfc-h2 " ref={ref}>
            One token, for millions of players
          </h2>
        </ObserverContainer>

        <div className="flex between inner-container">
          <ObserverContainer className="list-container flex  lexend-body-sl">
            <div className="list">
              {PossibilitiesData.map((item, index) => (
                <Link
                  href=""
                  className={`flex expand ${
                    active === index ? 'active' : 'inactive'
                  }`}
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    clearInterval(timerId);
                    setActive(index);

                    timerId = setInterval(() => {
                      if (active + 1 === PossibilitiesData.length) setActive(0);
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
            </div>
            <div className="flex middle list-index lexend-body-md">
              <span className="current">0{active + 1}</span>
              <div className="spacer" />
              <span className="total">0{PossibilitiesData.length}</span>
            </div>
            <div className="pagination lexend-body-md">
              <span
                onClick={() => active > 0 && setActive(active - 1)}
                className={active > 0 && 'active'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span
                onClick={() => active < 4 && setActive(active + 1)}
                className={active < 4 && 'active'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </ObserverContainer>

          <div
            className={`content flex column middle center ${
              active !== null ? 'active' : 'inactive'
            }`}
          >
            <ImageComponent img={PossibilitiesData[active].icon} />
            <div className="lexend-heading-xl">
              {PossibilitiesData[active].title}
            </div>
            <div className="lexend-body-md l dec">
              {PossibilitiesData[active].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageComponent = ({ img }: { img: any }) => {
  const activeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (activeRef.current)
      VanillaTilt.init(activeRef.current, {
        max: 0.01,
        scale: 1,
        glare: true,
        'max-glare': 1.5,
      });
  }, []);

  return (
    <div className="content-image" ref={activeRef}>
      <Image src={img} alt="" quality={100} width={300} height={300} />
    </div>
  );
};
