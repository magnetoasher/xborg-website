import { MouseParallaxChild } from "react-parallax-mouse";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionHead } from "../../../../components";

export const Meet = () => {
  return (
    <div className={"meet expand row middle between"}>
      <div className="description">
        <SectionHead
          logo={Images.logo.default}
          title={
            <>
              <span>Where</span> communities <span>and</span> players meet
            </>
          }
        >
          <p className="lexend-body-m">
            Get rewarded for completing quests created by your favourite
            communities, or create your own and rule the virtual world.
          </p>
        </SectionHead>
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

          <h2 className="community-title lexend-heading">XBorg</h2>

          <div className="row middle tags-list lexend-heading-xxs">
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
            <h4 className="vista-heading">
              Watch the finals <span>on Twitch</span>
            </h4>

            <div className="reward lexend-heading-m row column middle center">
              <img src={Images.xborgapp.artifact} alt="Artifact" />
              <strong>+ 300 XP</strong>
            </div>
          </div>
        </MouseParallaxChild>
      </ObserverContainer>
    </div>
  );
};
