import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  Links,
} from "../../../../components";
import { PickGame } from "../PickGame/PickGame";

export const DontMiss = () => {
  return (
    <div className="dont-miss expand row column">
      <div className="expand row middle">
        <div className="description expand">
          <div className="section-head-container in">
            <div className="row section-head">
              <div className="section-border"></div>
              <div className="row column expand">
                <img src={Images.logo.default} alt="Don’t Miss A Second" />
                <h2 className="section-head-title">
                  Don’t Miss <span>A Second</span>
                </h2>
              </div>
            </div>
            <p className="section-head-desc">
              Stay up to date with all Xtreme Championship Series news,
              announcements and action.
            </p>
          </div>
          <div className="row btn-container">
            <a
              href="https://discord.gg/Cb73U6PX"
              className="btn-primary row middle center"
              target="_blank"
            >
              <span className="expand">Join XCS Discord</span>
            </a>
          </div>
        </div>
        <ObserverContainer className="parallaxed row middle center expand">
          <ParallaxLayer
            image={Images.XCS.banner2}
            factorX={0.1}
            factorY={0.1}
            speed={0}
            isBase
          />
          <ParallaxLayer
            image={Images.XCS.banner2logo}
            factorX={0.04}
            factorY={0.04}
            speed={0}
          />
          <ParallaxLayer
            image={Images.XCS.banner_twitter}
            factorX={-0.2}
            factorY={-0.2}
            speed={0}
            className="parallaxed-ico-1"
          />
          <ParallaxLayer
            image={Images.XCS.banner_twitch}
            factorX={0.3}
            factorY={-0.3}
            speed={0}
            className="parallaxed-ico-2"
          />
          <ParallaxLayer
            image={Images.XCS.banner_discord}
            factorX={-0.4}
            factorY={0.4}
            speed={0}
            className="parallaxed-ico-3"
          />
        </ObserverContainer>
        <PickGame />
      </div>

      <Links />
    </div>
  );
};
