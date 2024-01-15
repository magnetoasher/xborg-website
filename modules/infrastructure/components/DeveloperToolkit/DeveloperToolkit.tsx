import { Images } from '@/assets/imgs';
import Image from 'next/image';

export const DeveloperToolkit = () => {
  return (
    <div className="infrastructure-developer-toolkit">
      <div className="container">
        <div className="toolkit-main">
          <div className="left">
            <h2 className="integralfc-h2">Developer toolkit</h2>
            <p className="lexend-body-sm">
              The GraphQL-powered SDK provides a flexible and streamlined way
              for developers to build next-gen gaming applications and services
              that harness the full potential of the XBorg Data Graph Protocol.
              <br />
              <br />
              With GraphQL, developers can precisely request specific data
              points, retrieve interconnected player profiles, gaming
              achievements, statistics, preferences, and collectibles.
            </p>
          </div>
          <div className="right">
            <div className="keys">
              <div className="key-container">
                <div className="key">
                  <Image
                    src={Images.infrastructure.key}
                    alt="key"
                    width={48}
                    height={48}
                  />
                  <div className="text">CSGO Fan</div>
                </div>
              </div>
              <div className="key-container">
                <div className="key">
                  <Image
                    src={Images.infrastructure.key}
                    alt="key"
                    width={48}
                    height={48}
                  />
                  <div className="text">Top 10% Player</div>
                </div>
              </div>
            </div>

            <div className="retrieve lexend-text-s">
              Retrieve players profile
            </div>
            <div className="line"></div>

            <div className="pills-container">
              <div className="pill-box">
                <Image
                  src={Images.infrastructure.gamingWebLogo1}
                  alt="logo"
                  width={64}
                  height={64}
                />
                <div className="lexend-body-md text">MonkeyIslander872</div>
              </div>
              <div className="pill-box">
                <Image
                  src={Images.infrastructure.gamingWebLogo2}
                  alt="logo"
                  width={64}
                  height={64}
                />
                <div className="lexend-body-md text">mean_deal_</div>
              </div>
              <div className="pill-box">
                <Image
                  src={Images.infrastructure.gamingWebLogo3}
                  alt="logo"
                  width={64}
                  height={64}
                />
                <div className="lexend-body-md text">TennisChallenger</div>
              </div>
              <div className="pill-box">
                <Image
                  src={Images.infrastructure.gamingWebLogo4}
                  alt="logo"
                  width={64}
                  height={64}
                />
                <div className="lexend-body-md text">DoozieWoozie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
