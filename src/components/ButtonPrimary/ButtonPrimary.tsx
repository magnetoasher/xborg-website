import { MouseEvent } from "react";
import { Link } from "react-router-dom";

export type ButtonPrimaryType = {
  label: string;
  icon?: any;
  to?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export const ButtonPrimary = ({
  label,
  to = "",
  icon = "",
  onClick,
}: ButtonPrimaryType) => {
  return (
    <Link to={to} onClick={onClick} className="btn-primary row middle center">
      <span className="expand">{label}</span>
      {icon}
    </Link>
  );
};
