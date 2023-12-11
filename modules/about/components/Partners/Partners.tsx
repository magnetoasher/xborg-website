import Image from 'next/image';
import { Images } from '@/assets/imgs';

type IPartnerLogo = {
  image: string;
  name: string;
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
    },
    {
      image: Images.about.polygonLogo,
      name: 'polygon',
    },
    {
      image: Images.about.myriaLogo,
      name: 'myria',
    },
    {
      image: Images.about.braveLogo,
      name: 'brave',
    },
    {
      image: Images.about.immutableLogo,
      name: 'immutable',
    },
  ];

  const SecondPartnerLogos = [
    {
      image: Images.about.heroicLogo,
      name: 'heroic',
    },
    {
      image: Images.about.teamLiquidLogo,
      name: 'team-liquid',
    },
    {
      image: Images.about.tezosLogo,
      name: 'tezos',
    },
    {
      image: Images.about.plrLogo,
      name: 'plr',
    },
    {
      image: Images.about.ultraLogo,
      name: 'ultra',
    },
    {
      image: Images.about.mantleLogo,
      name: 'mantle',
    },
    {
      image: Images.about.zilliqaLogo,
      name: 'zilliqa',
    },
  ];

  const BottomPartnerLogos = [
    {
      image: Images.about.ethereumLogo,
      name: 'ethereum',
    },
    {
      image: Images.about.eslLogo,
      name: 'esl',
    },
    {
      image: Images.about.shieldLogo,
      name: 'sheield',
    },
    {
      image: Images.about.aaveLogo,
      name: 'aave',
    },
    {
      image: Images.about.faceitLogo,
      name: 'faceit',
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
          width={120}
          height={40}
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
