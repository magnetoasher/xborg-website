import Link from 'next/link';

import { GLOBAL_ROUTES } from '@/routes';

export const Brand = () => {
  let brandRedirect = GLOBAL_ROUTES.LANDING;

  return (
    <Link href={brandRedirect} className="site-brand">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
      >
        <g filter="url(#filter0_d_1729_1104)">
          <path
            d="M44 10V19.9521L34.6685 26.9735H20.3315L11 19.9521V10L27.5 22.2724L44 10Z"
            fill="#EB3A4A"
          />
        </g>
        <g filter="url(#filter1_d_1729_1104)">
          <path
            d="M44 45.1376V35.1855L34.6685 28.1641H20.3315L11 35.1855V45.1376L27.5 32.8651L44 45.1376Z"
            fill="#EB3A4A"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1729_1104"
            x="4.17241"
            y="3.17241"
            width="46.6552"
            height="30.6278"
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
            <feGaussianBlur stdDeviation="3.41379" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.458333 0 0 0 0 0.507297 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1729_1104"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1729_1104"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_1729_1104"
            x="4.17241"
            y="21.3365"
            width="46.6552"
            height="30.6278"
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
            <feGaussianBlur stdDeviation="3.41379" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.458333 0 0 0 0 0.507297 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1729_1104"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1729_1104"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Link>
  );
};
