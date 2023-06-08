import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  ObserverContainer,
  ParallaxLayer,
} from "../../../../components";
import { TAG_TYPE, Tag } from "../../../../components/Tag";

export const Play = () => {
  return (
    <ObserverContainer
      className={`play-intro expand row middle between`}
      rootMargin="0px"
    >
      <div className="description">
        <div className="play-intro-text">
          <h1 className="vista-xl">
            A Portal has <span>Opened</span>
          </h1>
          <p className="lexend-body-m">
            Be among the early explorers. Mighty rewards might be found.
          </p>

          <div className="row tags-row">
            <Tag label={"Early Alpha"} value={""} type={TAG_TYPE.GRAY} />
          </div>

          <div className="actions row middle">
            <ButtonPrimary
              label="Enter the portal"
              href="https://xborg.gg/"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <div className="cubes">
        <div className="cube-1" />
        <div className="cube-2" />
        <div className="cube-3" />
      </div>

      <div className="corner-filler">
        <img src={Images.xborgapp.play_corner} alt="" />
      </div>

      <ObserverContainer className="parallaxed-background" rootMargin="0px">
        <ParallaxLayer
          image={Images.xborgapp.play_bg_1}
          factorX={0.1}
          factorY={0.1}
          speed={0}
          className="parallaxed-1"
          isBase
        />
        <ParallaxLayer
          image={Images.xborgapp.play_bg_2}
          factorX={0.1}
          factorY={-0.1}
          speed={0}
          className="parallaxed-2"
        />
        <ParallaxLayer
          image={Images.xborgapp.play_bg_3}
          factorX={-0.1}
          factorY={0.1}
          speed={0}
          className="parallaxed-3"
        />
        <ParallaxLayer
          image={Images.xborgapp.play_bg_4}
          factorX={-0.1}
          factorY={-0.1}
          speed={0}
          className="parallaxed-4"
        />
      </ObserverContainer>
    </ObserverContainer>
  );
};
