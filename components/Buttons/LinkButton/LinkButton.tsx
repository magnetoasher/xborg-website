import { Images } from '@/assets/imgs';
import Image from 'next/image';
import Link from 'next/link';

interface ILinkButton {
  text: string;
  to: string;
}

export const LinkButton = ({ text, to }: ILinkButton) => {
  return (
    <Link href={to} className="link link-button">
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.7 11.675L9.70005 17.675L8.30005 16.275L12.9 11.675L8.30005 7.07505L9.70005 5.67505L15.7 11.675Z"
          fill="#EB3A4A"
        />
      </svg>
    </Link>
  );
};
