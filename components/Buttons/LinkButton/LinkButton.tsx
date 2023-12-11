import { Images } from '@/assets/imgs';
import Image from 'next/image';
import Link from 'next/link';

interface ILinkButton {
  text: string;
  to: string;
}

export const LinkButton = ({ text, to }: ILinkButton) => {
  return (
    <Link href={to} className="link-button">
      {text}
      <Image
        src={Images.about.chevronRight}
        width={24}
        height={24}
        alt="arrow-right"
      />
    </Link>
  );
};
