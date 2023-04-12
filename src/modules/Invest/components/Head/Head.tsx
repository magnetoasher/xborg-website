import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  ButtonPrimary,
  LineGraph,
  SectionDescription,
} from "../../../../components";
import { Countdown } from "../../../../components/Countdown";
import { GlobalState } from "../../../../reducer";

export const Head = () => {
  const introRef = useRef(null);

  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);

  return (
    <div className="head">
      <div className="head-content row middle between">
        <div className="head-details">
          <h2>
            Invest <span ref={introRef}>in the future of XBorg</span>
          </h2>

          <SectionDescription className="subtitle">
            The only opportunity to invest early in XBorg, alongside the best
            investors of the space.
          </SectionDescription>

          <div className="coming row middle">
            <span className="coming-desc">Coming end of April</span>
            <Countdown date={new Date("May 02 2023 14:00:00 GMT+0200")} />
          </div>

          <div className="row action">
            <ButtonPrimary label="Register interest" to="/seed" />
          </div>
        </div>

        {seedSummary?.summary.length && (
          <LineGraph data={seedSummary?.summary} />
        )}
      </div>
      <div className="mobile-coming text-center w-full">
        Coming end of April
      </div>
    </div>
  );
};
