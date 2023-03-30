import { MouseParallaxChild } from "react-parallax-mouse";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonSecondary,
  ObserverContainer,
  ParallaxLayer,
  Progressbar,
  SectionDescription,
} from "../../../../components";

export const Vision = () => {
  return (
    <div className="vision expand">
      <div className="row middle between vision-pt-1">
        <div className="description">
          <div className={"section-head-container"}>
            <div className="row section-head">
              <div className="section-border" />
              <h2 className="section-head-title">Our vision</h2>
            </div>
            <SectionDescription className="section-head-desc">
              A gaming world where creativity and innovation thrive and every
              player has an equal opportunity to leave their mark. Our mission
              is to empower players worldwide by increasing their control over
              their data, so they can take ownership of their experiences and
              the communities they belong to.
            </SectionDescription>
          </div>
        </div>

        <div className="vision-parallaxed row">
          <div className="line-indicator" />
          <div className="row column middle vision-intro">
            <div className="block row middle center with-cube">
              Credential Network
            </div>
            <img src={Images.chevronDown} alt="chevron" className="chevron" />
            <div className="block row middle center">Application Network</div>
            <img src={Images.chevronDown} alt="chevron" className="chevron" />
            <div className="block row middle center with-cube">
              Decentralized Societies
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="page-border" />
        <div className="row column expand">
          <div className="credential-network">
            <div className="section-intro">
              <div className="title">Credential network</div>
              <div className="desc">
                Network of gaming credentials using player statistics and social
                proof to establish skills and reputation.
              </div>
            </div>

            <div className="row credential-details-wrapper">
              <div className="row column vision-parallaxed">
                <div className="row middle">
                  <div className="block row middle">Player stats</div>

                  <img
                    src={Images.chevronRight}
                    alt="chevron"
                    className="chevron"
                  />
                </div>
                <div className="row middle">
                  <div className="block row middle">In-game achievements</div>
                  <img
                    src={Images.chevronRight}
                    alt="chevron"
                    className="chevron"
                  />
                </div>

                <div className="row middle">
                  <div className="block row middle">
                    Fans & esports engagement
                  </div>

                  <img
                    src={Images.chevronRight}
                    alt="chevron"
                    className="chevron"
                  />
                </div>
              </div>

              <div className="gaming-credential-layer row middle center column">
                <img src={Images.aboutUs.gcl} alt="" className="background" />
                <div className="cube" />
                <div className="title">Gaming Credential Layer</div>
                <div className="cube" />
              </div>

              <div className="credential-network-details row column center">
                <div className="title">Player profile</div>
                <p>Unified Gamer ID</p>
                <div className="space" />
                <div className="title">Credential API</div>
                <p>Allowing developers to build upon</p>
              </div>
            </div>
          </div>

          <div className="application-network">
            <div className="section-intro">
              <div className="title">Application network</div>
              <div className="desc">
                A set of interoperable applications that unlock new gaming and
                social experiences for players.
              </div>
            </div>

            <div className="row middle between block-wrapper">
              <div>
                <div className="row column">
                  <div className="row middle big-title-container">
                    <div className="live">Live</div>

                    <div className="big-title">
                      XBorg <span>Launchpad</span>
                    </div>
                  </div>
                </div>

                <SectionDescription className="subtitle">
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
                    Enter the world of cute and savage Roos who fight to the
                    DEATH! Showdown in battle arenas, gather resources, and
                    build your own empire in Rooniverse.
                  </SectionDescription>

                  <div className="funding">
                    <div className="row progress-info">
                      <span>50% Funded</span>
                      <span>121 Participants</span>
                    </div>
                    <Progressbar progress={50} />
                  </div>
                </div>
              </ObserverContainer>
            </div>

            <div className="row middle between app-network-pt2 block-wrapper">
              <div>
                <div className="row column">
                  <div className="row middle big-title-container">
                    <div className="live">Alpha live</div>

                    <div className="big-title">
                      XBorg <span>App</span>
                    </div>
                  </div>
                </div>

                <SectionDescription className="subtitle">
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
                  factorX={0.2}
                  factorY={0.2}
                  speed={0}
                  className="parallaxed-2"
                />
              </ObserverContainer>
            </div>
          </div>

          <div className="decentralized-societies row middle between block-wrapper">
            <div className="list">
              <div className="col">
                <div className="row middle">
                  <div className="date">Q2 2023</div>
                  <div className="col-title">
                    Decentralized <span>Gaming Societies</span>
                  </div>
                </div>

                <SectionDescription className="desc">
                  Enabling the creation of decentralized gaming societies
                  governed by fans and players.
                </SectionDescription>
              </div>

              <div className="col">
                <div className="row middle">
                  <div className="date">2024</div>
                  <div className="col-title">
                    Player Earnings <span>Tokenization</span>
                  </div>
                </div>

                <SectionDescription className="desc">
                  Providing players with a solution to tokenize their earnings
                  and share their success with the broader gaming community.
                </SectionDescription>
              </div>

              <div className="col">
                <div className="row middle">
                  <div className="date">2024</div>
                  <div className="col-title">
                    Reputational-Based <span>lending</span>
                  </div>
                </div>

                <SectionDescription className="desc">
                  XBorg’s Lending Module presents players with the opportunity
                  to lend or borrow valuable gaming assets, contingent on their
                  on-chain reputation.
                </SectionDescription>
              </div>
            </div>

            <ObserverContainer className="parallaxed row column middle center">
              <ParallaxLayer
                image={Images.launchpad.folder}
                factorX={0.1}
                factorY={0.1}
                speed={0}
                isBase
                className="parallaxed-1"
              />

              <div className="knowmore">
                Want to know where XBorg is headed? Access our newly released
                public deck.
              </div>
              <ButtonSecondary
                label="Get access"
                to="https://docsend.com/view/5dwn74pn6izud3vb"
                target="_blank"
              />
            </ObserverContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
