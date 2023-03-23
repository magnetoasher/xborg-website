import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  ParallaxLayer,
  ObserverContainer,
  ButtonSecondary,
} from "../../../../components";

export const Play = () => {
  const data = {
    users: 8000,
    quests: 15000,
    rewards: 20000,
  };
  return (
    <div className={`play-intro expand row middle between`}>
      <div className="description">
        <div className="logo-icon">
          <img src={Images.logofull} alt="" />
        </div>
        <div className="play-intro-text">
          <h1>
            Play and
            <br />
            <span>[dynamic]</span>
          </h1>
          <p className="subtitle">
            Discover a new meaning to play, connect with your favourite
            communities and build your very own player identity.
          </p>

          <div className="actions row middle">
            <ButtonPrimary label={"Launch App"} />
            <ButtonSecondary label={"Get Beta early access"} />
          </div>

          <div className="row statistics">
            <div className="col">
              <div className="stats-value">{data.users.toLocaleString()}</div>
              <div className="stats-label">Active users</div>
            </div>
            <div className="col">
              <div className="stats-value">{data.quests.toLocaleString()}</div>
              <div className="stats-label">Quests completed</div>
            </div>
            <div className="col">
              <div className="stats-value">
                ${data.rewards.toLocaleString()}
              </div>
              <div className="stats-label">Rewards distributed</div>
            </div>
          </div>
        </div>
      </div>
      <ObserverContainer className="parallaxed-corner row end bottom">
        <div className="triangle" />
        <ParallaxLayer
          image={Images.gamingpassport.aliens}
          factorX={-0.2}
          factorY={0.2}
          speed={0}
          isBase
          className="parallaxed-1"
        />
        <ParallaxLayer
          image={Images.gamingpassport.dark_swordsman}
          factorX={-0.1}
          factorY={0}
          speed={0}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.gamingpassport.mage}
          factorX={0.1}
          factorY={0}
          speed={0}
          className="parallaxed-3"
        />
        <ParallaxLayer
          image={Images.gamingpassport.sparkles}
          factorX={-0.4}
          factorY={0}
          speed={0}
          className="parallaxed-4"
        />
      </ObserverContainer>
    </div>
  );
};
