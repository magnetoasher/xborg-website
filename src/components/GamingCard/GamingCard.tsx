import { MouseParallaxChild } from "react-parallax-mouse";
import { Images } from "../../assets/imgs/Images";
import { ObserverContainer } from "../ObserverContainer";
import { ParallaxLayer } from "../ParallaxLayer";

export const GamingCard = () => {
  const cardBottomProps = { factorX: 0.175, factorY: 0.175 };
  return (
    <ObserverContainer className="gaming-card">
      <ParallaxLayer
        image={Images.xborgapp.badge}
        factorX={0.3}
        factorY={0.3}
        speed={0}
        className="card"
      />
      <ParallaxLayer
        image={Images.xborgapp.lights}
        factorX={0.1}
        factorY={0.1}
        speed={0}
        className="card-lights"
      />
      {/* <div className="card-bottom games-played">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">{(4345).toLocaleString()}</div>
          <div className="label">Games Played</div>
        </MouseParallaxChild>
      </div>
      <div className="card-bottom win-rate">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">85%</div>
          <div className="label">Win Rate</div>
        </MouseParallaxChild>
      </div>
      <div className="card-bottom total-kills">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">{(42345).toLocaleString()}</div>
          <div className="label">Total Kills</div>
        </MouseParallaxChild>
      </div>
      <div className="card-bottom total-deaths">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">{(11345).toLocaleString()}</div>
          <div className="label">Total Deaths</div>
        </MouseParallaxChild>
      </div>

      <div className="kda">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">1.55</div>
          <div className="label">K/D Ratio</div>
        </MouseParallaxChild>
      </div>

      <div className="member">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">XBorg.eth</div>
          <div className="label">Member of Xborg Clan</div>
        </MouseParallaxChild>
      </div>

      <div className="missions">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">8</div>
          <div className="label">Missions Completed</div>
        </MouseParallaxChild>
      </div>

      <div className="achievements">
        <MouseParallaxChild {...cardBottomProps}>
          <div className="value">12</div>
          <div className="label">Achievements Claimed</div>
        </MouseParallaxChild>
      </div> */}
    </ObserverContainer>
  );
};
