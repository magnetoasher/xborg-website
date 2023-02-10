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
          <img src={Images.XCS.godsunchained} alt="Hidden" />
        </div>
        <div className="single-game row middle">
          <img src={Images.XCS.hidden04} alt="Hidden" />
          <div className="desc">Announcement on the 14/02</div>
        </div>
        <div className="single-game row middle">
          <img src={Images.XCS.hidden05} alt="Hidden" />
          <div className="desc">Announcement on the 16/02</div>
        </div>
      </div>
    </div>
  );
};
