import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  ButtonSecondary,
  CountUpAnimation,
  ObserverContainer,
  ParallaxLayer,
  SectionHead,
  Tabs,
} from "../../../../components";
import { halloffame } from "../../../../localdata/halloffame";
import { players } from "../../../../localdata/players";

export const Community = () => {
  const [tab, onTabChange] = useState<number>(0);
  const [changing, setChanging] = useState<boolean>(false);

  const data = {
    tournaments: 125,
    cash: 30000,
    participants: 8000,

    tournamentsWon: 34,
    winnings: 50000,
    ranked1: 5,
  };

  const handleTabChange = (val: number) => {
    setChanging(true);

    setTimeout(() => {
      setChanging(false);
      onTabChange(val);
    }, 300);
  };

  return (
    <div className="community expand">
      <div
        className={`community-desc-container flex${
          changing ? " changing" : ""
        }`}
      >
        <div className="description">
          <SectionHead
            title={
              <>
                A vibrant
                <br />
                community of
                <br />
                <span>players & builders</span>
              </>
            }
          >
            <p className="section-desc lexend-body-m">
              XBorg is proud to be the home of the best players, builders and
              GameFi enthusiasts. Discover how we are co-building the next era
              of gaming with them.
            </p>

            <div className="row action">
              <ButtonPrimary
                label="Join our community"
                to="https://discord.gg/xborg"
                target="_blank"
              />
            </div>
          </SectionHead>
        </div>

        {tab == 1 && (
          <ObserverContainer className="parallaxed-devices expand row middle center">
            <ParallaxLayer
              image={Images.aboutUs.headset}
              factorX={0.1}
              factorY={0.1}
              speed={0}
              isBase
              className="parallaxed-1"
            />
            <ParallaxLayer
              image={Images.aboutUs.mouse}
              factorX={0.2}
              factorY={0.2}
              speed={0}
              className="parallaxed-2"
            />
            <ParallaxLayer
              image={Images.aboutUs.keyboard}
              factorX={-0.1}
              factorY={-0.1}
              speed={0}
              className="parallaxed-3"
            />
          </ObserverContainer>
        )}

        {tab == 0 && (
          <ObserverContainer className="parallaxed-banner expand column row middle center">
            <ParallaxLayer
              image={Images.XCS.banner}
              factorX={0.1}
              factorY={0.1}
              speed={0}
              className="parallaxed-1"
              isBase
            />
            <ParallaxLayer
              image={Images.XCS.banner_logo}
              factorX={0.2}
              factorY={0.2}
              speed={0}
              className="parallaxed-2"
            />

            <div className="action row">
              <ButtonSecondary
                label="Learn more about the XCS"
                to="xtreme-championship-series"
              />
            </div>
          </ObserverContainer>
        )}

        {tab == 2 && (
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
              {players.map((player, index: number) => (
                <SwiperSlide key={index} className="row column">
                  <img src={player.image} alt={player.name} />

                  <h4 className="lexend-body-xl">{player.name}</h4>
                  <div className="lexend-body-m">{player.description}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ObserverContainer>
        )}

        {tab == 3 && (
          <ObserverContainer className="parallaxed-trophy expand row column middle center">
            <ParallaxLayer
              image={Images.aboutUs.trophy}
              factorX={0.1}
              factorY={0.1}
              speed={0}
              isBase
              className="parallaxed-1"
            />
            <ParallaxLayer
              image={Images.aboutUs.crown}
              factorX={0.2}
              factorY={0.2}
              speed={0}
              className="parallaxed-2"
            />
            <div className="action row">
              <ButtonSecondary
                label="Community Leaderboard"
                to="https://crew3.xyz/c/xborg/leaderboard"
                target="_blank"
              />
            </div>
          </ObserverContainer>
        )}
      </div>

      <Tabs
        onTabChange={handleTabChange}
        data={[
          {
            label: "Tournaments",
            content: (
              <div className="statistics row">
                <div className="col">
                  <div className="stats-value">
                    <CountUpAnimation
                      number={data.tournaments}
                      className="stats-value"
                      sufix="+"
                    />
                  </div>
                  <div className="stats-label">Tournaments Organised</div>
                </div>
                <div className="col">
                  <div className="stats-value">
                    <CountUpAnimation
                      number={data.cash}
                      className="stats-value"
                      prefix="$"
                    />
                  </div>
                  <div className="stats-label">Cash Prize Distributed</div>
                </div>
                <div className="col">
                  <CountUpAnimation
                    number={data.participants}
                    className="stats-value"
                    sufix="+"
                  />
                  <div className="stats-label">Total Participants</div>
                </div>
              </div>
            ),
          },
          {
            label: "Councils & Governance",
            content: (
              <div className="governance row">
                <div className="col expand">
                  <div className="lexend-heading-m">
                    <span>Community</span> Council
                  </div>
                  <div className="lexend-body-s">
                    Community specialists in charge of making our players and
                    builders feel at home.
                  </div>
                </div>
                <div className="col expand">
                  <div className="lexend-heading-m">
                    <span>Content</span> Council
                  </div>
                  <div className="lexend-body-s">
                    Creatives who oversee all community-content creations and
                    community growth.
                  </div>
                </div>
                <div className="col expand">
                  <div className="lexend-heading-m">
                    <span>Gaming</span> Council
                  </div>
                  <div className="lexend-body-s">
                    A group of players testing games, streaming and organising
                    gaming nights.
                  </div>
                </div>
                <div className="col expand">
                  <div className="lexend-heading-m">
                    <span>Investment</span> Council
                  </div>
                  <div className="lexend-body-s">
                    GameFi investors who provide feedback & due diligence for
                    Launchpad deals.
                  </div>
                </div>
              </div>
            ),
          },
          {
            label: "Esports",
            content: (
              <div className="statistics row">
                <div className="col">
                  <CountUpAnimation
                    number={data.tournamentsWon}
                    className="stats-value"
                  />

                  <div className="stats-label">Tournaments Won</div>
                </div>
                <div className="col">
                  <CountUpAnimation
                    number={data.winnings}
                    prefix="$"
                    className="stats-value"
                  />

                  <div className="stats-label">Tournament Winnings</div>
                </div>
                <div className="col">
                  <CountUpAnimation
                    number={data.ranked1}
                    className="stats-value"
                  />
                  <div className="stats-label">Web3 titles ranked #1 team</div>
                </div>
              </div>
            ),
          },
          {
            label: "Hall Of Fame",
            content: (
              <div className="hall-of-fame row row-wrap">
                <Link to="" className="swiper-prev">
                  <img src={Images.chevron_left.default} alt="left" />
                </Link>
                <Link to="" className="swiper-next">
                  <img src={Images.chevron_right.default} alt="right" />
                </Link>
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  slidesPerView={"auto"}
                  spaceBetween={32}
                  speed={500}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                  }}
                >
                  {halloffame.map((item, index) => (
                    <SwiperSlide key={index} className="row column">
                      <div className="col" key={index}>
                        <div className="lexend-heading-l">{item.name}</div>
                        <div className="lexend-body-s">{item.desc}</div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};
