import { Link } from "react-router-dom";
import { ObserverContainer } from "../ObserverContainer";

export type AlertProps = {
  text: string;
  to: string;
};

export const Alert = ({ to, text }: AlertProps) => {
  return (
    <ObserverContainer className="page-alert-container">
      <Link to={to} className="page-alert lexend-body-xs1">
        {text}
      </Link>
    </ObserverContainer>
  );
};
