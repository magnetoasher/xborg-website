import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { Images } from "../../../../assets/imgs/Images";
import { ButtonSecondary, Links } from "../../../../components";
import { Countdown } from "../../../../components/Countdown";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const HowTo = () => {
  const [active, setActive] = useState<number>(-1);

  const handleChange = (number: number) => {
    if (active == number) setActive(-1);
    else setActive(number);
  };

  const appVM = new AppViewModel();

  useEffect(() => {
    appVM.scrollBellowHeader();
  }, []);

  return (
    <div className="howto w-full row column middle center">
      <Head />
      <Navbar active={2} />

      <div className="content w-full">
        <h2>
          <span>Choose</span> a method of investment
        </h2>

        <div
          className={`w-full content-line${active !== -1 ? " with-line" : ""}`}
        >
          <div className="row middle choose-method">
            <Link
              to=""
              className={`row middle expand btn-method${
                active == 0 ? " active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleChange(0);
              }}
            >
              <div className="icon">
                <img src={Images.logowhite} alt="xborg" />
              </div>

              <div className="row column">
                <div className="btn-title">Prometheus holders</div>
                <div className="btn-desc">via XBorg’s launchpad</div>
              </div>
            </Link>

            <Link
              to=""
              className={`row middle expand btn-method${
                active == 1 ? " active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleChange(1);
              }}
            >
              <div className="icon">
                <img src={Images.invest.swissborg} alt="swissborg" />
              </div>

              <div className="row column">
                <div className="btn-title">Swissborg</div>
                <div className="btn-desc">via Swissborg’s app vaults</div>
              </div>
            </Link>
          </div>

          {active == 0 && (
            <>
              <div className="row column category-details prometheus-category">
                <div className="details-row row">
                  <div className="cat-image">
                    <div className="date">03/05</div>
                    <img src={Images.invest.prometheus} alt="Prometheus" />
                  </div>

                  <div className="row column">
                    <div className="cat-name">
                      <span>Prometheus</span> round
                    </div>
                    <ul>
                      <li>
                        Investment: <span>$100-$3,000 per NFT held</span>
                      </li>
                      <li>
                        Valuation: <span>$45M</span>
                      </li>
                      <li>
                        Token price: <span>$0.045</span>
                      </li>
                      <li>
                        Token required to invest: <span>USDC</span>
                      </li>
                    </ul>

                    <div className="starts-in row middle">
                      <span className="name">Starts in:</span>
                      <Countdown
                        date={new Date("May 03 2023 18:00:00 GMT+0200")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-footer">
                <div className="footer-title">Not a Prometheus holder?</div>

                <p>
                  Access the seed round at a discounted valuation and higher
                  maximum investment ticket.
                </p>

                <div className="row">
                  <ButtonSecondary
                    label="Purchase a Prometheus NFT"
                    to="https://opensea.io/collection/xborg-prometheus"
                    target="_blank"
                  />
                </div>
              </div>
              <div className="footer-spacer" />
              <div className="category-faq">
                <Collapsible
                  trigger="What is the benefit of owning a Prometheus NFT?"
                  className="collapsible"
                >
                  <p>
                    Discounted valuation - Only Prometheus holders will have
                    access to an investment opportunity at a $45M valuation,
                    while other investors will invest at a $50M FDV.
                  </p>
                  <p>
                    Guaranteed allocation - During the investment period, each
                    Prometheus holder will have a guaranteed allocation up to
                    $3,000 per NFT held.
                  </p>
                </Collapsible>
                <Collapsible
                  trigger="What do I need to do to get ready?"
                  className="collapsible"
                >
                  <p>
                    1. Make sure you complete the KYC process on
                    https://launchpad.xborg.com with the wallet that holds your
                    Prometheus NFT(s),
                    <br />
                    2. Get $USDC on your wallet.
                  </p>
                </Collapsible>
              </div>
            </>
          )}

          {active == 1 && (
            <>
              <div className="row column category-details swissborg">
                <div className="details-row row">
                  <div className="cat-image">
                    <div className="date">Coming soon</div>
                    <img src={Images.invest.swiss1} alt="Swiss 1" />
                    <div className="vault-size">Vault size | $100k</div>
                  </div>

                  <div className="row column">
                    <div className="cat-name">
                      <span>Public</span> Vault
                    </div>
                    <ul>
                      <li>
                        Investment: <span>$100</span>
                      </li>
                      <li>
                        Requirement: <span>KYC level 2+</span>
                      </li>
                      <li>
                        Valuation: <span>$55M</span>
                      </li>
                      <li>
                        Token price: <span>$0.055</span>
                      </li>
                      <li>
                        Token required to invest: <span>CHSB</span>
                      </li>
                    </ul>

                    <div className="starts-in row middle">
                      <span className="name">Coming soon</span>
                      {/* <span className="name">Starts in:</span>
                      <Countdown date={new Date("2025/11/11")} /> */}
                    </div>
                  </div>
                </div>

                <div className="details-row row">
                  <div className="cat-image">
                    <div className="date">Coming soon</div>
                    <img src={Images.invest.swiss2} alt="Swiss 2" />
                    <div className="vault-size">Vault size | $500k +</div>
                  </div>

                  <div className="row column">
                    <div className="cat-name">
                      <span>Genesis</span> Vault
                    </div>
                    <ul>
                      <li>
                        Investment:{" "}
                        <span>$100 - $3,000 (guaranteed allocation)</span>
                      </li>
                      <li>
                        Requirement: <span>Genesis status</span>
                      </li>
                      <li>
                        Valuation: <span>$50M</span>
                      </li>
                      <li>
                        Token price: <span>$0.050</span>
                      </li>
                      <li>
                        Token required to invest: <span>USDC</span>
                      </li>
                    </ul>

                    <div className="starts-in row middle">
                      <span className="name">Coming soon</span>
                      {/* <span className="name">Starts in:</span>
                      <Countdown date={new Date("2025/11/11")} /> */}
                    </div>
                  </div>
                </div>

                <div className="details-row row">
                  <div className="cat-image">
                    <div className="date">Coming soon</div>
                    <img src={Images.invest.swiss3} alt="Swiss 3" />
                    <div className="vault-size">Vault size | $200k</div>
                  </div>

                  <div className="row column">
                    <div className="cat-name">
                      <span>Premium</span> Vault
                    </div>
                    <ul>
                      <li>
                        Investment: <span>Based on in-app status</span>
                      </li>
                      <li>
                        Requirement: <span>Standard or above</span>
                      </li>
                      <li>
                        Valuation: <span>$50M</span>
                      </li>
                      <li>
                        Token price: <span>$0.050</span>
                      </li>
                      <li>
                        Token required to invest: <span>USDC</span>
                      </li>
                    </ul>

                    <div className="starts-in row middle">
                      <span className="name">Coming soon</span>
                      {/* <span className="name">Starts in:</span>
                      <Countdown date={new Date("2025/11/11")} /> */}
                    </div>
                  </div>
                </div>

                <div className="details-row row">
                  <div className="cat-image">
                    <div className="date">Coming soon</div>
                    <img src={Images.invest.swiss4} alt="Swiss 4" />
                    <div className="vault-size">Vault size | $200k</div>
                  </div>

                  <div className="row column">
                    <div className="cat-name">
                      <span>Series A</span> Vault
                    </div>
                    <ul>
                      <li>
                        Investment: <span>$100 - $2,000</span>
                      </li>
                      <li>
                        Requirement: <span>SwissBorg’s Series A investor</span>
                      </li>
                      <li>
                        Valuation: <span>$50M</span>
                      </li>
                      <li>
                        Token price: <span>$0.050</span>
                      </li>
                      <li>
                        Token required to invest: <span>USDC</span>
                      </li>
                    </ul>

                    <div className="starts-in row middle">
                      {/* <span className="name">Starts in:</span>
                      <Countdown date={new Date("2025/11/11")} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-footer">
                <div className="footer-title">Not a SwissBorg user?</div>
                <p>
                  Sign up and get access to the future of wealth, plus earn up
                  to €100 in crypto rewards.
                </p>

                <div className="row">
                  <ButtonSecondary
                    label="Open a SwissBorg account"
                    to="https://swissborg.com/"
                    target="_blank"
                  />
                </div>
              </div>
              <div className="footer-spacer" />
              <div className="category-faq">
                <Collapsible
                  trigger="What are SwissBorg Vaults?"
                  className="collapsible"
                >
                  <p>
                    Vaults are limited size opportunities for SwissBorg users to
                    deposit assets and benefit from an opportunity. In the case
                    of the XBorg investment round, access to $XBG.
                  </p>
                </Collapsible>
                <Collapsible
                  trigger="What is the difference between SwissBorg and XBorg?"
                  className="collapsible"
                >
                  <p>
                    XBorg is building a Gaming Credential and Application
                    Network for players and Decentralized Gaming Societies,
                    enabling them to build their digital identity and play a
                    greater role in esports organizations. SwissBorg, is a
                    crypto app revolutionizing wealth management with 750,000
                    users. XBorg is the gaming venture of the SwissBorg
                    ecosystem.
                  </p>
                </Collapsible>
                <Collapsible trigger="What is $CHSB?" className="collapsible">
                  <p>
                    The ERC-20 utility token known as $CHSB powers the SwissBorg
                    ecosystem and provides benefits such as voting rights,
                    access to premium membership, and additional rewards. You
                    will need to buy $CSHB directly in the SwissBorg app to
                    invest in the Public vault, while investment in other vaults
                    are done with $USDC.
                  </p>
                </Collapsible>
                <Collapsible
                  trigger="What is SwissBorg Genesis"
                  className="collapsible"
                >
                  <p>
                    Genesis members are a tier of premium users in the SwissBorg
                    ecosystem. To learn more about the various premium tiers,
                    follow this{" "}
                    <a
                      href="https://swissborg.com/premium-account"
                      target="_blank"
                    >
                      link
                    </a>
                    .
                  </p>
                </Collapsible>
                <Collapsible
                  trigger="What is SwissBorg Series A"
                  className="collapsible"
                >
                  <p>
                    The SwissBorg Series A was a funding round cunducted by
                    SwissBorg. The fundraise is a capital increase conducted by
                    SwissBorg Community AG in order to acquire a share of the
                    capital of SBorg SA, the holding entity of the SwissBorg
                    group, which will in turn invest the proceeds from this
                    acquisition in order to accelerate the development and
                    growth of SwissBorg.
                  </p>
                </Collapsible>
              </div>
            </>
          )}
        </div>
      </div>

      <Links />
    </div>
  );
};