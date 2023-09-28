import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { useMousePosition } from '@/modules/utils';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

export const Posibilities = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  const data = [
    {
      title: 'Player discovery',
      description:
        'Get discovered by an esports team or find a new ranked teammate. Let your identity do the talking.',
      icon: Images.landing.discovery1,
    },
    {
      title: 'Brand and game opportunities',
      description:
        'Get discovered by an esports team or find a new ranked teammate. Let your identity do the talking.',
      icon: Images.landing.discovery2,
    },
    {
      title: 'Asset lending',
      description:
        'Get discovered by an esports team or find a new ranked teammate. Let your identity do the talking.',
      icon: Images.landing.discovery3,
    },
    {
      title: 'Invest in games',
      description:
        'Get discovered by an esports team or find a new ranked teammate. Let your identity do the talking.',
      icon: Images.landing.discovery4,
    },
  ];

  return (
    <div className="landing-posibilities">
      <div className="container">
        <ObserverContainer className="flex column">
          <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
            Unlocking a new world of possibilities
          </h2>
        </ObserverContainer>

        <div className="flex between">
          <ObserverContainer className="list flex column lexend-body-sl">
            {data.map((item, index) => (
              <Link
                href=""
                className={`flex middle between ${
                  active === index ? 'active' : 'inactive'
                }`}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(index);
                }}
              >
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
              </Link>
            ))}

            <div className="flex middle list-index lexend-body-md">
              <span className="current">0{active + 1}</span>
              <div className="spacer" />
              <span className="total">0{data.length}</span>
            </div>
          </ObserverContainer>

          <div
            className={`content flex column middle center ${
              active === 0 ? 'active' : 'inactive'
            }`}
          >
            <Image src={data[0].icon} alt="" width={300} height={300} />
            <div className="lexend-heading-xl">{data[0].title}</div>
            <div className="lexend-body-md l">{data[0].description}</div>
          </div>
          <div
            className={`content flex column middle center ${
              active === 1 ? 'active' : 'inactive'
            }`}
          >
            <Image src={data[1].icon} alt="" width={300} height={300} />
            <div className="lexend-heading-xl">{data[1].title}</div>
            <div className="lexend-body-md l">{data[1].description}</div>
          </div>
          <div
            className={`content flex column middle center ${
              active === 2 ? 'active' : 'inactive'
            }`}
          >
            <Image src={data[2].icon} alt="" width={300} height={300} />
            <div className="lexend-heading-xl">{data[2].title}</div>
            <div className="lexend-body-md l">{data[2].description}</div>
          </div>
          <div
            className={`content flex column middle center ${
              active === 3 ? 'active' : 'inactive'
            }`}
          >
            <Image src={data[3].icon} alt="" width={300} height={300} />
            <div className="lexend-heading-xl">{data[3].title}</div>
            <div className="lexend-body-md l">{data[3].description}</div>
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
