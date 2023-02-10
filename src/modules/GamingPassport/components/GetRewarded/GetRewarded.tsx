import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const GetRewarded = () => {
  return (
    <div className={`get-rewarded expand row middle between`}>
      <div className="description expand">
        <SectionHead
          title="Get Rewarded"
          description="Earn crypto, win NFTs, and unlock exclusive opportunities by completing missions and achievements in-game."
        />
      </div>
      <ObserverContainer className="parallaxed row end expand">
        <ParallaxLayer
          image={Images.gamingpassport.swordsman}
          factorX={0.2}
          factorY={0.2}
          speed={0}
          isBase
          className="parallaxed-1"
        />
        <ParallaxLayer
          image={Images.gamingpassport.ethcoin}
          factorX={-0.2}
          factorY={-0.2}
          speed={-3}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.gamingpassport.karambit}
          factorX={-0.1}
          factorY={-0.1}
          speed={5}
          className="parallaxed-3"
        />
        <ParallaxLayer
          image={Images.gamingpassport.gun}
          factorX={0.1}
          factorY={0.1}
          speed={8}
          className="parallaxed-4"
        />
      </ObserverContainer>
    </div>
  );
};
