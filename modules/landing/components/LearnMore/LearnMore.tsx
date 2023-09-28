import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { SpringSwiper } from '@/components/SpringSwiper';
import { splitLines } from '@/modules/utils/utils';
import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';

export const LearnMore = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-learnmore">
      <div className="container flex column">
        <div className="list flex flex-wrap">
          <div className="block-container">
            <div className="block expand">item</div>
          </div>
          <div className="block-container">
            <div className="block expand">item</div>
          </div>
          <div className="block-container">
            <div className="block expand">item</div>
          </div>
          <div className="block-container">
            <div className="block expand">item</div>
          </div>
        </div>
      </div>
    </div>
  );
};
