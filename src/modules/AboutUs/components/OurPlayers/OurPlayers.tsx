import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ObserverContainer, SectionHead } from "../../../../components";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../../reducer";
import { Images } from "../../../../assets/imgs/Images";
import { SinglePlayerType } from "../../../../redux/aboutUs/types";

export const OurPlayers = () => {
  const { tournamentsWon, tournamentWinning, players } = useSelector(
    (state: GlobalState) => state.aboutUs,
  );
  return (
    <div className={`our-players expand row middle between`}>
      <div className='description expand row column'>
        <SectionHead
          title='Meet Our Players'
          description='We compete at the highest level across the most competitive games Web3 has to offer.'
        />

        <div className='statistics row between'>
          <div className='col'>
            <div className='stats-value'>{tournamentsWon}</div>
            <div className='stats-label'>Tournaments Won</div>
          </div>
          <div className='col'>
            <div className='stats-value'>
              ${tournamentWinning.toLocaleString()}
            </div>
            <div className='stats-label'>Tournament Winnings</div>
          </div>
        </div>
      </div>
      <ObserverContainer className='expand players-swiper'>
        <a href='#' className='swiper-prev'>
          <img src={Images.chevron_left.default} />
        </a>
        <a href='#' className='swiper-next'>
          <img src={Images.chevron_right.default} />
        </a>
        <Swiper
          parallax
          pagination={{
            clickable: true,
          }}
          centeredSlides
          speed={500}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          {players.map((player: SinglePlayerType, index: number) => (
            <SwiperSlide key={index} className='row column'>
              <img src={Images.aboutUs.players.member01} alt={player.name} />

              <div className='swiper-name'>{player.name}</div>
              <div className='swiper-description'>{player.description}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ObserverContainer>
    </div>
  );
};
