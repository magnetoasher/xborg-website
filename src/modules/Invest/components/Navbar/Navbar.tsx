import { Link } from "react-router-dom";
import { Images } from "../../../../assets/imgs/Images";
import { ButtonPrimary } from "../../../../components";

export type NavbarProps = {
  active: number;
};

export const Navbar = ({ active }: NavbarProps) => {
  return (
    <div className="invest-navigation row between middle">
      <Link to="/" className="go-back">
        <span>Back to xborg.com</span>

        <div className="goback-logo">
          <img src={Images.logo.default} alt="Back to xborg.com" />
        </div>
      </Link>

      <div className="sticky-tabs tabs">
        <div className="heads row middle">
          <div className={`head-item${active == 0 ? " active" : ""}`}>
            <Link to="/about-xborg">About XBorg</Link>
          </div>
          <div className={`head-item${active == 1 ? " active" : ""}`}>
            <Link to="/why-invest">Why invest?</Link>
          </div>
          <div className={`head-item${active == 2 ? " active" : ""}`}>
            <Link to="/how-to-invest">How to invest</Link>
          </div>
          <div className={`head-item${active == 3 ? " active" : ""}`}>
            <Link to="/news-events">Events & News</Link>
          </div>
          <div className={`head-item${active == 4 ? " active" : ""}`}>
            <Link to="/invest-faq">FAQ</Link>
          </div>
        </div>
      </div>

      <ButtonPrimary label="Register interest" to="seed" />
    </div>
  );
};
