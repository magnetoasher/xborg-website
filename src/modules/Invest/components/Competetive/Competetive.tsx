import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  CountUpAnimation,
  ObserverContainer,
  ParallaxLayer,
  SectionDescription,
} from "../../../../components";

export const Competetive = () => {
  const data = {
    won: 34,
    participants: 8000,
    organized: 125,
    winnings: 50000,
  };

  return (
    <div className="competetive-community row column middle center w-full">
      <h2 className="vista-heading">
        The <span>most competitive</span> community in Web3
      </h2>

      <div className="competetive-community-container row between middle">
        <div className="details">
          <div className="row">
            <div className="red-highlighted">
              <span>Live</span>
            </div>
          </div>
          <h4 className="vista-heading">
            <span>Xtreme</span>
            <br />
            Championship
            <br />
            Series
          </h4>
          <SectionDescription className="desc lexend-body-s">
            Introducing the Xtreme Championship Series, the largest Web3 esports
            event ever.
          </SectionDescription>
          <div className="motto lexend-heading-s">
            We dont just play, <span>we win</span>.
          </div>
          <div className="row actions">
            <ButtonSecondary
              label="Learn more"
              to="/xtreme-championship-series"
            />
          </div>
        </div>

        <div className="stats w-full row middle">
          <div className="statistics expand row column bottom">
            <div className="col">
              <CountUpAnimation number={data.won} className="stats-value" />

              <div className="stats-label">Tournaments won</div>
            </div>
            <div className="col">
              <CountUpAnimation
                number={data.participants}
                className="stats-value"
                prefix="+"
              />

              <div className="stats-label">Tournament participants</div>
            </div>
            <div className="col">
              <CountUpAnimation
                number={data.organized}
                className="stats-value"
                prefix="+"
              />

              <div className="stats-label">Tournaments organized</div>
            </div>
            <div className="col">
              <CountUpAnimation
                number={data.winnings}
                className="stats-value"
                prefix="$"
              />

              <div className="stats-label">Tournaments winnings</div>
            </div>
          </div>
          <ObserverContainer className="parallaxed expand row middle center">
            <ParallaxLayer
              image={Images.XCS.banner}
              factorX={0.1}
              factorY={0.1}
              speed={0}
              isBase
              className="parallaxed-1"
            />
            <ParallaxLayer
              image={Images.XCS.banner_logo}
              factorX={0.2}
              factorY={0.2}
              speed={0}
              className="parallaxed-2"
            />
          </ObserverContainer>
        </div>
      </div>
    </div>
  );
};
