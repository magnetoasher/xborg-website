import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import { GamingCard, SectionDescription } from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export const GamingBadges = () => {
  const titleRef = useRef(null);

  const textVM = new TextManipulation();
  return (
    <div className={"gaming-badges expand row middle center"}>
      <GamingCard />

      <div className="description">
        <div className={"section-head-container"}>
          <div className="row section-head">
            <div className="section-border" />
            <div className="row column expand">
              <img src={Images.logo.default} alt="" />

              <h2 className="section-head-title">
                Forge
                <br />
                <span ref={titleRef}>gaming badges</span>
              </h2>
            </div>
          </div>
          <SectionDescription
            className="section-head-desc"
            onAnimateIn={() => textVM.scrambleText(titleRef)}
          >
            Create unique gaming badges that showcase your skills, stats, and
            in-game achievements.
          </SectionDescription>
        </div>
      </div>
    </div>
  );
};
