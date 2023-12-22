import { Images } from '@/assets/imgs';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Scene } from 'react-scrollmagic';

const Bubbles = () => {
  return (
    <div className="growing-background-wrapper">
      <ObserverContainer className="main-bubble">
        <Image
          src={Images.xbg.empoweringPlayersBg}
          alt=""
          quality={100}
          width={1200}
          height={700}
        />
        <div className="orbit flex column">
          <ObserverContainer className="orbit-content flex expand">
            <div className="circle-1">
              <Image
                alt=""
                quality={100}
                fill
                sizes="(max-width: 768): 900px, 1200px"
                src={Images.landing.circle}
              />
            </div>
            <div className="circle-2">
              <Image
                alt=""
                quality={100}
                fill
                sizes="(max-width: 768): 600px, 900px"
                src={Images.landing.circle}
              />
            </div>
            <div className="lexend-body-sm l sphere sphere-1">
              Onboarding large esports teams
            </div>
            <div className="lexend-body-sm l sphere sphere-2">
              Attracting more gaming communities
            </div>
            <div className="lexend-body-sm l sphere sphere-3">
              Increasing players within the ecosystem
            </div>
            <div className="lexend-body-sm l sphere sphere-4">
              Building a larger credential network
            </div>
            <div className="lexend-body-sm l sphere sphere-5">
              Attracting games and developers
            </div>
            <div className="lexend-body-sm l sphere sphere-6">
              Developing XBorg-powered apps
            </div>
            <div className="lexend-body-sm l sphere sphere-7">
              Improving ecosystem retention & usage
            </div>
            <div className="lexend-body-sm l sphere sphere-8">
              Increasing $XBG utility
            </div>
          </ObserverContainer>
        </div>
      </ObserverContainer>
    </div>
  );
};

export default Bubbles;
