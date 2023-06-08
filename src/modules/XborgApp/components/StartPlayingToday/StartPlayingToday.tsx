import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  Links,
  ObserverContainer,
  ParallaxLayer,
} from "../../../../components";

export const StartPlayingToday = () => {
  return (
    <div className={`start-playing-today expand row column`}>
      <div className="expand row middle content">
        <div className="description expand row column middle">
          <h2 className="vista-heading text-center">
            <span>Start</span> playing <span>today</span>
          </h2>

          <p className="lexend-body-m text-center">
            Get rewarded for playing your favourite games.
          </p>
          <ButtonPrimary
            label="Enter the portal"
            href="https://xborg.gg"
            target="_blank"
          />
        </div>

        <div className="parallaxed-elements">
          <ObserverContainer
            className="parallaxed-right row middle center"
            rootMargin="0px"
          >
            <ParallaxLayer
              image={Images.xborgapp.ghostartifact}
              factorX={0.3}
              factorY={0.3}
              speed={0}
              isBase
              className="parallaxed-1"
            />
            <ParallaxLayer
              image={Images.xborgapp.ghost}
              factorX={0}
              factorY={0}
              speed={0}
              className="parallaxed-2"
            />
          </ObserverContainer>

          <ObserverContainer
            className="parallaxed-left row middle center"
            rootMargin="0px"
          >
            <ParallaxLayer
              image={Images.xborgapp.blue_pet}
              factorX={-0.1}
              factorY={-0.1}
              speed={0}
              isBase
              className="parallaxed-1"
            />
            <ParallaxLayer
              image={Images.xborgapp.counter_terrorist}
              factorX={0.1}
              factorY={0.1}
              speed={0}
              className="parallaxed-2"
            />
          </ObserverContainer>
        </div>
      </div>

      <Links />
    </div>
  );
};
