import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  Progressbar,
  SectionDescription,
} from "../../../../components";
import { TextScramble } from "../../../../viewmodels/TextScramble";

export type ApplicationNetworkProps = {
  active: number;
};

export const ApplicationNetwork = ({ active }: ApplicationNetworkProps) => {
  const titleScrambleRef = useRef(null);
  const titleScrambleRef2 = useRef(null);

  return (
    <div className="application-network">
      {active == 2 && (
        <div className="row middle between block-wrapper">
          <div className="w-full">
            <div className="row column">
              <div className="row middle big-title-container">
                <div className="live">Live</div>

                <div className="big-title">
                  XBorg <span ref={titleScrambleRef}>Launchpad</span>
                </div>
              </div>
            </div>

            <SectionDescription
              className="subtitle"
              onAnimateIn={() => {
                const current =
                  titleScrambleRef.current as unknown as HTMLDivElement;
                const scramble = new TextScramble(current);
                if (titleScrambleRef.current)
                  scramble.setText(current.innerHTML);
              }}
            >
              Providing players investment opportunities in early-stage Web3
              games, and developers the platform to access to capital and
              players.
            </SectionDescription>

            <div className="enter row">
              <ButtonSecondary
                label="Enter Launchpad"
                to="https://launchpad.xborg.com"
                target="_blank"
              />
            </div>
          </div>

          <ObserverContainer className="rooniverse row column">
            <div className="live">Live</div>
            <video autoPlay muted loop>
              <source
                src={require("../../../../assets/videos/rooniverse.mp4")}
                type="video/mp4"
              />
            </video>

            <div className="rooniverse-content">
              <div className="row middle tags">
                <span>MOBA</span>
                <span>Strategic</span>
              </div>

              <div className="intro-title">Rooniverse</div>

              <SectionDescription className="rooniverse-desc">
                Enter the world of cute and savage Roos who fight to the DEATH!
                Showdown in battle arenas, gather resources, and build your own
                empire in Rooniverse.
              </SectionDescription>

              <div className="funding">
                <div className="row progress-info">
                  <span>100% Funded</span>
                  <span>121 Participants</span>
                </div>
                <Progressbar progress={100} />
              </div>
            </div>
          </ObserverContainer>
        </div>
      )}
      {active == 3 && (
        <div className="row middle between app-network-xborg block-wrapper">
          <div className="w-full">
            <div className="row column">
              <div className="row middle big-title-container">
                <div className="live">Alpha live</div>

                <div className="big-title">
                  XBorg <span ref={titleScrambleRef2}>App</span>
                </div>
              </div>
            </div>

            <SectionDescription
              className="subtitle"
              onAnimateIn={() => {
                const current =
                  titleScrambleRef2.current as unknown as HTMLDivElement;
                const scramble = new TextScramble(current);
                if (titleScrambleRef2.current)
                  scramble.setText(current.innerHTML);
              }}
            >
              Allowing players to unlock collectibles, craft avatars and win
              exclusive prizes by completing gaming and social challenges.
            </SectionDescription>

            <div className="enter row">
              <ButtonSecondary
                label="Launch alpha"
                to="https://gaming.xborg.com"
                target="_blank"
              />
            </div>
          </div>

          <ObserverContainer className="parallaxed row column middle center">
            <ParallaxLayer
              image={Images.xborgapp.badge}
              factorX={0.1}
              factorY={0.1}
              speed={0}
              isBase
              className="parallaxed-1"
            />
            <ParallaxLayer
              image={Images.xborgapp.collectible1}
              factorX={-0.1}
              factorY={0.1}
              speed={0}
              className="parallaxed-2"
            />
          </ObserverContainer>
        </div>
      )}
    </div>
  );
};
