import { useRef } from "react";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  Progressbar,
  SectionDescription,
} from "../../../../components";
import { TextManipulation } from "../../../../viewmodels/textManipulation";

export type ApplicationNetworkProps = {
  active: number;
  mobile: boolean;
};

export const ApplicationNetwork = ({
  active,
  mobile,
}: ApplicationNetworkProps) => {
  const titleScrambleRef = useRef(null);
  const titleScrambleRef2 = useRef(null);

  const textVM = new TextManipulation();

  return (
    <div className="application-network">
      {active == 2 || mobile == true ? (
        <div className="row middle between block-wrapper">
          <div className="w-full">
            <ObserverContainer
              className="row column"
              onAnimateIn={() => {
                setTimeout(() => {
                  textVM.scrambleText(titleScrambleRef);
                }, 200);
              }}
            >
              <div className="row middle big-title-container">
                <div className="red-highlight text-center">
                  <span>Live</span>
                </div>

                <div className="big-title">
                  XBorg <span ref={titleScrambleRef}>Launchpad</span>
                </div>
              </div>

              <SectionDescription className="subtitle">
                Providing players investment opportunities in early-stage Web3
                games, and developers the platform to access to capital and
                players.
              </SectionDescription>

              <div className="action row">
                <ButtonSecondary
                  label="Enter Launchpad"
                  to="https://launchpad.xborg.com"
                  target="_blank"
                />
              </div>
            </ObserverContainer>
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
      ) : null}
      {active == 3 || mobile == true ? (
        <div className="row middle between app-network-xborg block-wrapper">
          <div className="w-full">
            <ObserverContainer
              className="row column"
              onAnimateIn={() => {
                setTimeout(() => {
                  textVM.scrambleText(titleScrambleRef);
                }, 200);
              }}
            >
              <div className="row middle big-title-container">
                <div className="red-highlight text-center">
                  <span>Alpha live</span>
                </div>

                <div className="big-title">
                  XBorg <span ref={titleScrambleRef2}>App</span>
                </div>
              </div>

              <SectionDescription className="subtitle">
                Allowing players to unlock collectibles, craft avatars and win
                exclusive prizes by completing gaming and social challenges.
              </SectionDescription>

              <div className="action row">
                <ButtonSecondary
                  label="Launch alpha"
                  to="https://gaming.xborg.com"
                  target="_blank"
                />
              </div>
            </ObserverContainer>
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
      ) : null}
    </div>
  );
};
