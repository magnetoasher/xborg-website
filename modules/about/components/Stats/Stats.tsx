import Image from 'next/image';
import { Images } from '@/assets/imgs';

export const Stats = () => {
  const renderGameFi = ({
    header,
    img,
    alt,
    width,
    height,
    description,
  }: {
    header: string;
    img: string;
    alt: string;
    width: number;
    height: number;
    description: string;
  }) => (
    <div className="block">
      <p>{header}</p>
      <Image src={img} alt={alt} width={width} height={height} />
      <p>{description}</p>
    </div>
  );
  const images = [
    {
      width: 45,
      height: 45,
      src: Images.about.spheres2,
      className: 'layout-object1',
      alt: 'Object1',
    },
    {
      width: 45,
      height: 45,
      src: Images.about.spheres2,
      className: 'layout-object2',
      alt: 'Object2',
    },
    {
      width: 25,
      height: 25,
      src: Images.about.spheres2,
      className: 'layout-object3',
      alt: 'Object3',
    },
    {
      width: 45,
      height: 45,
      src: Images.about.spheres2,
      className: 'layout-object4',
      alt: 'Object4',
    },
    {
      width: 45,
      height: 45,
      src: Images.about.spheres2,
      className: 'layout-object5',
      alt: 'Object5',
    },
  ];

  return (
    <div className="stats-container">
      <div className="inner-container">
        <h1>The fastest growing GameFi ecosystem</h1>
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
          viverra lectus. In aliquam bibendum varius. Suspendisse et justo
          finibus, feugiat nunc ut, lobortis metus
        </p>
        <div className="block-wrapper">
          {renderGameFi({
            header: 'more than',
            img: Images.about.twnt,
            alt: '20',
            width: 160,
            height: 90,
            description: 'Example* Esports team already using platform',
          })}
          {renderGameFi({
            header: 'more than',
            img: Images.about.fourK,
            alt: '400k',
            width: 220,
            height: 90,
            description: 'Example* Credentials added to our website',
          })}
          {renderGameFi({
            header: 'more than',
            img: Images.about.oneM,
            alt: '1m',
            width: 160,
            height: 90,
            description: 'Example* Users registered and using our website',
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
