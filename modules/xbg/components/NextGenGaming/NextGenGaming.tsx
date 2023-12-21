import { Images } from '@/assets/imgs';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { NextGenGamingBubbles } from './Bubbles';
import { NextGenGamingTokens } from './Tokens';
import Tokenomics from './Tokenomics';

export const NextGenGaming = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="main-container">
      <Tokenomics />
      <div className="next-gen-gaming">
        <div className="container">
          <ObserverContainer className="flex column">
            <h2 className="integralfc-h2 reveal-from-bottom" ref={ref}>
              The next generation of gaming is decentralised
            </h2>

            <p className=" section-description lexend-body-sm l">
              Shape the trajectory of next-gen gaming applications and vote on
              key ecosystem decisions with $XBG.
            </p>
          </ObserverContainer>
        </div>

        <div className="background-container">
          <Image
            className="background"
            alt=""
            quality={100}
            width={2828}
            height={1736}
            src={Images.landing.nextgen_gaming_bg}
          />

          <ObserverContainer className="main-bubble">
            <Image src={Images.xbg.sphere11} alt="" width={139} height={136} />
          </ObserverContainer>

          <div className="orbit flex column">
            <ObserverContainer className="orbit-content flex expand">
              <div className="gamerbase-sphere">
                <Image
                  src={Images.landing.sphere3}
                  alt=""
                  width={75}
                  height={75}
                />

                <span className="lexend-body-sxl sphere-title">GamerBase</span>
              </div>

              <div className="launchpad-sphere">
                <Image
                  src={Images.landing.sphere3}
                  alt=""
                  width={75}
                  height={75}
                />

                <span className="lexend-body-sxl sphere-title">Launchpad</span>
              </div>

              <div className="xborgid-sphere">
                <Image
                  src={Images.landing.sphere3}
                  alt=""
                  width={75}
                  height={75}
                />

                <span className="lexend-body-sxl sphere-title">
                  Decentralised esports
                </span>
              </div>
            </ObserverContainer>
          </div>
        </div>

        <NextGenGamingBubbles />
        <NextGenGamingTokens />
      </div>
    </div>
  );
};
