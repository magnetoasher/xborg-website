import { MouseEvent } from "react";

export type ButtonPrimaryType = {
  label: string;
  icon?: any;
  to?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  target?: string;
};

export const ButtonPrimary = ({
  label,
  to = "",
  icon = "",
  target,
  onClick,
}: ButtonPrimaryType) => {
  return (
    <a
      href={to}
      onClick={onClick}
      className="btn-primary row middle center"
      target={target}
    >
      <span className="expand">{label}</span>
      {icon}
    </a>
  );
};
