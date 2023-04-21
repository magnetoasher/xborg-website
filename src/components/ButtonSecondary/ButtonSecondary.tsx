import { MouseEvent } from "react";
import { Link } from "react-router-dom";

export type ButtonSecondaryType = {
  label: string;
  to?: string;
  href?: string;
  target?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export const ButtonSecondary = ({
  label,
  target,
  to = "",
  href = "",
  onClick,
}: ButtonSecondaryType) => {
  if (to !== "")
    return (
      <Link
        to={to}
        onClick={onClick}
        className="btn-secondary row middle"
        target={target}
      >
        <div className="square" />
        {label}

        <ButtonArrow />
      </Link>
    );

  return (
    <a
      href={href}
      onClick={onClick}
      className="btn-secondary row middle"
      target={target}
    >
      <div className="square" />
      {label}

      <ButtonArrow />
    </a>
  );
};

const ButtonArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.62 3.95312L13.6667 7.99979L9.62 12.0465"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.33334 8H13.5533"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
