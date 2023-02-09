import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";
import { useEffect, useState } from "react";

export const EmpowerPlayers = () => {
  const [loading, setLoading] = useState<null | boolean>();
  const [signupData, setSignUpData] = useState<number>(4000);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gaming.xborg.com/api/analytics/totalusers`)
      .then((response) => response.json())
      .then((data) => {
        setSignUpData(data.totalUsers);
      });
  }, []);

  return (
    <div className={`empower-players expand row middle between`}>
      <div className="description expand">
        <SectionHead
          title="We Empower Players"
          description="We believe that players should be able to own their gaming data and use it to unlock opportunities that truly reward them."
        />
        <div className="statistics row middle">
          <div className="stats-value">{signupData.toLocaleString()}</div>
          <div className="stats-label">Gaming Passport Signups</div>
        </div>
      </div>

      <ObserverContainer className="parallaxed expand row middle center">
        <ParallaxLayer
          image={Images.aboutUs.headset}
          factorX={0.1}
          factorY={0.1}
          speed={-5}
          isBase
          className="parallaxed-1"
        />
        <ParallaxLayer
          image={Images.aboutUs.mouse}
          factorX={0.2}
          factorY={0.2}
          speed={-8}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.aboutUs.keyboard}
          factorX={-0.1}
          factorY={-0.1}
          speed={-2}
          className="parallaxed-3"
        />
      </ObserverContainer>
    </div>
  );
};
