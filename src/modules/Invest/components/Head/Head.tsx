import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonPrimary,
  LineGraph,
  SectionDescription,
} from "../../../../components";
import { Countdown } from "../../../../components/Countdown";
import { GlobalState } from "../../../../reducer";
import { SeedActions } from "../../../../redux/seed/actions";
import { AppDispatch } from "../../../../store";

export const Head = () => {
  const dispatch = useDispatch<AppDispatch>();
  const introRef = useRef(null);

  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);

  useEffect(() => {
    dispatch(SeedActions.getSeed());
  }, []);

  return (
    <div className="row middle between head">
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
          <Countdown date={new Date("2023/05/01")} />
        </div>

        <div className="row">
          <ButtonPrimary label="Register interest" />
        </div>
      </div>

      <LineGraph data={seedSummary?.summary} />
    </div>
  );
};
