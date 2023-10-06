import Link from 'next/link';
import { ReactNode } from 'react';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react';

export type SpringSwiperProps = {
  children: ReactNode;
  className?: string;
  options?: SwiperProps;
  id?: string;
};

export const SpringSwiper = ({
  children,
  className,
  options,
  id = '1',
}: SpringSwiperProps) => {
  let progress = 0,
    t = !1;

  return (
    <div className="spring-swiper-container">
      <Swiper
        className={`spring-swiper ${className ?? ''}`}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={'auto'}
        followFinger={false}
        navigation={{
          prevEl: '.swiper-prev-' + id,
          nextEl: '.swiper-next-' + id,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        {...options}
      >
        {children}
      </Swiper>

      <Link href="" className={`swiper-prev swiper-prev-${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M11.0666 15.5668L19.0666 7.5668L20.9332 9.43347L14.7999 15.5668L20.9332 21.7001L19.0666 23.5668L11.0666 15.5668Z"
            fill="#727272"
          />
        </svg>
      </Link>

      <Link href="" className={`swiper-next swiper-next-${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M20.9334 15.5666L12.9334 23.5667L11.0668 21.7L17.2001 15.5667L11.0668 9.43332L12.9334 7.56665L20.9334 15.5666Z"
            fill="#727272"
          />
        </svg>
      </Link>
    </div>
  );
};
