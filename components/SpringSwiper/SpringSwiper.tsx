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

      {/* <BtnTransparent
        href=""
        label=""
        icon={<Icon.chevronLeft size={16} />}
        className={`swiper-prev swiper-prev-${id}`}
      />

      <BtnTransparent
        href=""
        label=""
        icon={<Icon.chevronRight size={16} />}
        className={`swiper-next swiper-next-${id}`}
      /> */}
    </div>
  );
};
