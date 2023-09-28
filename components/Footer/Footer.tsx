import Link from 'next/link';

import { Brand } from '@/components/Brand';
import { useEffect, useState } from 'react';
import { BtnDark } from '@/components/Buttons';

export const Footer = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <footer className="footer flex">
      <div className="container flex">
        <div className="footer-about">
          <Brand />

          <p className="lexend-body-sm">
            A collaborative credential infrastructure powering the next
            generation of gaming with the world's leading esports teams.
          </p>
        </div>

        <div className="footer-actions flex column">
          <div className="flex cols between">
            <div className="col flex column">
              <div className="category lexend-body-s">ECOSYSTEM</div>
              <Link href="">Infrastructure</Link>
              <Link href="">Applications</Link>
              <Link href="">Roadmap</Link>
              <Link href="">XBG</Link>
            </div>
            <div className="col flex column">
              <div className="category lexend-body-s">PRODUCTS</div>
              <Link href="">GamerBase</Link>
              <Link href="">Launchpad</Link>
              <Link href="">Explorer</Link>
            </div>
            <div className="col flex column">
              <div className="category lexend-body-s">COMMUNITY</div>
              <Link href="">Hub</Link>
              <Link href="">Prometheus</Link>
              <Link href="">Governance</Link>
              <Link href="">Esports</Link>
            </div>
            <div className="col flex column">
              <div className="category lexend-body-s">COMPANY</div>
              <Link href="">About</Link>
              <Link href="">Blog</Link>
              <Link href="">FAQ</Link>
              <Link href="">Careers</Link>
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
