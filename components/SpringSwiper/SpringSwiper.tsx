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
        effect={'creative'}
        creativeEffect={{
          limitProgress: 100,
          prev: {
            translate: ['-100%', 0, 0],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={'auto'}
        followFinger={false}
        navigation={{
          prevEl: '.swiper-prev-' + id,
          nextEl: '.swiper-next-' + id,
        }}
        modules={[EffectCreative, Pagination, Navigation, Autoplay]}
        onProgress={(swiper) => {
          if (t) return;
          const dir = swiper.progress > progress ? 'next' : 'prev';
          progress = swiper.progress;

          const speed = swiper.params.speed ?? 0;
          const y = speed / 16;
          let indexes: any[] = [];

          for (let i = 0; i < swiper.slides.length; i++) {
            indexes.push(i);
          }

          const first = indexes?.[0];
          const last = indexes?.[indexes.length - 1];

          if (!first && !last) return;

          const handleDelays = (container: HTMLElement, index: number) => {
            dir === 'next' && index >= first
              ? (container.style.transitionDelay = `${
                  (index - first + 1) * y
                }ms`)
              : dir === 'prev' && index <= last + 1
              ? (container.style.transitionDelay = `${
                  (last - index + 1) * y
                }ms`)
              : (container.style.transitionDelay = `${0}ms`);
          };
          swiper.slides.forEach((container, index) => {
            swiper.animating
              ? ((container.style.transitionDelay = '0ms'),
                requestAnimationFrame(() => {
                  handleDelays(container, index);
                }))
              : handleDelays(container, index);
          });
        }}
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
