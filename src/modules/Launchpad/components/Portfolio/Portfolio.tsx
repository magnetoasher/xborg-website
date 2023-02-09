import { Images } from "../../../../assets/imgs/Images";
import { SectionHead } from "../../../../components";
import { Tile } from "../../../../components/Tile";

export const Portfolio = () => {
  return (
    <div className='portfolio row middle center'>
      <div className='description'>
        <SectionHead title='Portfolio' />

        <div className='list row'>
          <Tile title='The harvest' image={Images.portfolio.harvest} />
          <Tile title='Rooniverse' image={Images.portfolio.rooniverse} />
          <Tile title='The Bornless' image={Images.portfolio.aether} />
          <Tile title='Aether Games' image={Images.portfolio.bornless} />
          <Tile title='Exverse' image={Images.portfolio.exverse} />
        </div>

        <div className='statistics row'>
          <div className='col'>
            <div className='stats-value'>$180K</div>
            <div className='stats-label'>Raised</div>
          </div>
          <div className='col'>
            <div className='stats-value'>5</div>
            <div className='stats-label'>Games</div>
          </div>
          <div className='col'>
            <div className='stats-value'>3</div>
            <div className='stats-label'>Months Time</div>
          </div>
          <div className='col'>
            <div className='stats-value'>290</div>
            <div className='stats-label'>amount of unique investors</div>
          </div>
        </div>
      </div>
    </div>
  );
};
