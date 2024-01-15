import { Images } from '@/assets/imgs';
import Image from 'next/image';

export const Login = () => {
  return (
    <div className="infrastructure-login">
      <div className="container">
        <h1 className="integralfc-h1">LOGIN WITH YOUR GAMING PROFILE</h1>
        <p className="lexend-body-sm">
          To facilitate seamless integration with various gaming applications
          and platforms, the XBorg Data Graph enables players to use their
          gaming profiles for single sign-on. This feature streamlines the user
          experience, eliminating the need for redundant account creation and
          enhancing accessibility to applications within the ecosystem.
        </p>

        <div className="boxes">
          <div className="box red lexend-body-md">
            Xborg <br />
            player profile
          </div>
          <div className="pill-box-container lexend-body-sm">
            <div className="pill-box lexend-body-sm">
              <Image
                src={Images.infrastructure.user}
                alt="user"
                width={40}
                height={40}
              />
              <div className="text">Sign in with XBorg</div>
            </div>
          </div>
          <div className="box black lexend-body-md">
            Xborg-powered <br />
            applications
          </div>
        </div>
      </div>
    </div>
  );
};
