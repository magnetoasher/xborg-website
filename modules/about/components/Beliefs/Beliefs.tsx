import Image from 'next/image';
import { Images } from '@/assets/imgs';

import { CardData } from '@/constants';

export const Beliefs = () => {
  return (
    <div className="about-container">
      <div className="layout-image">
        <Image
          src={Images.about.spheres}
          width={80}
          height={108}
          alt="layout-image1"
        />
      </div>

      <div className="container content">
        <h1>Our beliefs</h1>
        <div className="cards-container">
          {CardData?.map((cardData, index: number) => (
            <div className="card" key={index}>
              <Image
                src={Images.about[cardData?.icon]}
                alt="icon"
                width={78}
                height={98}
              />
              <div className="content">
                <h3>{cardData?.title}</h3>
                <p>{cardData?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
