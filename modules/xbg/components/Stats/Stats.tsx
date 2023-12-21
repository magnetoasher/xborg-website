import Image from 'next/image';
import { Images } from '@/assets/imgs';

export const Stats = () => {
  const renderGameFi = ({
    header,
    number,
    description,
  }: {
    header: string;
    number: string;
    description: string;
  }) => (
    <div className="block">
      <p>{header}</p>
      <div className="box">
        <span className="gradient">{number}</span>
        <span className="outline">{number}</span>
      </div>
      <p>{description}</p>
    </div>
  );
  const images = [
    {
      width: 45,
      height: 45,
      src: Images.landing.sphere7,
      className: 'layout-object1',
      alt: 'Object1',
    },
    {
      width: 45,
      height: 45,
      src: Images.landing.sphere7,
      className: 'layout-object2',
      alt: 'Object2',
    },
    {
      width: 25,
      height: 25,
      src: Images.landing.sphere7,
      className: 'layout-object3',
      alt: 'Object3',
    },
    {
      width: 45,
      height: 45,
      src: Images.landing.sphere7,
      className: 'layout-object4',
      alt: 'Object4',
    },
    {
      width: 45,
      height: 45,
      src: Images.landing.sphere7,
      className: 'layout-object5',
      alt: 'Object5',
    },
  ];

  return (
    <div className="xbg-stats">
      <div className="container inner-container">
        <h1 className="integralfc-h2 reveal-from-bottom">
          Onboarding the next generation of players
        </h1>
        <p className="lexend-body-sm-1 details">
          We’ve partnered with the world’s leading esports teams and gaming
          brands to revolutionise the way they interact with their players and
          fans.
        </p>
        <div className="block-wrapper">
          {renderGameFi({
            header: 'more than',
            number: '10',
            description:
              'Leading esports teams and gaming brands in the pipeline',
          })}
          {renderGameFi({
            header: 'more than',
            number: '10K',
            description: 'GamerBase Alpha signups',
          })}
          {renderGameFi({
            header: 'more than',
            number: '100K',
            description: 'Users on the GamerBase Beta waitlist',
          })}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
