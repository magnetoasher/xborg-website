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
            href="https://launchpad.xborg.com/project/the-harvest"
          />
          <Tile
            title="Rooniverse"
            image={Images.portfolio.rooniverse}
            href="https://launchpad.xborg.com/project/rooniverse"
          />
          <Tile
            title="The Bornless"
            image={Images.portfolio.bornless}
            href="https://launchpad.xborg.com/project/aether-games"
          />
          <Tile
            title="Aether Games"
            image={Images.portfolio.aether}
            href="https://launchpad.xborg.com/project/the-bornless"
          />
          <Tile
            title="Exverse"
            image={Images.portfolio.exverse}
            href="https://launchpad.xborg.com/project/exverse"
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
