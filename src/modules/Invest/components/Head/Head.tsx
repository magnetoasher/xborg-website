import { useSelector } from "react-redux";
import {
  ButtonPrimary,
  Countdown,
  LineGraph,
  ObserverContainer,
} from "../../../../components";
import { GlobalState } from "../../../../reducer";
import { useState } from "react";

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
            <span className="coming-desc">Seed round starts in:</span>
            <Countdown
              date={new Date("May 22 2023 14:00:00 GMT+0200")}
              smaller
            />
          </div>

          <div className="row action">
            <ButtonPrimary label="Register interest" to="/seed" />
          </div>
        </div>

        {seedSummary?.summary.length && display ? (
          <LineGraph data={seedSummary?.summary} />
        ) : null}
      </div>
      <div className="mobile-coming lexend-heading-s text-center  row column middle center">
        <span>Seed round starts in:</span>

        <Countdown date={new Date("May 15 2023 14:00:00 GMT+0200")} />
      </div>
    </ObserverContainer>
  );
};
