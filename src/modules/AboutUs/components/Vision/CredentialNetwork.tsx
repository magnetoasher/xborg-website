import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer } from "../../../../components";

export const CredentialNetwork = () => {
  return (
    <div className="credential-network row column center">
      <ObserverContainer className="row middle credential-details-wrapper">
        <div className="row column credential-network-parallaxed">
          <div className="row middle block-container">
            <div className="cn-block cn-block-first row middle">
              Player stats
            </div>

            <img
              src={Images.chevronRight}
              alt="chevron"
              className="chevron chevron-first"
            />
          </div>
          <div className="row middle block-container">
            <div className="cn-block cn-block-second row middle">
              In-game achievements
            </div>
            <img
              src={Images.chevronRight}
              alt="chevron"
              className="chevron chevron-second"
            />
          </div>

          <div className="row middle block-container">
            <div className="cn-block cn-block-third row middle">
              Fans & esports engagement
            </div>

            <img
              src={Images.chevronRight}
              alt="chevron"
              className="chevron chevron-third"
            />
          </div>
        </div>

        <div className="gaming-credential-layer row middle center column">
          <img src={Images.aboutUs.gcl} alt="" className="background" />
          <div className="cube cube-first" />
          <div className="title">Gaming Credential Layer</div>
          <div className="cube cube-second" />
        </div>

        <div className="credential-network-details row column center">
          <div className="title">Player profile</div>
          <p>Unified Gamer ID</p>
          <div className="space" />
          <div className="title">Credential API</div>
          <p>Allowing developers to build upon</p>
        </div>
      </ObserverContainer>
    </div>
  );
};
