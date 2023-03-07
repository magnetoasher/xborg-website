import { Images } from "../../../../assets/imgs/Images";
import { SectionHead } from "../../../../components";

export const TierOne = () => {
  return (
    <div className={`tier-one expand row column center`}>
      <div className="description">
        <SectionHead
          title="Tier 1 Esports"
          description="The biggest, most competitive Web3 games only."
        >
          <b>Tier 1</b> Esports
        </SectionHead>
      </div>
      <div className="games row">
        <div className="single-game row middle">
          <img src={Images.XCS.evio} alt="Ev.io" />
        </div>
        <div className="single-game row middle">
          <img src={Images.XCS.harvest} alt="The Harvest" />
        </div>
        <div className="single-game row middle">
          <img src={Images.XCS.godsunchained} alt="Gods Unchained" />
        </div>
        <div className="single-game row middle">
          <img src={Images.XCS.mojomelee} alt="Mojo Melee" />
        </div>
        <div className="single-game row middle">
          <img src={Images.XCS.cta} alt="Cross the Ages" />
        </div>
      </div>
    </div>
  );
};
