import { Images } from "../../../../assets/imgs/Images";

export const TierOne = () => {
  return (
    <div className={`tier-one expand row column center`}>
      <div className="description">
        <div className="section-head-container in">
          <div className="row section-head">
            <div className="section-border"></div>
            <div className="row column expand">
              <img src={Images.logo.default} alt="Tier 1 Esports" />
              <h2 className="section-head-title">
                <span>Tier 1</span> Esports
              </h2>
            </div>
          </div>
          <p className="section-head-desc">
            The biggest, most competitive Web3 games only.
          </p>
        </div>
      </div>
      <div className="games row">
        <div className="single-game row middle">
          <img src={Images.XCS.evio} alt="Ev.io" />
        </div>
        <div className="single-game row middle">
          <img src={Images.XCS.bornless} alt="Bornless" />
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
