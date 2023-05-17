import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ButtonPrimary,
  LineGraph,
  ObserverContainer,
} from "../../../../components";
import { GlobalState } from "../../../../reducer";

export const Head = () => {
  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);
  const [display, setChart] = useState(false);

  return (
    <ObserverContainer
      className="head invest-section-head"
      onAnimateIn={() => setChart(true)}
      onAnimateOut={() => setChart(false)}
    >
      <div className="head-content row middle between">
        <div className="head-details">
          <h2 className="vista-heading">
            Invest <span>in the future of XBorg</span>
          </h2>

          <p className="lexend-body-m">
            The only opportunity to invest early in XBorg, alongside the best
            investors of the space.
          </p>

          <div className="coming lexend-heading-s row middle">
            XBorg seed round is <span>live</span> for Prometheus holders!
          </div>

          <div className="row action">
            <ButtonPrimary
              label="Invest in XBorg"
              href="https://launchpad.xborg.com/"
              target="_blank"
            />
          </div>
        </div>

        {seedSummary?.summary.length && display ? (
          <LineGraph data={seedSummary?.summary} />
        ) : null}
      </div>
      <div className="w-full row middle center">
        <div className="mobile-coming lexend-heading-s text-center">
          XBorg seed round is <span>live</span> for Prometheus holders!
        </div>
      </div>
    </ObserverContainer>
  );
};
