import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../../components";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";

export type NavbarProps = {
  active: number;
};

export const Navbar = ({ active }: NavbarProps) => {
  const navRef = useRef(null);
  const navParentRef = useRef(null);

  const appVM = new AppViewModel();

  useEffect(() => {
    if (navRef.current && navParentRef.current) {
      const nav = navRef.current as unknown as HTMLElement;
      const navParent = navParentRef.current as unknown as HTMLElement;

      appVM.stickyNavbar(nav, navParent);
    }
  }, []);

  return (
    <div className="invest-navigation-container" ref={navParentRef}>
      <div className="invest-navigation row center middle" ref={navRef}>
        <Link to="/" className="go-back">
          <span>Back to xborg.com</span>
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
    </div>
  );
};
