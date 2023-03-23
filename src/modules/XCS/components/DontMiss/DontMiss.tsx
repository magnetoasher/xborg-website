import { useState } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  ButtonPrimary,
} from "../../../../components";
import { PickGame } from "../PickGame/PickGame";

export const DontMiss = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={`dont-miss expand row middle ${
        active ? "active" : "inactive"
      }`}
    >
      <div className="description expand">
        {/* <SectionHead
          title="Don’t Miss A Second"
          description="Stay up to date with all Xtreme Championship Series news, announcements and action."
        >
          Don’t Miss <b>A Second</b>
        </SectionHead> */}
        <div className="row btn-container">
          <ButtonPrimary
            label="Join XCS Discord"
            to="https://discord.gg/Cb73U6PX"
          />
        </div>
      </div>
      <ObserverContainer className="parallaxed row middle center expand">
        <ParallaxLayer
          image={Images.XCS.banner2}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          isBase
        />
        <ParallaxLayer
          image={Images.XCS.banner2logo}
          factorX={0.04}
          factorY={0.04}
          speed={0}
        />
        <ParallaxLayer
          image={Images.XCS.banner_twitter}
          factorX={-0.2}
          factorY={-0.2}
          speed={0}
          className="parallaxed-ico-1"
        />
        <ParallaxLayer
          image={Images.XCS.banner_twitch}
          factorX={0.3}
          factorY={-0.3}
          speed={0}
          className="parallaxed-ico-2"
        />
        <ParallaxLayer
          image={Images.XCS.banner_discord}
          factorX={-0.4}
          factorY={0.4}
          speed={0}
          className="parallaxed-ico-3"
        />
      </ObserverContainer>
      <PickGame />
    </div>
  );
};
