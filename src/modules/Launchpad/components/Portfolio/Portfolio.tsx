import { Images } from "../../../../assets/imgs/Images";
import { SectionHead } from "../../../../components";
import { Tile } from "../../../../components/Tile";

export const Portfolio = () => {
  return (
    <div className="portfolio row middle center">
      <div className="description">
        <SectionHead title="Portfolio" />

        <div className="list row">
          <Tile
            title="The harvest"
            image={Images.portfolio.harvest}
            slug="the-harvest"
          />
          <Tile
            title="Rooniverse"
            image={Images.portfolio.rooniverse}
            slug="rooniverse"
          />
          <Tile
            title="The Bornless"
            image={Images.portfolio.aether}
            slug="aether-games"
          />
          <Tile
            title="Aether Games"
            image={Images.portfolio.bornless}
            slug="the-bornless"
          />
          <Tile
            title="Exverse"
            image={Images.portfolio.exverse}
            slug="exverse"
          />
        </div>

        <div className="statistics row">
          <div className="col">
            <div className="stats-value">$180K</div>
            <div className="stats-label">Raised</div>
          </div>
          <div className="col">
            <div className="stats-value">6</div>
            <div className="stats-label">Games</div>
          </div>
          <div className="col">
            <div className="stats-value">78%</div>
            <div className="stats-label">Average valuation discount</div>
          </div>
          <div className="col">
            <div className="stats-value">290</div>
            <div className="stats-label">amount of unique investors</div>
          </div>
        </div>
      </div>
    </div>
  );
};
