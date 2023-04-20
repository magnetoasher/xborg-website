import { MouseEvent } from "react";
import { Link } from "react-router-dom";

export type ButtonPrimaryType = {
  label: string;
  icon?: any;
  to?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  target?: string;
};

export const ButtonPrimary = ({
  label,
  to = "",
  href = "",
  icon = "",
  target,
  onClick,
}: ButtonPrimaryType) => {
  if (to !== "")
    return (
      <Link
        to={to}
        onClick={onClick}
        className="btn-primary row middle center"
        target={target}
      >
        <span className="expand">{label}</span>
        {icon}
      </Link>
    );

  return (
    <a
      href={href}
      onClick={onClick}
      className="btn-primary row middle center"
      target={target}
    >
      <span className="expand">{label}</span>
      {icon}
    </a>
  );
};
