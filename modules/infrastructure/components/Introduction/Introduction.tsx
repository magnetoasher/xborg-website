import Image from 'next/image';

import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { Images } from '@/assets/imgs';

export const Introduction = () => {
  return (
    <div className="infrastructure-introduction">
      <Image
        src={Images.infrastructure.topLeft}
        width={991}
        height={417}
        className="top-left"
        alt="top-left"
      />
      <div className="introduction-content flex column center">
        <ObserverContainer className="container">
          <div className="introduction-main">
            <div className="flex column center introduction-left">
              <span className="lexend-text-sm">
                The Gaming credential infrastructure
              </span>

              <h1 className="integralfc-h1">GAME-CHANGING INFRASTRUCTURE</h1>

              <div className="lexend-body-sm">
                A decentralised, non-custodial social graph, empowering players
                to take full ownership of their gaming identities and enabling
                developers to build next-gen applications.
              </div>

              <div className="flex actions">
                <BtnRed
                  label="View Whitepaper"
                  href=""
                  className="lexend-body-sxl"
                  onClick={(e: any) => {}}
                />
              </div>
            </div>
            <div className="introduction-right">
              <Image
                className="bg"
                src={Images.infrastructure.introductionRight}
                width={870}
                height={600}
                alt="right"
              />
              <Image
                className="bg sm"
                src={Images.infrastructure.introductionRightSm}
                width={428}
                height={483}
                alt="right"
              />
              <div className="inner-content">
                <div className="first"></div>
                <div className="text-center">
                  <Image
                    className="intro-logo"
                    src={Images.infrastructure.introductionLogo}
                    width={98}
                    height={98}
                    alt="right"
                  />
                  <div className="lexend-body-xs">User id:</div>
                  <div className="lexend-body-sm xborg-id">Random xBorg ID</div>
                </div>
                <div className="pills flex center flex-wrap">
                  <div className="w-full flex center flex-wrap">
                    <Image
                      src={Images.infrastructure.lock}
                      width={60}
                      height={48}
                      alt="lock"
                    />
                  </div>
                  <div className="w-full flex center flex-wrap">
                    <div className="pill">
                      <div className="pill-inner">
                        <div className="pill-text">Soulbound Launchpad</div>
                      </div>
                    </div>
                  </div>
                  <div className="pill">
                    <div className="pill-inner">
                      <div className="pill-text">Soulbound Launchpad</div>
                    </div>
                  </div>
                  <div className="pill">
                    <div className="pill-inner">
                      <div className="pill-text">Soulbound Launchpad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ObserverContainer>
      </div>
    </div>
  );
};
