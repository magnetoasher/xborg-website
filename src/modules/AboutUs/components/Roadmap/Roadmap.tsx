import SimpleBar from "simplebar-react";
import { Images } from "../../../../assets/imgs/Images";
import { Links, ObserverContainer, SectionHead } from "../../../../components";

export const Roadmap = () => {
  return (
    <div className="row column w-full">
      <div className="roadmap expand">
        <div className="description">
          <SectionHead title={<span>Roadmap</span>} />
        </div>

        <SimpleBar className="row middle" autoHide={false} forceVisible={"x"}>
          <div className="roadmap-content lexend-body-m">
            <ObserverContainer className="roadmap-item">
              <div className="roadmap-item-top">
                <div className="roadmap-details active">Strategic round</div>
                <div className="roadmap-separator" />
                <div className="roadmap-index">1.</div>
              </div>
              <div className="roadmap-item-line">
                <div className="cube active" />
              </div>
              <div className="roadmap-item-bottom">
                <div className="lexend-body-xl">Live</div>
                <div className="roadmap-details">Soulbound Launchpad</div>
                <div className="roadmap-details">Prometheus mint</div>
                <div className="roadmap-details">XBorg.gg Alpha </div>
                <div className="roadmap-details">XCS</div>
              </div>
            </ObserverContainer>

            <ObserverContainer className="roadmap-item">
              <div className="roadmap-item-top">
                <div className="lexend-body-xl">Q2 2023</div>
                <div className="roadmap-details">XBorg.gg V1</div>
                <div className="roadmap-details">
                  Tier 1 Esports Team partnership
                </div>
                <div className="roadmap-details">Quests & Avatar Engine</div>
                <div className="roadmap-details">First collectible sale</div>
                <div className="roadmap-space" />
              </div>
              <div className="roadmap-item-line">
                <div className="cube active" />
              </div>
              <div className="roadmap-item-bottom">
                <div className="roadmap-index">2.</div>
                <div className="roadmap-separator" />
                <div className="roadmap-details active">Seed round</div>
              </div>
            </ObserverContainer>

            <ObserverContainer className="roadmap-item">
              <div className="roadmap-item-top">
                <img src={Images.aboutUs.token} alt="token" />
                <div className="roadmap-index">3.</div>
              </div>
              <div className="roadmap-item-line">
                <div className="cube" />
              </div>
              <div className="roadmap-item-bottom">
                <div className="lexend-body-xl">Q3 2023</div>
                <div className="roadmap-details">Open Data Graph </div>
                <div className="roadmap-details">Credential API </div>
                <div className="roadmap-details">
                  First Decentralized Gaming Society & ITO
                </div>
                <div className="roadmap-details">Developer Grant Program</div>
              </div>
            </ObserverContainer>

            <ObserverContainer className="roadmap-item">
              <div className="roadmap-item-top">
                <div className="lexend-body-xl">Q4 2023</div>
                <div className="roadmap-details">XBorg.gg mobile app</div>
                <div className="roadmap-details">Avatar SDK</div>
                <div className="roadmap-details">Ingestion API</div>
                <div className="roadmap-details">
                  Player Earnings tokenization
                </div>
                <div className="roadmap-space" />
              </div>
              <div className="roadmap-item-line">
                <div className="cube" />
              </div>
              <div className="roadmap-item-bottom">
                <div className="roadmap-index">4.</div>
              </div>
            </ObserverContainer>

            <ObserverContainer className="roadmap-item">
              <div className="roadmap-item-top"></div>
              <div className="roadmap-item-line">
                <div className="plus row middle center">+</div>
              </div>
              <div className="roadmap-item-bottom">
                <div className="roadmap-space" />
                <div className="roadmap-details">ZK Badges </div>
                <div className="roadmap-details">
                  On-chain Credential Network{" "}
                </div>
                <div className="roadmap-details">Optimistic rollup </div>
              </div>
            </ObserverContainer>
          </div>
        </SimpleBar>
      </div>

      <Links />
    </div>
  );
};
