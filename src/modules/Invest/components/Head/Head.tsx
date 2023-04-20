import { useSelector } from "react-redux";
import { ButtonPrimary, Countdown, LineGraph } from "../../../../components";
import { GlobalState } from "../../../../reducer";

export const Head = () => {
  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);
  return (
    <div className="head invest-section-head">
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
            <span className="coming-desc">Starting in:</span>
            <Countdown
              date={new Date("May 02 2023 14:00:00 GMT+0200")}
              smaller
            />
          </div>

          <div className="row action">
            <ButtonPrimary label="Register interest" to="/seed" />
          </div>
        </div>

        {seedSummary?.summary.length && (
          <LineGraph data={seedSummary?.summary} />
        )}
      </div>
      <div className="mobile-coming lexend-heading-s text-center  row column middle center">
        <span>Starting in:</span>

        <Countdown date={new Date("May 02 2023 14:00:00 GMT+0200")} />
      </div>
    </div>
  );
};
