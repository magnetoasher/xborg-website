import { MouseEvent } from "react";

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
    <a href={to} onClick={onClick} className="btn-primary row middle center">
      <span className="expand">{label}</span>
      {icon}
    </a>
  );
};
