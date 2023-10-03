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
              A collaborative credential infrastructure powering the next
              generation of gaming with the world's leading esports teams.
            </p>
          </ObserverContainer>

          <SocialIcons />
        </div>

        <div className="footer-actions flex column">
          <div className="flex cols between">
            <div className="col flex column top">
              <div className="category lexend-body-s">ECOSYSTEM</div>
              <Link href="">
                <span>Infrastructure</span>
              </Link>
              <Link href="">
                <span>Applications</span>
              </Link>
              <Link href="">
                <span>Roadmap</span>
              </Link>
              <Link href="">
                <span>XBG</span>
              </Link>
            </div>
            <div className="col flex column top">
              <div className="category lexend-body-s">PRODUCTS</div>
              <Link href="">
                <span>GamerBase</span>
              </Link>
              <Link href="">
                <span>Launchpad</span>
              </Link>
              <Link href="">
                <span>Explorer</span>
              </Link>
            </div>
            <div className="col flex column top">
              <div className="category lexend-body-s">COMMUNITY</div>
              <Link href="">
                <span>Hub</span>
              </Link>
              <Link href="">
                <span>Prometheus</span>
              </Link>
              <Link href="">
                <span>Governance</span>
              </Link>
              <Link href="">
                <span>Esports</span>
              </Link>
            </div>
            <div className="col flex column top">
              <div className="category lexend-body-s">COMPANY</div>
              <Link href="">
                <span>About</span>
              </Link>
              <Link href="">
                <span>Blog</span>
              </Link>
              <Link href="">
                <span>FAQ</span>
              </Link>
              <Link href="">
                <span>Careers</span>
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
