import { useMousePosition } from '@/modules/utils';
import { distance, scrollTo } from '@/modules/utils/utils';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export const ScrollDown = () => {
  const { mouseX, mouseY } = useMousePosition();
  const ref = useRef(null);
  const [visible, setVisibility] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);

    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  }, []);

  useEffect(() => {
    let x = 0;
    let y = 0;

    if (ref) {
      const node = ref.current;

      // New values for the translations
      const rect = node.getBoundingClientRect();
      const distanceToTrigger = rect.width * 0.7;
      const distanceMouseButton = distance(
        mouseX + window.scrollX,
        mouseY + window.scrollY,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      );

      // Handle magnetic effect
      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2;
        y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      } else {
        // Restore initial position
        node.style.transform = `translate3d(0, 0, 0)`;
      }
    }
  }, [mouseX, mouseY, ref]);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };

  return (
    <div
      className={`scroll-down lexend-body-s l ${
        visible ? ' visible' : 'hidden'
      }`}
      ref={ref}
    >
      <Link
        href=""
        className="column flex middle"
        onClick={(e) => {
          e.preventDefault();
          const hero = document.getElementsByClassName('landing-onboarding')[0];
          const rect = hero.getBoundingClientRect();
          scrollTo(window.scrollY, window.scrollY + rect.y, 0);
        }}
      >
        <span>Scroll down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="15"
          viewBox="0 0 23 15"
          fill="none"
        >
          <g filter="url(#filter0_d_964_1734)">
            <path
              d="M19 4V8.52366L14.7584 11.7152H8.2416L4 8.52366V4L11.5 9.57838L19 4Z"
              fill="#EB3A4A"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_964_1734"
              x="0.896552"
              y="0.896552"
              width="21.2069"
              height="13.9221"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.55172" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.458333 0 0 0 0 0.507297 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_964_1734"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_964_1734"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Link>
    </div>
  );
};
