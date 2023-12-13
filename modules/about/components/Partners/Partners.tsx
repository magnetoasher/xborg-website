import Image from 'next/image';
import { Images } from '@/assets/imgs';

type IPartnerLogo = {
  image: string;
  name: string;
  width: number;
  height: number;
};

interface IPartnerContainer {
  className: string;
  partners: IPartnerLogo[];
  showTitle: boolean;
}

export const Partners = () => {
  const FirstPartnerLogos = [
    {
      image: Images.about.swissBorgLogo,
      name: 'swiss-borg',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.polygonLogo,
      name: 'polygon',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.myriaLogo,
      name: 'myria',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.braveLogo,
      name: 'brave',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.immutableLogo,
      name: 'immutable',
      width: 120,
      height: 40,
    },
  ];

  const SecondPartnerLogos = [
    {
      image: Images.about.heroicLogo,
      name: 'heroic',
      width: 40,
      height: 40,
    },
    {
      image: Images.about.teamLiquidLogo,
      name: 'team-liquid',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.tezosLogo,
      name: 'tezos',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.plrLogo,
      name: 'plr',
      width: 40,
      height: 40,
    },
    {
      image: Images.about.ultraLogo,
      name: 'ultra',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.mantleLogo,
      name: 'mantle',
      width: 131,
      height: 55,
    },
    {
      image: Images.about.zilliqaLogo,
      name: 'zilliqa',
      width: 40,
      height: 40,
    },
  ];

  const BottomPartnerLogos = [
    {
      image: Images.about.ethereumLogo,
      name: 'ethereum',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.eslLogo,
      name: 'esl',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.shieldLogo,
      name: 'sheield',
      width: 40,
      height: 40,
    },
    {
      image: Images.about.aaveLogo,
      name: 'aave',
      width: 120,
      height: 40,
    },
    {
      image: Images.about.faceitLogo,
      name: 'faceit',
      width: 120,
      height: 40,
    },
  ];

  const renderPartnerContainer = ({
    partners,
    className,
    showTitle,
  }: IPartnerContainer) => (
    <div className={className}>
      {showTitle && <p>Business angels from</p>}
      {partners.map((partner, index) => (
        <Image
          key={index}
          alt={partner.name}
          src={partner.image}
          width={partner.width}
          height={partner.height}
          className="partner-logo"
        />
      ))}
    </div>
  );

  return (
    <div className="partners-container">
      <h1>Our partners</h1>
      {renderPartnerContainer({
        partners: FirstPartnerLogos,
        className: 'logo-container',
        showTitle: false,
      })}
      {renderPartnerContainer({
        partners: SecondPartnerLogos,
        className: 'logo-container',
        showTitle: false,
      })}
      {renderPartnerContainer({
        partners: BottomPartnerLogos,
        className: 'bottom-logo-container',
        showTitle: true,
      })}
    </div>
  );
};
