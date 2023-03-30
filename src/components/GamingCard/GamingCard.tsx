import { Images } from "../../assets/imgs/Images";
import { ObserverContainer } from "../ObserverContainer";
import { ParallaxLayer } from "../ParallaxLayer";

export const GamingCard = () => {
  return (
    <ObserverContainer className="gaming-card">
      <ParallaxLayer
        image={Images.xborgapp.badge}
        factorX={0.3}
        factorY={0.3}
        speed={0}
        className="card"
        isBase
      />
      <ParallaxLayer
        image={Images.xborgapp.lights}
        factorX={0.1}
        factorY={0.1}
        speed={0}
        className="card-lights"
      />
    </ObserverContainer>
  );
};
