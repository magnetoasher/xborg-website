import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ObserverContainer, SectionHead } from "../../../../components";
import { Images } from "../../../../assets/imgs/Images";
import { SinglePlayerType } from "../../../../redux/aboutUs/types";
import { Link } from "react-router-dom";

export const OurPlayers = () => {
  const players: SinglePlayerType[] = [
    {
      image: Images.aboutUs.players.lex,
      name: "Lex",
      description: "XBorg ev.io captain",
    },
    {
      image: Images.aboutUs.players.eskezje,
      name: "Eskezje",
      description: "XBorg ev.io player",
    },
    {
      image: Images.aboutUs.players.bicboi,
      name: "BicBoi",
      description: "XBorg ev.io player",
    },
    {
      image: Images.aboutUs.players.m2rk,
      name: "M2rk",
      description: "XBorg ev.io player",
    },
    {
      image: Images.aboutUs.players.xen0,
      name: "Xen0",
      description: "XBorg ev.io player",
    },
    {
      image: Images.aboutUs.players.sjud,
      name: "SJUD",
      description: "XBorg Illuvium captain",
    },
  ];
  const tournamentsWon = 34;
  const tournamentWinning = 50000;

  return (
    <div className={`our-players expand row middle between`}>
      <div className="description expand row column">
        <SectionHead
          title="Meet Our Players"
          description="We compete at the highest level across the most competitive games Web3 has to offer."
        />

        <div className="statistics row between">
          <div className="col">
            <div className="stats-value">{tournamentsWon}</div>
            <div className="stats-label">Tournaments Won</div>
          </div>
          <div className="col">
            <div className="stats-value">
              ${tournamentWinning.toLocaleString()}
            </div>
            <div className="stats-label">Tournament Winnings</div>
          </div>
        </div>
      </div>
      <ObserverContainer className="expand players-swiper">
        <Link to="" className="swiper-prev">
          <img src={Images.chevron_left.default} alt="left" />
        </Link>
        <Link to="" className="swiper-next">
          <img src={Images.chevron_right.default} alt="right" />
        </Link>
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
            <SwiperSlide key={index} className="row column">
              <img src={player.image} alt={player.name} />

              <div className="swiper-name">{player.name}</div>
              <div className="swiper-description">{player.description}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ObserverContainer>
    </div>
  );
};
