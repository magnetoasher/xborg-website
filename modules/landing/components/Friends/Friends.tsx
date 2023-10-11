import { Images } from '@/assets/imgs';
import { splitLines } from '@/modules/utils/utils';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Friends = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  const friends = [
    {
      image: Images.friends.swissborg,
      name: 'Swissborg',
    },
    {
      image: Images.friends.polygon,
      name: 'Polygon',
    },
    {
      image: Images.friends.myria,
      name: 'Myria',
    },
    {
      image: Images.friends.brave,
      name: 'Brave',
    },
    {
      image: Images.friends.ultra,
      name: 'Ultra',
    },
    {
      image: Images.friends.bds,
      name: 'Team BDS',
    },
    {
      image: Images.friends.mante,
      name: 'Mante',
    },
    {
      image: Images.friends.zilliqa,
      name: 'Zilliqa',
    },
    {
      image: Images.friends.games,
      name: 'Gam3s',
    },
    {
      image: Images.friends.communitygaming,
      name: 'Community Gaming',
    },
  ];

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-friends flex middle center">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides
        loop
        modules={[Autoplay, Pagination, Navigation]}
        speed={3000}
        autoplay={{
          delay: 0,
        }}
      >
        {[]
          .concat(friends, friends, friends, friends, friends, friends, friends)
          .map((friend, index) => (
            <SwiperSlide key={index}>
              <img src={friend.image} alt={friend.name} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
