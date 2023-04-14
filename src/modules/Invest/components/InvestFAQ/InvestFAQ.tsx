import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { SortGroup } from "../../../../components";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const InvestFAQ = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const appVM = new AppViewModel();

  useEffect(() => {
    appVM.scrollBellowHeader();
  }, []);

  return (
    <div className="invest-faq faq row column middle center">
      <Head />
      <Navbar active={4} />
      <div className="container container-xl">
        <div className="faqs">
          <div className="categories-list">
            <SortGroup
              title="Categories"
              list={[
                {
                  label: "About XBorg",
                  value: "aboutxborg",
                },
                {
                  label: "Prometheus NFT",
                  value: "prometheusNFT",
                },
                {
                  label: "Fundraising",
                  value: "fundraising",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ]}
              singleSelect
              displayAll
              onTagChange={setActiveCategories}
            />
          </div>
          {activeCategories.length == 0 ||
          activeCategories.find((item) => item == "aboutxborg") ? (
            <>
              <div className="collapsible-container">
                <div className="collapsible-tag">About XBorg</div>
                <Collapsible trigger="What is XBorg?" className="collapsible">
                  <p>
                    XBorg is building a Gaming Credential and Application
                    Network for players and Decentralized Gaming Societies.
                  </p>
                  <p>
                    The first application within this network is XBorg.gg, the
                    ultimate gaming platform for players and fans. Players can
                    earn limited-edition collectables based on their gaming
                    skills and social reputation.
                  </p>
                  <p>
                    With support from more than 10,000 players, including the
                    best players in the Web3 community, XBorg has established
                    itself as a leading player in the Web3 gaming space.
                  </p>
                </Collapsible>
              </div>
              <div className="collapsible-container">
                <div className="collapsible-tag">About XBorg</div>
                <Collapsible
                  trigger="Who’s behind XBorg?"
                  className="collapsible"
                >
                  <p>
                    XBorg is a{" "}
                    <a
                      href="https://swissborg.com"
                      target="_blank"
                      className="link"
                    >
                      SwissBorg
                    </a>{" "}
                    spinoff and was created in March 2022. The complete list of
                    XBorg team members can be found here. Most importantly,
                    XBorg is supported by its community of more than 10'000
                    players.
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">About XBorg</div>
                <Collapsible
                  trigger="How can I join the community?"
                  className="collapsible"
                >
                  <p>
                    Join our community on{" "}
                    <a
                      href="https://discord.com/invite/xborg"
                      target="_blank"
                      className="link"
                    >
                      Discord
                    </a>{" "}
                    and follow us on{" "}
                    <a
                      href="https://twitter.com/xborg_official"
                      target="_blank"
                      className="link"
                    >
                      Twitter
                    </a>{" "}
                    to stay up-to-date.
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">About XBorg</div>
                <Collapsible
                  trigger="How can I contact you?"
                  className="collapsible"
                >
                  <p>
                    If you want to speak with a member of the team, head over to{" "}
                    <a
                      href="https://discord.com/invite/xborg"
                      target="_blank"
                      className="link"
                    >
                      Discord
                    </a>{" "}
                    and open a ticket. One of the moderators will add the
                    relevant team member to the chat.
                  </p>
                </Collapsible>
              </div>
            </>
          ) : null}
          {/* PROMETHEUS */}
          {activeCategories.length == 0 ||
          activeCategories.find((item) => item == "prometheusNFT") ? (
            <>
              <div className="collapsible-container">
                <div className="collapsible-tag">Prometheus NFT</div>
                <Collapsible
                  trigger="What is the Prometheus NFT"
                  className="collapsible"
                >
                  <p>
                    The Prometheus collection is a core component of the XBorg
                    ecosystem. It grants holders governance rights, fee-less
                    access to all XBorg products and a vested airdrop of XBORG
                    tokens. The Prometheus collection can be viewed and bought{" "}
                    <a
                      href="https://opensea.io/collection/xborg-prometheus"
                      target="_blank"
                      className="link"
                    >
                      here
                    </a>
                    .
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">Prometheus NFT</div>
                <Collapsible
                  trigger="What will be the utility of a Prometheus NFT post TGE?"
                  className="collapsible"
                >
                  <p>
                    <strong>GameFi opportunities</strong>
                    <br />
                    Early access passes, whitelist spots and NFT giveaway
                    opportunities from the leading GameFi projects.
                  </p>
                  <p>
                    <strong>Priority access </strong>
                    <br />
                    Early access to all XBorg products and applications.
                  </p>
                  <p>
                    <strong>XBorg investments opportunities </strong>
                    <br />
                    Receive an airdrop of XBG tokens, partner tokens and NFTs,
                    and get access to XBorg's seed investment round at a
                    discounted valuation.
                  </p>
                  <p>
                    <strong>XBorg premium </strong>
                    <br />
                    Get lifetime fee-less access to all XBorg products, networks
                    and applications.
                  </p>
                  <p>
                    <strong>Protocol status </strong>
                    <br />
                    The Prometheus NFT represents the highest status of the
                    XBorg ecosystem and receive the highest perks.
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">Prometheus NFT</div>
                <Collapsible
                  trigger="Where can I buy a Prometheus NFT?"
                  className="collapsible"
                >
                  <p>
                    You can buy a Prometheus NFT on{" "}
                    <a
                      href="https://opensea.io/collection/xborg-prometheus"
                      target="_blank"
                      className="link"
                    >
                      Opensea
                    </a>
                    .
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">Prometheus NFT</div>
                <Collapsible
                  trigger="Do I need a Prometheus NFT to invest in XBorg?"
                  className="collapsible"
                >
                  <p>
                    Owning a Prometheus NFT gives you exclusive advantages for
                    XBorg’s seed round.
                  </p>
                  <p>
                    <strong>Discounted valuation</strong> - Only Prometheus
                    holders will have access to an investment opportunity at a
                    $45M valuation, while other investors will invest at a $50M
                    FDV.
                  </p>
                  <p>
                    <strong>Guaranteed allocation</strong> - During the
                    investment period, each Prometheus holder will have a
                    guaranteed allocation up to $3,000 per NFT held.
                  </p>
                  <p>
                    However, you can also invest in XBorg via SwissBorg’s
                    vaults.
                  </p>
                </Collapsible>
              </div>
            </>
          ) : null}
          {/* FUNDRAISING */}
          {activeCategories.length == 0 ||
          activeCategories.find((item) => item == "fundraising") ? (
            <>
              <div className="collapsible-container">
                <div className="collapsible-tag">Fundraising</div>
                <Collapsible
                  trigger="Do I need to KYC to invest?"
                  className="collapsible"
                >
                  <p>Yes, you need to KYC to invest in XBorg’s seed round.</p>
                  <p>
                    If you own a Prometheus NFT, you will need to KYC on XBorg’s
                    launchpad.
                  </p>
                  <p>
                    If you are investing via SwissBorg’s, the KYC process will
                    be done via the app directly.
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">Fundraising</div>
                <Collapsible
                  trigger="Have you already raised funds, and will you raise funds again?"
                  className="collapsible"
                >
                  <p>
                    We already raised $1M in a strategic rounds with leading
                    business angels.
                  </p>

                  <p>
                    Besides the current seed round, the only other opportunity
                    to invest in XBorg will be at TGE, during the public round.
                    This public round will be done via an LBP, with a starting
                    price of $0.50 per XBG token.
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">Fundraising</div>
                <Collapsible
                  trigger="Could you explain if there will be different stages between the private and public sales?"
                  className="collapsible"
                >
                  <p>
                    The seed round is the only available private round before
                    the public sale for Prometheus holders and the community.
                    The difference between the private and the public round are
                    the price, the allocation, and the locking period. The seed
                    price is substantially lower than the public price.
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">Fundraising</div>
                <Collapsible
                  trigger="Do I need a Prometheus NFT to invest in XBorg?"
                  className="collapsible"
                >
                  <p>
                    Owning a Prometheus NFT gives you exclusive advantages for
                    XBorg’s seed round.
                  </p>
                  <p>
                    <strong>Discounted valuation</strong> - Only Prometheus
                    holders will have access to an investment opportunity at a
                    $45M valuation, while other investors will invest at a $50M
                    FDV.
                  </p>
                  <p>
                    <strong>Guaranteed allocation</strong> - During the
                    investment period, each Prometheus holder will have a
                    guaranteed allocation up to $3,000 per NFT held.
                  </p>
                  <p>
                    However, you can also invest in XBorg via SwissBorg’s
                    vaults.
                  </p>
                </Collapsible>
              </div>
            </>
          ) : null}
          {/* OTHER */}
          {activeCategories.length == 0 ||
          activeCategories.find((item) => item == "other") ? (
            <>
              <div className="collapsible-container">
                <div className="collapsible-tag">Other</div>
                <Collapsible
                  trigger="How is the liquidity of XBorg? How much is in the treasury? Who has access to the treasury now?"
                  className="collapsible"
                >
                  <p>
                    XBorg has $800,000 in treasury and a gross burn rate of
                    $40'000 per month, meaning that XBorg has 20 months of
                    runway left, assuming that no profits are generated. The
                    treasury is maintained in multiple gnosis safe (multi sigs),
                    handled by Louis, the SwissBorg treasurer, and one SwissBorg
                    executive.
                  </p>
                </Collapsible>
              </div>

              <div className="collapsible-container">
                <div className="collapsible-tag">Other</div>
                <Collapsible
                  trigger="Where is the company registered?"
                  className="collapsible"
                >
                  <p>The company is registered in Dubai DMCC as XBorg DMCC.</p>
                </Collapsible>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
