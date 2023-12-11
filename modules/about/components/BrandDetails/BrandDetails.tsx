import Image from 'next/image';
import { LinkButton } from '@/components/Buttons/LinkButton';
import { Images } from '@/assets/imgs';

export const BrandDetails = () => {
  return (
    <div className="brand-container">
      <div className="inner-container">
        <div className="title-container">
          <div className="title-wrapper1">
            <Image
              src={Images.about.swissBorg}
              width={69}
              height={69}
              alt="brand-logo"
            />
            <h1>SwissBorg</h1>
          </div>
          <h1>Spin-Off</h1>
        </div>
        <div className="details-container">
          <p>
            XBorg is the gaming spin-off of SwissBorg, a crypto wealth
            management application founded in 2017, with more than 750’000
            verified users and over $1 billion in AUM.
          </p>
          <LinkButton text="Learn more" to="" />
        </div>
      </div>
      <div className="layout-object1">
        <Image
          src={Images.about.spheres4}
          width={57}
          height={57}
          alt="layout-object11"
        />
      </div>
      <div className="layout-object2">
        <Image
          src={Images.about.spheres4}
          width={73}
          height={73}
          alt="layout-object44"
        />
      </div>
      <div className="layout-object3">
        <Image
          src={Images.about.spheres4}
          width={79}
          height={79}
          alt="layout-object33"
        />
      </div>
    </div>
  );
};
