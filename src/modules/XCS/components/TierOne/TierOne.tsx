import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionHead } from "../../../../components";

export const TierOne = () => {
  return (
    <div className="tier-one expand row column center">
      <div className="description">
        <SectionHead
          title={
            <>
              Tier 1 <span>Esports</span>
            </>
          }
          logo={Images.logo.default}
          smallerHeading
        >
          <p className="lexend-body-m">
            The biggest, most competitive Web3 games only.
          </p>
        </SectionHead>
      </div>
      <ObserverContainer className="games row">
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
      </ObserverContainer>
    </div>
  );
};
