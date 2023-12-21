import Link from 'next/link';
import { ObserverContainer } from '../ObserverContainer';
import { SocialIcons } from '@/components/SocialIcons';
import { Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import Image from 'next/image';
import { Images } from '@/assets/imgs';
import { FooterLinksData } from '@/constants';

export const Footer = () => {
  return (
    <footer className="footer">
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
      <div className="inner-container">
        <div className="footer-about">
          <ObserverContainer className="flex column top" rootMargin="0%">
            <div className="top-box">
              <Link href="/">
                <Image
                  src="/images/about/common/logo.svg"
                  alt=""
                  width={35}
                  height={35}
                />
              </Link>
              <p>
                A collaborative credential infrastructure powering the next
                generation of gaming with the world&apos;s leading esports
                teams.
              </p>
            </div>
          </ObserverContainer>
          <div className="bottom-box">
            <div className="icons-box">
              <SocialIcons />
            </div>
            <div className="line" />
          </div>
        </div>
        <div className="footer-actions">
          <div className="footer-links">
            {FooterLinksData?.map((linkData, index: number) => (
              <div key={index} className="link-list">
                <p>{linkData?.type}</p>
                {linkData.links.map((link, i: number) => (
                  <Link key={i} href={link.to} className="link">
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="bottom-box">
            <div className="line" />
            <div className="inner-box">
              <span>
                &copy; XBorg. 2023 &mdash; All rights reserved.&rsquo;
              </span>
              <div className="link-box">
                <Link href="" className="link">
                  Privacy Policy
                </Link>
                <Link href="" className="link">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
