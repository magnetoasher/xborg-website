import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer, SectionDescription } from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const TierOne = () => {
  const titleRef = useRef(null);

  const textVM = new TextManipulation();
  return (
    <div className={`tier-one expand row column center`}>
      <div className="description">
        <div className="section-head-container in">
          <div className="row section-head">
            <div className="section-border"></div>
            <div className="row column expand">
              <img src={Images.logo.default} alt="Tier 1 Esports" />
              <h2 className="section-head-title">
                <span ref={titleRef}>Tier 1</span> Esports
              </h2>
            </div>
          </div>
          <SectionDescription
            className="section-head-desc"
            onAnimateIn={() => textVM.scrambleText(titleRef)}
          >
            The biggest, most competitive Web3 games only.
          </SectionDescription>
        </div>
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
