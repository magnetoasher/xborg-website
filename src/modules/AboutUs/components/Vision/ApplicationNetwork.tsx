import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  Progressbar,
  SectionDescription,
} from "../../../../components";

export type ApplicationNetworkProps = {
  active: number;
  mobile: boolean;
};

export const ApplicationNetwork = ({
  active,
  mobile,
}: ApplicationNetworkProps) => {
  return (
    <div className="application-network">
      {active == 2 || mobile == true ? (
        <div className="row middle between block-wrapper">
          <div className="w-full">
            <ObserverContainer className="content-wrapper row column">
              <div className="row middle big-title-container">
                <div className="red-highlighted">
                  <span>Live</span>
                </div>

                <h4 className="vista-heading">
                  XBorg <span>Launchpad</span>
                </h4>
              </div>

              <p className="section-desc lexend-heading-s">
                Providing players investment opportunities in early-stage Web3
                games, and developers the platform to access to capital and
                players.
              </p>

              <div className="action row">
                <ButtonSecondary
                  label="Enter Launchpad"
                  href="https://launchpad.xborg.com"
                  target="_blank"
                />
              </div>
            </ObserverContainer>
          </div>

          <ObserverContainer className="rooniverse row column">
            <div className="red-highlighted live">
              <span>Live</span>
            </div>
            <video autoPlay muted loop>
              <source
                src={require("../../../../assets/videos/rooniverse.mp4")}
                type="video/mp4"
              />
            </video>

            <div className="rooniverse-content">
              <div className="row middle tags lexend-body-m">
                <span>MOBA</span>
                <span>Strategic</span>
              </div>

              <h2 className="lexend-heading">Rooniverse</h2>

              <SectionDescription className="rooniverse-desc lexend-heading-s">
                Enter the world of cute and savage Roos who fight to the DEATH!
                Showdown in battle arenas, gather resources, and build your own
                empire in Rooniverse.
              </SectionDescription>

              <div className="funding">
                <div className="row progress-info lexend-heading-s">
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
            <ObserverContainer className="content-wrapper row column">
              <div className="row middle big-title-container">
                <div className="red-highlighted">
                  <span>Alpha live</span>
                </div>

                <h4 className="vista-heading">
                  XBorg <span>App</span>
                </h4>
              </div>

              <p className="section-desc lexend-heading-s">
                Allowing players to unlock collectibles, craft avatars and win
                exclusive prizes by completing gaming and social challenges.
              </p>

              <div className="action row">
                <ButtonSecondary
                  label="Launch alpha"
                  href="https://gaming.xborg.com"
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
