import { useState } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../../assets/imgs/Images";
import { Links } from "../../../../components";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const HowTo = () => {
  const [active, setActive] = useState<number>(-1);

  const handleChange = (number: number) => {
    if (active == number) setActive(-1);
    else setActive(number);
  };

  return (
    <div className="howto w-full row column middle center">
      <Head />
      <Navbar active={2} />

      <div className="content w-full">
        <h2>Choose a method of investment</h2>

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
                handleChange(-1);
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
            <div className="prometheus-holders">
              <div className="list-points row column">
                <div className="list-item">
                  Min/max investments: <span>$100-$3,000 per NFT held</span>
                </div>
                <div className="list-item">
                  Valuation: <span>$45M</span>
                </div>
                <div className="list-item">
                  Token price: <span>$0.045</span>
                </div>
                <div className="list-item">
                  Token required to invest: <span>USDC</span>
                </div>
              </div>

              <div className="data-rows row column top">
                <div className="data-block block-big with-cube">
                  <span>When?</span> 04/05 - 4 pm CET
                </div>
                <div className="data-block block-big with-cube">
                  <span>Where?</span> XBorg’s Launchpad -{" "}
                  <a href="https://launchpad.xborg.com/" target="_blank">
                    https://launchpad.xborg.com/
                  </a>
                </div>

                <div className="blocks-row row middle w-full">
                  <div className="data-block with-cube">Where?</div>

                  <img
                    src={Images.chevronRight}
                    alt="chevron"
                    className="chevron"
                  />
                  <div className="data-block expand">
                    XBorg’s Launchpad - https://launchpad.xborg.com/
                  </div>
                </div>

                <div className="blocks-row row middle w-full">
                  <div className="data-block with-cube">
                    How much can I invest?
                  </div>

                  <img
                    src={Images.chevronRight}
                    alt="chevron"
                    className="chevron"
                  />
                  <div className="data-block expand">
                    $100-$3,000 per NFT held
                  </div>
                </div>

                <div className="blocks-row row middle w-full">
                  <div className="data-block with-cube">
                    What’s the valuation?
                  </div>

                  <img
                    src={Images.chevronRight}
                    alt="chevron"
                    className="chevron"
                  />
                  <div className="data-block expand">
                    $45M (1 XBG token = $0.045)
                  </div>
                </div>

                <div className="blocks-row row middle w-full">
                  <div className="data-block with-cube">
                    What’s the valuation?
                  </div>

                  <img
                    src={Images.chevronRight}
                    alt="chevron"
                    className="chevron"
                  />
                  <div className="data-block expand">
                    $45M (1 XBG token = $0.045)
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="footnote">
          Not a Prometheus holder or a SwissBorg user? Discover your options to
          become eligible.
        </div>
      </div>

      <Links />
    </div>
  );
};
