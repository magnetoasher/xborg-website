import { Images } from "../../../../assets/imgs/Images";
import {
  ParallaxLayer,
  ObserverContainer,
  SectionHead,
} from "../../../../components";

export const TierOne = () => {
  return (
    <div className={`tier-one expand row column center`}>
      <div className='description'>
        <SectionHead
          title='Tier 1 Esports'
          description='The biggest, most competitive Web3 games only.'
        >
          <b>Tier 1</b> Esports
        </SectionHead>
      </div>
      <div className='games row'>
        <div className='single-game row middle'>
          <img src={Images.XCS.evio} alt='Ev.io' />
          <div className='desc'>Mint your free Ev.io NFT</div>
        </div>
        <div className='single-game row middle'>
          <img src={Images.XCS.hidden02} alt='Hidden' />
          <div className='desc'>Announcement on the 10/02</div>
        </div>
        <div className='single-game row middle'>
          <img src={Images.XCS.hidden03} alt='Hidden' />
          <div className='desc'>Announcement on the 08/02</div>
        </div>
        <div className='single-game row middle'>
          <img src={Images.XCS.hidden04} alt='Hidden' />
          <div className='desc'>Announcement on the 14/02</div>
        </div>
      </div>
    </div>
  );
};
