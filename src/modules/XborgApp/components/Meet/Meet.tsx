import { MouseParallaxChild } from "react-parallax-mouse";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionDescription } from "../../../../components";

export const Meet = () => {
  return (
    <div className={"meet expand row middle between"}>
      <div className="description">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <div className="row column expand">
              <img src={Images.logo.default} alt="" />

              <h2 className="section-head-title">
                <span>Where</span> communities <span>and</span> players meet
              </h2>
            </div>
          </div>
          <SectionDescription className="section-head-desc">
            Get rewarded for completing quests created by your favourite
            communities, or create your own and rule the virtual world.
          </SectionDescription>
        </div>
      </div>

      <ObserverContainer className="parallaxed expand row column middle center">
        <MouseParallaxChild
          factorX={0.2}
          factorY={0.2}
          className="parallaxed-community row column end"
        >
          <img src={Images.logosquare} alt="xborg" className="community-logo" />
          <img
            src={Images.xborgapp.promo}
            alt="xborg promo"
            className="promo"
          />

          <div className="community-title">Xborg</div>

          <div className="row middle tags-list">
            <div className="tag">117 Quests Available</div>
            <div className="tag">2350 Members</div>
            <div className="tag row middle">
              <img src={Images.xborgapp.game} alt="" />
              Games
            </div>
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.3} factorY={0.3}>
          <div className="parallaxed-offer row middle">
            <h4 className="title">
              Watch the finals <span>on Twitch</span>
            </h4>

            <div className="reward row column middle center">
              <img src={Images.xborgapp.artifact} alt="Artifact" />
              <span>+ 300 XP</span>
            </div>
          </div>
        </MouseParallaxChild>
      </ObserverContainer>
    </div>
  );
};
