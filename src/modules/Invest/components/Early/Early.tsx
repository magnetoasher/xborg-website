import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Images } from "../../../../assets/imgs/Images";
import {
  ButtonPrimary,
  LineGraph,
  ObserverContainer,
  SectionDescription,
} from "../../../../components";
import { Countdown } from "../../../../components/Countdown";
import { GlobalState } from "../../../../reducer";
import { SeedActions } from "../../../../redux/seed/actions";
import { AppDispatch } from "../../../../store";

export const Early = () => {
  const dispatch = useDispatch<AppDispatch>();
  const introRef = useRef(null);

  const seedSummary = useSelector((state: GlobalState) => state.seed.summary);

  useEffect(() => {
    dispatch(SeedActions.getSeed());
  }, []);

  return (
    <div className="row column we-are-early">
      <h2>
        We are still <span>early</span>
      </h2>
      <SectionDescription className="desc">
        Despite having attracted over 10,000 users to our protocol, launched the
        largest Web3 league, and integrated one of the biggest esports teams in
        Europe, we are still at the beginning of our journey with unlimited
        upside potential.
      </SectionDescription>

      <ObserverContainer className="lines-chart">
        <div className="multiplier">
          <span>x20</span> multiplier
        </div>
        <div className="lines-chart-container">
          <div className="data-container row between">
            <div className="single-line">
              <div className="line-filler" style={{ height: "33.333%" }}>
                <div className="line-value">$50m</div>
                <div className="single-name">
                  <img src={Images.invest.chart1} alt="" />
                  <span>XBorg</span>
                </div>
              </div>
            </div>
            <div className="single-line">
              <div className="line-filler" style={{ height: "47.59%" }}>
                <div className="line-value">$100m</div>
                <div className="single-name">
                  <img src={Images.invest.chart2} alt="" />
                  <span>Polemos</span>
                </div>
              </div>
            </div>
            <div className="single-line">
              <div className="line-filler" style={{ height: "51.06%" }}>
                <div className="line-value">$122m</div>
                <div className="single-name">
                  <img src={Images.invest.chart3} alt="" />
                  <span>Kapital DAO</span>
                </div>
              </div>
            </div>
            <div className="single-line">
              <div className="line-filler" style={{ height: "68.98%" }}>
                <div className="line-value">$250m</div>
                <div className="single-name">
                  <img src={Images.invest.chart4} alt="" />
                  <span>Yield Guild Games</span>
                </div>
              </div>
            </div>
            <div className="single-line">
              <div className="line-filler" style={{ height: "78.60%" }}>
                <div className="line-value">$350m</div>
                <div className="single-name">
                  <img src={Images.invest.chart5} alt="" />
                  <span>Galxe</span>
                </div>
              </div>
            </div>
            <div className="single-line">
              <div className="line-filler" style={{ height: "89.03%" }}>
                <div className="line-value">$680m</div>
                <div className="single-name">
                  <img src={Images.invest.chart6} alt="" />
                  <span>Verasity</span>
                </div>
              </div>
            </div>
            <div className="single-line">
              <div className="line-filler" style={{ height: "100%" }}>
                <div className="line-value">$1B</div>
                <div className="single-name">
                  <img src={Images.invest.chart7} alt="" />
                  <span>Chiliz</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lines">
            <span>$1B</span>
            <span>$200m</span>
            <span>$50m</span>
            <span>$0m</span>
          </div>
        </div>
      </ObserverContainer>

      <SectionDescription className="footnote">
        This is a forward-looking statement based on XBorg's assumptions. This
        chart cannot be deemed as a contractual commitment. XBorg bears no
        liability if any information contained in this chart is found inaccurate
        for any reason whatsoever and if the FDV is not in line with the
        forward-looking statements contained in this chart.
      </SectionDescription>
    </div>
  );
};
