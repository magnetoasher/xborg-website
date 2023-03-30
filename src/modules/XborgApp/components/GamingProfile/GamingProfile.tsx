import { Images } from "../../../../assets/imgs/Images";
import {
  GameTile,
  ObserverContainer,
  SectionDescription,
} from "../../../../components";

export const GamingProfile = () => {
  return (
    <div className="gaming-profile expand">
      <div className={"section-head-container"}>
        <div className="row section-head">
          <div className="section-border" />
          <div className="row column expand">
            <img src={Images.logo.default} alt="" />

            <h2 className="section-head-title">
              <span>The ultimate</span> gaming profile
            </h2>
          </div>
        </div>
        <SectionDescription className="section-head-desc">
          Level up your gaming experience and earn rewards based on your in-game
          skills and esports reputation.
        </SectionDescription>
      </div>

      <ObserverContainer className="background-images-grid row row-wrap middle center">
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp1}
            image2={Images.xborgapp.ugp1avatar}
            title={"APEX LEGENDS"}
            quests={41}
            players={"5.1K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp2}
            image2={Images.xborgapp.ugp2avatar}
            title={"VALORANT"}
            quests={117}
            players={"2.3K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp3}
            image2={Images.xborgapp.ugp3avatar}
            title={"OVERWATCH"}
            quests={40}
            players={"2.9K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp4}
            image2={Images.xborgapp.ugp4avatar}
            title={"DOTA 2"}
            quests={117}
            players={2350}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp5}
            image2={Images.xborgapp.ugp5avatar}
            title={"CS:GO"}
            quests={112}
            players={"19.4K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp6}
            image2={Images.xborgapp.ugp6avatar}
            title={"Ev.io"}
            quests={21}
            players={"4.1K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp7}
            image2={Images.xborgapp.ugp7avatar}
            title={"GODS UNCHAINED"}
            quests={22}
            players={"1.2K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp8}
            image2={Images.xborgapp.ugp8avatar}
            title={"TFT"}
            quests={22}
            players={"3.1K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp9}
            image2={Images.xborgapp.ugp9avatar}
            title={"LEAGUE OF LEGENDS"}
            quests={34}
            players={"14.5K"}
          />
        </div>
      </ObserverContainer>
    </div>
  );
};
