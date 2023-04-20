import { Images } from "../../../../assets/imgs/Images";
import { GamingCard, SectionHead } from "../../../../components";

export const GamingBadges = () => {
  return (
    <div className="gaming-badges expand row middle center">
      <GamingCard />

      <div className="description">
        <SectionHead
          logo={Images.logo.default}
          title={
            <>
              Forge
              <br />
              <span>gaming badges</span>
            </>
          }
        >
          <p className="lexend-body-m">
            Create unique gaming badges that showcase your skills, stats, and
            in-game achievements.
          </p>
        </SectionHead>
      </div>
    </div>
  );
};
