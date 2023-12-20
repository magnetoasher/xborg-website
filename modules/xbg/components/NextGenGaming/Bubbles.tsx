import Image from 'next/image';
import { Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';
import { Images } from '@/assets/imgs';

export const NextGenGamingBubbles = () => {
  return (
    <>
      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble">
            <span className="lexend-body-sxl title">Esports teams</span>
            <Image
              src={Images.landing.sphere5}
              alt=""
              width={160}
              height={160}
            />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble2">
            <Image src={Images.landing.sphere5} alt="" width={61} height={61} />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: -0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble3">
            <span className="lexend-body-sxl title">Games</span>
            <Image src={Images.landing.sphere6} alt="" width={76} height={76} />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble4">
            <span className="lexend-body-sxl title">Brands</span>
            <Image
              src={Images.landing.sphere7}
              alt=""
              width={111}
              height={111}
            />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble5">
            <span className="lexend-body-sxl title">Sports teams</span>
            <Image src={Images.landing.sphere8} alt="" width={92} height={92} />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble6">
            <Image src={Images.landing.sphere7} alt="" width={14} height={14} />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble7">
            <span className="lexend-body-sxl title">Influencers</span>
            <Image
              src={Images.landing.sphere9}
              alt=""
              width={120}
              height={120}
            />
          </div>
        </Tween>
      </Scene>

      <Scene duration="200%" triggerHook="onEnter">
        <Tween
          position="0"
          from={{
            y: 0,
          }}
          to={{
            y: 0,
          }}
        >
          <div className="parallax-bubble8">
            <Image
              src={Images.landing.sphere_blur}
              alt=""
              width={48}
              height={48}
            />
          </div>
        </Tween>
      </Scene>
    </>
  );
};
