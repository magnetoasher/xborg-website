import { Link } from "react-router-dom";

export type AlertProps = {
  text: string;
  to: string;
};

export const Alert = ({ to, text }: AlertProps) => {
  return (
    <Link to={to} className="page-alert">
      {text}
    </Link>
  );
};
