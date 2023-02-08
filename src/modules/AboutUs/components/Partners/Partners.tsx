import { Images } from "../../../../assets/imgs/Images";
import { SectionHead } from "../../../../components";

export const Partners = () => {
  return (
    <div className='partners expand row middle'>
      <div className='partners-content row'>
        <div className='partners-list expand'>
          <SectionHead title='Our Partners' />

          <div className='list row'>
            <div className='list-item'>
              <img src={Images.partners.partner02} alt='' />
            </div>
            <div className='list-item'>
              <img src={Images.partners.partner03} alt='' />
            </div>
            <div className='list-item'>
              <img src={Images.partners.partner04} alt='' />
            </div>
            <div className='list-item'>
              <img src={Images.partners.partner05} alt='' />
            </div>
            <div className='list-item'>
              <img src={Images.partners.partner06} alt='' />
            </div>
            <div className='list-item'>
              <img src={Images.partners.partner07} alt='' />
            </div>
          </div>
        </div>
        <div className='powered-by expand'>
          <SectionHead
            title='SwissBorg'
            description='XBorg is powered by SwissBorg, a Swiss crypto app revolutionizing wealth management.'
          />
          <img
            src={Images.partners.partner01}
            alt=''
            className='main-partner'
          />
        </div>
      </div>
    </div>
  );
};
