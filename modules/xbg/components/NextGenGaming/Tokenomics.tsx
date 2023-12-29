import { Images } from '@/assets/imgs';
import Image from 'next/image';

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <div className="header">
        <div className="top-container">
          <div className="box">
            <p className="lexend-body-s l">Network</p>
            <p className="lexend-body-sxl ">Ethereum</p>
          </div>
          <div className="box">
            <p className="lexend-body-s l">Supply</p>
            <p className="lexend-body-sxl ">1B</p>
          </div>
        </div>
        <h1 className="integralfc-h2">Tokenomics</h1>
      </div>
      <div className="spheres-container">
        <div className="t-sphere t-sphere-1">
          <div className="image">
            <Image
              src={Images.landing.sphere3}
              alt=""
              quality={100}
              width={234}
              height={234}
            />
          </div>
          <div className="text-box">
            <span className="lexend-body-sm l">Project and ecosystem</span>
            <span className="lexend-body-sl">42%</span>
          </div>
        </div>
        <div className="t-sphere t-sphere-2">
          <div className="image">
            <Image
              src={Images.landing.sphere7}
              alt=""
              width={136}
              height={136}
            />
          </div>
          <div className="text-box">
            <span className="lexend-body-sm l">Team</span>
            <span className="lexend-body-sl">15%</span>
          </div>
        </div>
        <div className="t-sphere t-sphere-3">
          <div className="image">
            <Image
              src={Images.landing.sphere9}
              alt=""
              width={126}
              height={126}
            />
          </div>
          <div className="text-box">
            <span className="lexend-body-sm l">Seed and Strategic round</span>
            <span className="lexend-body-sl">14%</span>
          </div>
        </div>
        <div className="t-sphere t-sphere-4">
          <div className="image">
            <Image src={Images.landing.sphere5} alt="" width={76} height={76} />
          </div>
          <div className="text-box">
            <span className="lexend-body-sm l">Protocol incentives</span>
            <span className="lexend-body-sl">7.5%</span>
          </div>
        </div>
        <div className="t-sphere t-sphere-5">
          <div className="image">
            <Image src={Images.landing.sphere8} alt="" width={76} height={76} />
          </div>
          <div className="text-box">
            <span className="lexend-body-sm l">Public round</span>
            <span className="lexend-body-sl">7.5%</span>
          </div>
        </div>
        <div className="t-sphere t-sphere-6">
          <div className="image">
            <Image src={Images.landing.sphere6} alt="" width={76} height={76} />
          </div>
          <div className="text-box">
            <span className="lexend-body-sm l">Advisors and partners</span>
            <span className="lexend-body-sl">7.5%</span>
          </div>
        </div>
        <div className="t-sphere t-sphere-7">
          <div className="image">
            <Image src={Images.landing.sphere8} alt="" width={76} height={76} />
          </div>
          <div className="text-box">
            <span className="lexend-body-sm l">Staking</span>
            <span className="lexend-body-sl">8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tokenomics;
