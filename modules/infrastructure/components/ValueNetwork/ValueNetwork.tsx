import { Images } from '@/assets/imgs';
import Image from 'next/image';

export const ValueNetwork = () => {
  return (
    <div id="value-network" className="infrastructure-value-network">
      <Image
        className="bubbles"
        src={Images.infrastructure.valueNetworkBubbles}
        alt="bubbles"
        width={124}
        height={249}
      />
      <div className="container">
        <h1 className="integralfc-h1">The value network of gaming</h1>
        <div className="lexend-body-md gray300 text-center">
          The fundamental protocol that allows anyone to create gaming
          applications built on top of player identities.
        </div>

        <div className="boxes">
          <div className="box">
            <div className="box-heading">The gaming social layer</div>
            <div className="lexend-body-md gray300">
              Players take control of their data by building their gaming
              identity.
            </div>
            <Image
              src={Images.infrastructure.valueNetwork1}
              alt="Gaming social"
              width={88}
              height={88}
            />
          </div>
          <div className="box">
            <div className="box-heading">Build next-gen fat dapps</div>
            <div className="lexend-body-md gray300">
              Plug apps into our gaming credential infrastructure.
            </div>
            <Image
              src={Images.infrastructure.valueNetwork2}
              alt="Next-gen fat dapps"
              width={88}
              height={88}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
