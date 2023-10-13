import Link from 'next/link';

import { Brand } from '@/components/Brand';
import { useEffect, useState } from 'react';
import { BtnDark } from '@/components/Buttons';
import { scrollTo } from '@/modules/utils';

export const Navigation = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <nav
      className={`navigation flex between middle${loading ? ' out' : ' in'}`}
    >
      <div className="container flex middle center lexend-body-md">
        <ul className="flex left end">
          <li className="middle flex">
            <Link href="">Ecosystem</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 15.8746L6 9.87461L7.4 8.47461L12 13.0746L16.6 8.47461L18 9.87461L12 15.8746Z"
                fill="#F0F0F0"
              />
            </svg>
          </li>
          <li className="middle flex">
            <Link href="">Product</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 15.8746L6 9.87461L7.4 8.47461L12 13.0746L16.6 8.47461L18 9.87461L12 15.8746Z"
                fill="#F0F0F0"
              />
            </svg>
          </li>
        </ul>
        <div className="brand">
          <Brand />
        </div>
        <ul className="flex right start">
          <li className="middle flex">
            <Link href="">Community</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 15.8746L6 9.87461L7.4 8.47461L12 13.0746L16.6 8.47461L18 9.87461L12 15.8746Z"
                fill="#F0F0F0"
              />
            </svg>
          </li>
          <li className="middle flex">
            <Link href="">Company</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 15.8746L6 9.87461L7.4 8.47461L12 13.0746L16.6 8.47461L18 9.87461L12 15.8746Z"
                fill="#F0F0F0"
              />
            </svg>
          </li>
        </ul>
      </div>

      <div className="explore-apps flex">
        <BtnDark
          label="Explore Apps"
          href=""
          onClick={(e: any) => {
            e.preventDefault();
            const hero = document.getElementsByClassName('landing-next-gen')[0];
            const rect = hero.getBoundingClientRect();
            scrollTo(window.scrollY, window.scrollY + rect.y, 0);
          }}
        />
      </div>
    </nav>
  );
};
