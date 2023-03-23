import { Images } from "../../../../assets/imgs/Images";
import { GameTile, ObserverContainer } from "../../../../components";

export const GamingProfile = () => {
  return (
    <div className={"gaming-profile expand row middle between"}>
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
        <p className="section-head-desc">
          Level up your gaming experience and earn rewards based on your in-game
          skills and esports reputation.
        </p>
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
            image={Images.xborgapp.ugp1}
            image2={Images.xborgapp.ugp1avatar}
            title={"APEX LEGENDS"}
            quests={41}
            players={"5.1K"}
          />
        </div>
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
            image={Images.xborgapp.ugp1}
            image2={Images.xborgapp.ugp1avatar}
            title={"APEX LEGENDS"}
            quests={41}
            players={"5.1K"}
          />
        </div>
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
            image={Images.xborgapp.ugp1}
            image2={Images.xborgapp.ugp1avatar}
            title={"APEX LEGENDS"}
            quests={41}
            players={"5.1K"}
          />
        </div>
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
            image={Images.xborgapp.ugp1}
            image2={Images.xborgapp.ugp1avatar}
            title={"APEX LEGENDS"}
            quests={41}
            players={"5.1K"}
          />
        </div>
        <div className="grid-item">
          <GameTile
            image={Images.xborgapp.ugp1}
            image2={Images.xborgapp.ugp1avatar}
            title={"APEX LEGENDS"}
            quests={41}
            players={"5.1K"}
          />
        </div>
      </ObserverContainer>
    </div>
  );
};
