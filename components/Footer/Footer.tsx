import Link from 'next/link';

import { Brand } from '@/components/Brand';
import { useEffect, useState } from 'react';
import { BtnDark } from '@/components/Buttons';
import { ObserverContainer } from '../ObserverContainer';
import { SocialIcons } from '@/modules/landing';
import { Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import Image from 'next/image';
import { Images } from '@/assets/imgs';

export const Footer = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <footer className="footer flex">
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
            <Image src={Images.landing.sphere3} alt="" width={92} height={92} />
          </div>
        </Tween>
      </Scene>

      <div className="container flex">
        <div className="footer-about flex column between">
          <ObserverContainer className="flex column top" rootMargin="0%">
            <Brand />

            <p className="lexend-body-sm">
              The Gaming social layer, onboarding millions of players with a
              gaming identity and application ecosystem
            </p>
          </ObserverContainer>

          <SocialIcons />
        </div>

        <div className="footer-actions flex column">
          <div className="flex cols between">
            <div className="col flex column top">
              <div className="category lexend-body-s">ECOSYSTEM</div>
              <Link href="">
                <span>Roadmap</span>
              </Link>
              <Link href="">
                <span>We are hiring!</span>
              </Link>
            </div>
            <div className="col flex column top">
              <div className="category lexend-body-s">PRODUCTS</div>
              <Link href="https://gamerbase.gg">
                <span>GamerBase</span>
              </Link>
              <Link href="https://launchpad.xborg.com/">
                <span>Launchpad</span>
              </Link>
            </div>
            <div className="col flex column top">
              <div className="category lexend-body-s">LEGAL</div>
              <Link href="">
                <span>Privacy Policy</span>
              </Link>
              <Link href="">
                <span>Terms and conditions</span>
              </Link>
            </div>
          </div>
          <div className="spacer" />
          <div className="copyright lexend-body-sm l">
            © XBorg. 2023 — All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
