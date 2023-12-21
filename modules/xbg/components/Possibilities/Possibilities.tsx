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
    <div className="possibilities">
      <div className="container">
        <ObserverContainer className="flex column">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            Unlocking a new world of possibilities
          </h2>
        </ObserverContainer>

        <div className="flex between">
          <ObserverContainer className="list flex column lexend-body-sl">
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

            <div className="flex middle list-index lexend-body-md">
              <span className="current">0{active + 1}</span>
              <div className="spacer" />
              <span className="total">0{PossibilitiesData.length}</span>
            </div>
          </ObserverContainer>

          <div
            className={`content flex column middle center ${
              active === 0 ? 'active' : 'inactive'
            }`}
          >
            <ImageComponent img={PossibilitiesData[0].icon} />
            <div className="lexend-heading-xl">
              {PossibilitiesData[0].title}
            </div>
            <div className="lexend-body-md l">
              {PossibilitiesData[0].description}
            </div>
          </div>
          <div
            className={`content flex column middle center ${
              active === 1 ? 'active' : 'inactive'
            }`}
          >
            <ImageComponent img={PossibilitiesData[1].icon} />
            <div className="lexend-heading-xl">
              {PossibilitiesData[1].title}
            </div>
            <div className="lexend-body-md l">
              {PossibilitiesData[1].description}
            </div>
          </div>
          <div
            className={`content flex column middle center ${
              active === 2 ? 'active' : 'inactive'
            }`}
          >
            <ImageComponent img={PossibilitiesData[2].icon} />
            <div className="lexend-heading-xl">
              {PossibilitiesData[2].title}
            </div>
            <div className="lexend-body-md l">
              {PossibilitiesData[2].description}
            </div>
          </div>
          <div
            className={`content flex column middle center ${
              active === 3 ? 'active' : 'inactive'
            }`}
          >
            <ImageComponent img={PossibilitiesData[3].icon} />
            <div className="lexend-heading-xl">
              {PossibilitiesData[3].title}
            </div>
            <div className="lexend-body-md l">
              {PossibilitiesData[3].description}
            </div>
          </div>
          <div
            className={`content flex column middle center ${
              active === 4 ? 'active' : 'inactive'
            }`}
          >
            <ImageComponent img={PossibilitiesData[4].icon} />
            <div className="lexend-heading-xl">
              {PossibilitiesData[4].title}
            </div>
            <div className="lexend-body-md l">
              {PossibilitiesData[4].description}
            </div>
          </div>
        </div>
      </div>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -200,
          }}
          to={{
            y: 200,
          }}
        >
          <div className="parallax-bubble">
            <Image
              src={Images.landing.sphere_blur}
              alt=""
              width={57}
              height={57}
            />
          </div>
        </Tween>
      </Scene>
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
      <Image src={img} alt="" width={300} height={300} />
    </div>
  );
};
